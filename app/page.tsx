import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import { Image } from "@heroui/image";

import { EXPERIENCEPROPS } from "./types/experience";
import ProjectSection from "./partials/Project";

import { METAINFOPROPS } from "@/app/types/meta";
import SocialSection from "./partials/socials";
import SkillSection from "./partials/Skill";

type Props = {
  MetaInfo: METAINFOPROPS;
  allExperience: { edges: EXPERIENCEPROPS[] };
};

const getData = async () => {
  const client = new GraphQLClient(
    `https://cloud.caisy.io/api/v3/e/${process.env.PROJECT_ID}/graphql`,
    {
      headers: {
        "x-caisy-apikey": `${process.env.API_KEY}`,
      },
      cache: "no-cache",
    }
  );

  const gqlResponse: Props = await client.request(gql`
    query GetMetaInfo {
      MetaInfo {
        title
        tiktok
        phone
        instagram
        image {
          id
          title
          src
        }
        id
        facebook
        description
        job
        drive
        instagram2
        youtube
      }
      allExperience(sort: { createdAt: DESC }) {
        edges {
          node {
            id
            thumbnail {
              ... on Asset {
                id
                title
                src
              }
            }
            tiktok
            title
            years
            youtube
            description
            link
            instagram
          }
        }
      }
    }
  `);

  return gqlResponse;
};

export default async function Home() {
  const { MetaInfo, allExperience }: Props = await getData();

  return (
    <section className="flex flex-col gap-4 py-8 md:py-10 font-satoshi">
      <div className="mb-6">
        <Image
          alt={MetaInfo.title}
          className="w-28 h-28 object-cover rounded-lg mb-4"
          src={MetaInfo.image.src}
        />
        <h1 className="text-lg font-bold">{MetaInfo.title}</h1>
        <p className="text-gray-500 mb-4 italic font-mono">{MetaInfo.job}</p>
        <p className="text-gray-500">{MetaInfo.description}</p>
        <div className="flex flex-row gap-4 mt-3 flex-wrap">
          {MetaInfo.facebook && (
            <>
              <Link
                className="underline"
                href={MetaInfo.facebook}
                rel="noopener noreferrer"
                target="_blank">
                Facebook
              </Link>
            </>
          )}
          {MetaInfo.instagram && (
            <Link
              className="underline"
              href={MetaInfo.instagram}
              rel="noopener noreferrer"
              target="_blank">
              Instagram
            </Link>
          )}
          {MetaInfo.tiktok && (
            <Link
              className="underline"
              href={MetaInfo.tiktok}
              rel="noopener noreferrer"
              target="_blank">
              Tiktok
            </Link>
          )}
          {MetaInfo.tiktok && (
            <Link
              className="underline"
              href={`https://wa.me/${MetaInfo.phone}`}
              rel="noopener noreferrer"
              target="_blank">
              Bussines
            </Link>
          )}
          <a className="underline" href="resume.pdf" rel="noopener noreferrer">
            CV
          </a>
        </div>
      </div>

      <SocialSection
        drive={MetaInfo.drive}
        youtube={MetaInfo.youtube}
        instagram={MetaInfo.instagram2}
      />

      <div>
        <ProjectSection data={allExperience} />
      </div>

      <SkillSection />
    </section>
  );
}
