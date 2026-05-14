import { cn } from "@/lib/utils"
import { createFileRoute } from '@tanstack/react-router'
import { Badge } from "@/components/ui/badge"


interface ProjectProps extends React.HTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

export const Route = createFileRoute('/projects/$projectId')({
  component: Project,
  loader: async ({ params }) => await import(`@/data/projects/${params.projectId}.tsx`),
  
})

function Project({
  className
}: ProjectProps) {
  const { default: project } = Route.useLoaderData()
  console.log(project)
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
