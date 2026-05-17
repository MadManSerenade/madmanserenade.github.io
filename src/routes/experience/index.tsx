import { createFileRoute } from "@tanstack/react-router"
import {MDXProvider} from '@mdx-js/react';
import Experience from "@/markdown/experience.mdx"

export const Route = createFileRoute("/experience/")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <MDXProvider>
      <Experience />
    </MDXProvider>
  )
}