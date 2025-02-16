"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Image } from "@heroui/image";
import { FaCirclePlay, FaYoutube, FaTiktok } from "react-icons/fa6";

import { EXPERIENCEPROPS } from "../types/experience";

export default function ProjectSection({
  data,
}: {
  data: { edges: EXPERIENCEPROPS[] };
}) {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div>
        <Accordion>
          {data.edges.map((item) => (
            <AccordionItem
              key={item.node.id}
              aria-label={item.node.title}
              subtitle={
                <div className="mt-1 flex flex-row gap-4 items-center justify-between text-gray-600 dark:text-gray-400">
                  <p>{item.node.description}</p>
                </div>
              }
              title={
                <div className="flex flex-row gap-4 items-center justify-between text-gray-600 dark:text-gray-400">
                  <div className="flex items-center justify-center">
                    <h1 className="font-bold">{item.node.title}</h1>
                  </div>
                  <div>
                    <p className="font-bold">{item.node.years}</p>
                  </div>
                </div>
              }>
              <div className="mt-3">
                <div className="flex flex-row gap-2 mb-5">
                  <a
                    className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                    href={item.node.youtube}
                    rel="noreferrer"
                    target="_blank">
                    <FaYoutube /> Youtube
                  </a>
                  <a
                    className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                    href={item.node.tiktok}
                    rel="noreferrer"
                    target="_blank">
                    <FaTiktok /> TikTok
                  </a>
                  <a
                    className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                    href={item.node.link}
                    rel="noreferrer"
                    target="_blank">
                    <FaCirclePlay /> More
                  </a>
                </div>

                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {item.node.thumbnail.map((img) => (
                    <Image key={img.id} alt={img.title} src={img.src} />
                  ))}
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
