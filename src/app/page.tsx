import { Hero } from "@/components/hero";

// import { BackgroundPattern1 } from "@/components/background-pattern1";
import { Contact7 } from "@/components/contact7";
import { Experience1 } from "@/components/experience1";
import { Footer } from "@/components/footer";
import { Gallery6 } from "@/components/gallery6";
import { Projects5 } from "@/components/projects5";
import { Services4 } from "@/components/services4";
// import SiteNavigation from "@/components/site-navigation";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services4/>
      <Projects5 />
      <Gallery6 />
      <Experience1 />
      <Contact7 />
      <Footer />
      {/* <SiteNavigation /> */}
    </>
  );
}
