"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Logo, LogoImage } from "./logo"

const menuItems = [
  {
    type: "link" as const,
    label: "Home",
    href: "/",
  },
  {
    type: "link" as const,
    label: "Projects",
    href: "/projects",
  },
  // {
  //   type: "dropdown" as const,
  //   trigger: "Projects",
  //   items: [
  //     { label: "", href: "#" },
  //     { label: "Product 2", href: "#" },
  //     { label: "Product 3", href: "#" },
  //     { label: "All Projects", href: "/projects"}
  //   ],
  // },
  {
    type: "link" as const,
    label: "Services",
    href: "/services",
  },
  {
    type: "link" as const,
    label: "Experience",
    href: "/experience",
  },
  {
    type: "link" as const,
    label: "Community",
    href: "/community",
  },
  {
    type: "link" as const,
    label: "Resources",
    href: "/resources",
  },
  {
    type: "link" as const,
    label: "About",
    href: "/about",
  },
]

const logo = {
  src: "/custom_sri_yantra.svg",
  alt: "blocks for shadcn/ui",
  title: "Zenith Impetus",
}

const NavBar = () => (
  <div className="hidden sm:block">
    <div className="flex justify-around w-full h-20 bg-accent">
      <NavigationMenu>
        <Logo url="/">
          <div className="h-15 w-15 flex items-center justify-center rounded-full clip-circle">
            <LogoImage
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="absolute h-20 w-20"
            />
          </div>
        </Logo>
        <NavigationMenuList>
          {menuItems.map((item, index) =>
            item.type === "dropdown" ? (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>{item.trigger}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    {item.items.map((subItem, subIndex) => (
                      <NavigationMenuLink href={subItem.href} key={subIndex}>
                        {subItem.label}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink href={item.href} className="md:text-xl">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ),
          )}
        </NavigationMenuList>
        <Logo url="/">
          <div className="h-15 w-15 flex items-center justify-center rounded-full clip-circle">
            <LogoImage
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="absolute h-20 w-20"
            />
          </div>
        </Logo>
      </NavigationMenu>
    </div>
  </div>
)

export default NavBar
