import Project from '@/components/project';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId')({
  loader: async ({ params }) => await import(`@/data/projects/${params.projectId}.tsx`)
    .then(async (projRes) => {
      const markdownRes = await import(`@/markdown/projects/${projRes.default.markdown}.mdx`)
      return {
        project: projRes.default,
        Markdown: markdownRes.default
      }
    }),
  component: RouteComponent,
  
})

function RouteComponent() {
  const { project, Markdown } = Route.useLoaderData()
  return <>
    <Project project={project} Markdown={Markdown} />
  </>
}
