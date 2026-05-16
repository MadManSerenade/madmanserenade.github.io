import Project from '@/components/project';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId')({
  loader: async ({ params }) => await import(`@/data/projects/${params.projectId}.tsx`),
  component: RouteComponent,
  
})

function RouteComponent() {
  const { default: project } = Route.useLoaderData()
  return <>
    <Project project={project}/>
  </>
}
