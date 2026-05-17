import { createFileRoute } from "@tanstack/react-router"
import {MDXProvider} from '@mdx-js/react';
import Services from "@/markdown/services.mdx"

export const Route = createFileRoute("/services/")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <MDXProvider>
      <Services />
    </MDXProvider>
  )
}