// import { ArrowUpRight, Atom, Flower, Route, Shell } from "lucide-react";

// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  heading?: string;
  topSubheading?: string;
  bottomSubheading?: string;
  mission?: string;
  process?: string;
  devotional?: string;
  emphasis?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      emphasis: string,
      text: string;
      url: string;
    };
    secondary?: {
      textStart: string;
      emphasis: string;
      textEnd: string;
      url: string;
    };
  };
  className?: string;
}

const Hero = ({
  heading = "Zenith Impetus",
  topSubheading = "Rising Above the Heavens",
  bottomSubheading = "with Audacious Courage",
  mission = "We transmute our surroundings from inside-out. By propagating a higher frequency, we dissolve the lower. Our example inspires those who follow.",
  process = "Within every being there lies an awaiting lotus. If one perseveres through life's muddy waters, their newly-birthed self blooms novel realities.",
  devotional = "Cease what contradicts your truth, and you prosper. You shape yourself by what you \"know\", \"believe\", \"feel\", and \"think\". Then ",
  emphasis = "YOU ARE",
  // buttons = {
  //   primary: {
  //     emphasis: "I AM",
  //     text: " Ready to Expand",
  //     url: "#start",
  //   },
  //   secondary: {
  //     textStart: "Where ",
  //     emphasis: "AM I",
  //     textEnd: " Being Lead",
  //     url: "#",
  //   },
  // },
  // image = {
  //   src: "custom_sri_yantra.svg",
  //   alt: "Placeholder",
  // },
  className,
}: HeroProps) => {
  return (
    <section className={cn("py-8 lg:py-16 2xl:py-32", className)}>
      <div className="container flex flex-col items-center gap-8 p-8 xl:p-12 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-8 lg:w-2/3">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-serif font-semibold text-primary">
            {heading}
          </h2>
          <h3 className="text-2xl sm:text-4xl lg:text-4xl 2xl:text-6xl font-semibold ">
            {topSubheading}
            <br />
            {bottomSubheading}
          </h3>
          <p className="sm:text-lg lg:text-xl 2xl:text-2xl">
            {mission}
          </p>
          <p className="sm:text-lg lg:text-xl 2xl:text-2xl">
            {process}
          </p>
          <p className="sm:text-lg lg:text-xl 2xl:text-2xl">
            {devotional} 
            <span className="font-serif text-primary">
              {emphasis}
            </span>
            .
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-5 lg:gap-7 items-center justify-around">
            <Button asChild>
              <a href={buttons.primary?.url}>
                <div className="flex items-center">
                  <Flower className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:text-base">
                  <span className="font-serif text-lg">
                    {buttons.primary?.emphasis}
                  </span>
                  {buttons.primary?.text}
                </span>
                <div className="flex items-center">
                  <Atom className="size-4" />
                </div>
              </a>
            </Button>
            <Button asChild className="bg-secondary">
              <a href={buttons.secondary?.url}>
                <div className="flex items-center">
                  <Shell className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:text-base">
                  {buttons.secondary?.textStart}
                  <span className="font-serif text-lg">
                    {buttons.secondary?.emphasis}
                  </span>
                  {buttons.secondary?.textEnd}
                </span>
                <div className="flex items-center">
                  <Route className="size-4" />
                </div>
              </a>
            </Button>
          </div> */}
        </div>
        <div className="relative z-10">
          <img
            className="relative z-10 rounded-[25%] w-[500px]"
            src="custom_sri_yantra.svg"
            alt="sri yantra"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
