"use client";
import Masonry from "react-layout-masonry";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Image } from "@heroui/image";
import { FaCirclePlay, FaYoutube, FaTiktok } from "react-icons/fa6";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

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
                    <h1 className="font-bold hover:underline">
                      {item.node.title}
                    </h1>
                  </div>
                  <div>
                    <p className="font-bold">{item.node.years}</p>
                  </div>
                </div>
              }>
              <div className="mt-3">
                <div className="flex flex-row gap-2 mb-5">
                  {item.node.youtube !== "" && (
                    <a
                      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                      href={item.node.youtube}
                      rel="noreferrer"
                      target="_blank">
                      <FaYoutube /> Youtube
                    </a>
                  )}

                  {item.node.tiktok !== "" && (
                    <a
                      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                      href={item.node.tiktok}
                      rel="noreferrer"
                      target="_blank">
                      <FaTiktok /> TikTok
                    </a>
                  )}
                  {item.node.link !== "" && (
                    <a
                      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                      href={item.node.link}
                      rel="noreferrer"
                      target="_blank">
                      <FaCirclePlay /> More
                    </a>
                  )}
                </div>

                <PhotoProvider>
                  <Masonry columns={2} gap={5}>
                    {item.node.thumbnail.map((img) => (
                      <PhotoView key={img.id} src={img.src}>
                        <Image
                          alt={img.title}
                          className="w-full h-auto object-cover rounded-md"
                          src={img.src}
                        />
                      </PhotoView>
                    ))}
                  </Masonry>
                </PhotoProvider>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
