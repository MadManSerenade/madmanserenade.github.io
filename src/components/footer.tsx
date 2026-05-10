import { Logo, LogoImage, LogoText } from "@/components/logo";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  domain?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  domain = "MadManSerenade.GitHub.IO",
  logo = {
    src: "custom_sri_yantra.svg",
    alt: "blocks for shadcn/ui",
    title: "Zenith Impetus",
    url: `https://madmanserenade.github.io`,
  },
  className,
  tagline = "Rising Above the Heavens",
  menuItems = [
    {
      title: "Professional",
      links: [
        { text: "GitHub", url: "https://github.com/MadManSerenade" },
        { text: "SubStack", url: "https://substack.com/@madmanserenade" },
        { text: "LinkedIn", url: "https://www.linkedin.com/in/madmanserenade"}
      ]
    },
    {
      title: "Services",
      links: [
        // { text: "Skool", url: ""},
        { text: "Calendly", url: "https://calendly.com/mnez-creations/discovery-call"},
        { text: "Passes", url: "https://www.passes.com/MadManSerenade"},
        { text: "Cameo", url: "https://www.cameo.com/MadManSerenade"},
      ]
    },
    {
      title: "Social",
      links: [
        { text: "TikTok", url: "https://www.tiktok.com/@madmanserenade" },
        { text: "Instagram", url: "https://www.instagram.com/madmanserenade" },
        // { text: "YouTube", url: ""},
      ],
    },
    {
      title: "Gifting Portals",
      links: [
        { text: "Venmo", url: "https://venmo.com/u/MadManSerenade" },
        { text: "CashApp", url: "https://cash.app/$MadManSerenade" },
        { text: "Throne", url: "https://throne.com/madmanserenade" },
      ]
    }
  ],
  copyright = `© 2026 ${domain} All rights reserved.`,
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: FooterProps) => {
  return (
    <section className={cn("py-8 lg:py-16 2xl:py-32", className)}>
      <div className="container flex flex-col items-center gap-8 p-8 xl:p-12 lg:my-0 lg:flex-row">
        <footer className="w-full">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0 gap-2">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url="http://MadManSerenade.GitHub.IO">
                  <div className="h-15 w-15 flex items-center justify-center rounded-full clip-circle">
                    <LogoImage
                      src={logo.src}
                      alt={logo.alt}
                      title={logo.title}
                      className="absolute h-20 w-20"
                    />
                  </div>
                  <LogoText className="text-4xl text-primary font-serif">{logo.title}</LogoText>
                </Logo>
              </div>
              <p className="mt-8 text-2xl font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-evenly gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4 justify-around">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
