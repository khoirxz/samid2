"use client";
import Link from "next/link";
import { useTheme } from "next-themes";

import { GdriveIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";

export default function SocialSection({
  drive,
  instagram,
  youtube,
}: {
  drive: string;
  instagram: string;
  youtube: string;
}) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-row justify-evenly items-center gap-4 text-center">
      <Link className="flex flex-col items-center" href={youtube}>
        {theme === "light" ? (
          <YoutubeIcon color="#fff" fill="#000" size={32} />
        ) : (
          <YoutubeIcon color="#000" fill="#fff" size={32} />
        )}
        Video Editor
      </Link>
      <Link className="flex flex-col items-center" href={drive}>
        {theme === "light" ? (
          <GdriveIcon color="#fff" fill="#000" size={32} />
        ) : (
          <GdriveIcon color="#000" fill="#fff" size={32} />
        )}
        Our Project
      </Link>
      <Link className="flex flex-col items-center" href={instagram}>
        {theme === "light" ? (
          <InstagramIcon color="#000" fill="#fff" size={32} />
        ) : (
          <InstagramIcon color="#fff" fill="#000" size={32} />
        )}
        Content Creator
      </Link>
    </div>
  );
}
