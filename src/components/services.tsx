"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

import { cn } from "@/lib/utils";

interface ServiceItem {
  icon?: any;
  title?: string;
  description?: string;
  items?: string[];
}

interface ServicesProps {
  title?: string;
  description?: string;
  services?: ServiceItem[];
  className?: string;
}

const Services = ({ 
  title = "Services",
  // description = "We craft digital experiences that captivate and convert, bringing your vision to life.",
  services = [
    // {
    //   icon: <Cog className="h-6 w-6" />,
    //   title: "Product Strategy",
    //   description:
    //     "Strategic planning and market positioning to ensure your product meets user needs and business goals.",
    //   items: ["Market Research", "User Personas", "Competitive Analysis"],
    // },
    // {
    //   icon: <PenTool className="h-6 w-6" />,
    //   title: "Design",
    //   description:
    //     "Beautiful, user-centered designs that create engaging experiences across all platforms.",
    //   items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    // },
    // {
    //   icon: <Code className="h-6 w-6" />,
    //   title: "Web Development",
    //   description:
    //     "Modern, scalable web applications built with the latest technologies and best practices.",
    //   items: ["Frontend Dev", "Backend Dev", "API Integration"],
    // },
    // {
    //   icon: <Shrub className="h-6 w-6" />,
    //   title: "Marketing",
    //   description:
    //     "Data-driven strategies to launch successfully and scale your product efficiently.",
    //   items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    // },
  ],
  className }: ServicesProps) => {

  return (
    <section className={cn("py-8 lg:py-16 2xl:py-32s", className)}>
      <div className="container flex flex-col gap-8 p-8 xl:p-12 lg:my-0">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-6xl leading-tight uppercase">{title}</h1>
        </div>
        <div className="mx-auto max-w-6xl space-y-12">
          {/* <div className="space-y-4 text-center rounded-xl bg-muted p-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
            <p className="text-lg tracking-tight text-muted-foreground md:text-xl">
              {description}
            </p>
          </div> */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="space-y-6 rounded-xl bg-muted/50 p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-accent p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services };
