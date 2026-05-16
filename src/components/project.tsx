import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import type { ProjectItem } from "@/data/projects";

interface ProjectProps extends React.HTMLAttributes<HTMLAnchorElement> {
  project: ProjectItem,
  className?: string;
}

function Project({
  project,
  className
}: ProjectProps) {
  return (
    <section className={cn("py-8 lg:py-16 2xl:py-32", className)}>
      <div className="container p-8 xl:p-12 lg:my-0">
        <div className="flex flex-col w-full gap-8 justify-between">
          <div className="flex flex-row justify-between">
            <h1 className="text-6xl leading-tight uppercase">{project.name}</h1>
            <div className="flex flex-row gap-2">
              {project.categories?.map((category: string) => (
                <Badge>
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          <h3 className="text-2xl">{project.purpose}</h3>
          <img
            src={project.image}
            alt={project.name}
            className="h-100 w-100 object-cover self-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <p>TL;DR: {project.tldr}</p>
        </div>
      </div>
    </section>
  )
}

export default Project
