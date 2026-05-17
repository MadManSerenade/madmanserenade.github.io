// import { useState, useEffect } from "react";
// import UnderConstruction from "@/components/under-construction"
import { createFileRoute } from "@tanstack/react-router"
// import { readFileSync } from "fs"
// import Markdown from "react-markdown"
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