"use client";
import { useEffect, useRef } from "react";

export default function SkillSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const skills: { name: string; image: string }[] = [
    {
      name: "Canva",
      image: "/canva.png",
    },
    {
      name: "Cap Cut",
      image: "/cc.png",
    },
    {
      name: "Lightroom",
      image: "/lr.png",
    },
    {
      name: "Premiere",
      image: "/pp.png",
    },
    {
      name: "Photoshop",
      image: "/ps.png",
    },
  ];

  useEffect(() => {
    const scrollContainer = carouselRef.current;

    if (!scrollContainer) return;

    // Clone the items for infinite scroll effect
    const itemsToClone = scrollContainer.querySelectorAll(".carousel-item");

    itemsToClone.forEach((item) => {
      const clone = item.cloneNode(true);

      scrollContainer.appendChild(clone);
    });

    // Animation function
    const animate = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      requestAnimationFrame(animate);
    };

    // Start animation
    const animationId = requestAnimationFrame(animate);

    // Clean up
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div>
      <h1 className="text-lg font-bold mb-10">I&apos;m good at :</h1>

      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden"
          style={{ scrollBehavior: "smooth" }}>
          {skills.map((skill, index) => (
            <div
              key={`item-${index}`}
              className="carousel-item flex-shrink-0 px-6 flex flex-col items-center hover:grayscale-0 grayscale transition duration-300 ease-in-out"
              style={{ width: "200px" }}>
              <img
                src={skill.image}
                alt={skill.name}
                className="h-24 object-contain mb-4"
              />
              <h3 className="text-lg font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
