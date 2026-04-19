"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import projectsData from "@/data/projects";
import { type ProjectItemReduced } from "@/data/projects";
import { Badge } from "./ui/badge";

interface ProjectsProps {
  title?: string;
  projects?: ProjectItemReduced[];
  className?: string;
}

const Projects = ({
    title = "Projects",
    projects = projectsData,
    className
  }: ProjectsProps) => {
  return (
    <section className={cn("py-8 lg:py-16 2xl:py-32", className)}>
      <div className="container flex flex-col gap-8 p-8 xl:p-12 lg:my-0">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-6xl leading-tight uppercase">{title}</h1>
        </div>
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {projects?.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-card"
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
                    <div className="flex flex-row gap-2">
                      {project.categories?.map((category) => (
                        <Badge>
                          {category}
                        </Badge>
                      ))}
                    </div>
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
