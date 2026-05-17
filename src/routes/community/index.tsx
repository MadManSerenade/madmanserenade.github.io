import { createFileRoute } from "@tanstack/react-router"
import {MDXProvider} from '@mdx-js/react';
import Community from "@/markdown/community.mdx"

export const Route = createFileRoute("/community/")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <MDXProvider>
      <Community />
    </MDXProvider>
  )
}