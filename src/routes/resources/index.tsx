import { createFileRoute } from "@tanstack/react-router"
import {MDXProvider} from '@mdx-js/react';
import Resources from "@/markdown/resources.mdx"

export const Route = createFileRoute("/resources/")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <MDXProvider>
      <Resources />
    </MDXProvider>
  )
}