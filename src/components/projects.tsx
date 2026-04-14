"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface ProjectItem {
  title?: string;
  img?: string;
  year?: string;
  type?: string;
  url?: string;
}

interface ProjectsProps {
  title?: string;
  projects?: ProjectItem[];
  className?: string;
}

const Projects = ({
  title = "Projects",
  projects = [
    {
      title: "Modern Concrete Pavilion",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/Modern Architectural Elegance at Twilight.png",
      year: "2025",
      type: "Architecture",
      url: "#",
    },
    {
      title: "Colorful Urban Living",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/Modernist Architecture in Lush Forest.png",
      year: "2025",
      type: "Urban Design",
      url: "#",
    },
    {
      title: "Minimalist Home Retreat",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
      year: "2025",
      type: "Interior",
      url: "#",
    },
    {
      title: "Urban Concrete House",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tiny-home/erik-mclean-g3U7sqtdJ1w-unsplash.jpg",
      year: "2025",
      type: "Product Design",
      url: "#",
    },
    {
      title: "Luxury Concrete Box",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw14.jpeg",
      year: "2025",
      type: "Residential",
      url: "#",
    },
    {
      title: "Glasshouse in Nature",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw16.jpeg",
      year: "2025",
      type: "Sustainable Design",
      url: "#",
    },
  ],
  className }: ProjectsProps) => {
  return (
    <section className={cn("py-8 lg:py-16", className)}>
      <div className="container flex flex-col gap-8 p-8 xl:p-12 lg:my-0">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-6xl leading-tight uppercase">{title}</h1>
        </div>
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg border border-border bg-background"
              >
                <a href={project.url} className="block overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-96 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </a>
                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <h2 className="text-lg font-semibold">{project.title}</h2>
                    <p className="text-muted-foreground">{project.type}</p>
                  </div>
                  <div className="rounded-2xl border border-border px-5 py-2 text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Projects };
