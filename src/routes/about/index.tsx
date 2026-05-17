import { createFileRoute } from "@tanstack/react-router"
import {MDXProvider} from '@mdx-js/react';
import About from "@/markdown/about.mdx"

export const Route = createFileRoute("/about/")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <MDXProvider>
      <About />
    </MDXProvider>
  )
}