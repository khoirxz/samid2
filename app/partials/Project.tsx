"use client";
import Masonry from "react-layout-masonry";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Image } from "@heroui/image";
import {
  FaCirclePlay,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa6";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { EXPERIENCEPROPS } from "../types/experience";
import { Card, CardFooter, CardHeader } from "@heroui/card";

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
                  {item.node.youtube !== null && (
                    <a
                      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                      href={item.node.youtube}
                      rel="noreferrer"
                      target="_blank">
                      <FaYoutube /> Youtube
                    </a>
                  )}
                  {item.node.instagram !== null && (
                    <a
                      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                      href={item.node.instagram}
                      rel="noreferrer"
                      target="_blank">
                      <FaInstagram /> Instagram
                    </a>
                  )}
                  {item.node.tiktok !== null && (
                    <a
                      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                      href={item.node.tiktok}
                      rel="noreferrer"
                      target="_blank">
                      <FaTiktok /> TikTok
                    </a>
                  )}
                  {item.node.link !== null && (
                    <a
                      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                      href={item.node.link}
                      rel="noreferrer"
                      target="_blank">
                      <FaCirclePlay />
                    </a>
                  )}
                </div>

                <PhotoProvider>
                  <Masonry columns={2} gap={5}>
                    {item.node.thumbnail.map((img) => (
                      <Card
                        key={img.id}
                        className="col-span-12 sm:col-span-4 shadow-none relative group">
                        <PhotoView src={img.src}>
                          <Image
                            removeWrapper
                            alt={img.title}
                            className="w-full h-auto object-cover rounded-md"
                            src={img.src}
                          />
                        </PhotoView>
                        <CardFooter className="justify-between group-hover:bg-black/60 group-hover:opacity-100 overflow-hidden absolute before:rounded-b-xl rounded-b-large bottom-0 left-0 w-full h-[30%] z-10">
                          <p className="group-hover:text-white text-transparent text-lg">
                            {img.title}.
                          </p>
                        </CardFooter>
                      </Card>
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
