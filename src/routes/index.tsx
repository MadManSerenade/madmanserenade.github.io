import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Home
})

// import { Hero } from "./components/hero"
// import { Services } from "./components/services"
// import { Projects } from "./components/projects"
// import { Gallery } from "./components/gallery"
// import { Experience } from "./components/experience"
// import { Contact } from "./components/contact"
// import { Footer } from "./components/footer"

export function Home() {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <Projects />
      {/* <Gallery /> */}
      <Experience />
      {/* <Contact /> */}
    </>
  )
}
