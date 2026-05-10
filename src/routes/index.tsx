// import { Contact } from "@/components/contact";
// import { Experience } from "@/components/experience";
// import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { ProjectsReduced } from "@/components/projects";
// import { Services } from "@/components/services";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Home
})

export function Home() {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <ProjectsReduced />
      {/* <Gallery /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
    </>
  )
}
