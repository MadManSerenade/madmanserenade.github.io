import creator from "@/data/projects/creator"
import leadership from "@/data/projects/leadership"
import omnipath from "@/data/projects/omnimath"

export interface ProjectItem {
  title?: string;
  img?: string;
  year?: string;
  categories?: string[];
  url?: string;
  description?: string;
}

export interface ProjectItemReduced {
  title?: string;
  img?: string;
  year?: string;
  categories?: string[];
  url?: string;
}

const projects = [
    {
      title: "Modern Concrete Pavilion",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/Modern Architectural Elegance at Twilight.png",
      year: "2025",
      categories: ["Architecture",],
      url: "#",
    },
    {
      title: "Colorful Urban Living",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/Modernist Architecture in Lush Forest.png",
      year: "2025",
      categories: ["Urban Design",],
      url: "#",
    },
    {
      title: "Minimalist Home Retreat",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
      year: "2025",
      categories: ["Interior",],
      url: "#",
    },
    {
      title: "Urban Concrete House",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tiny-home/erik-mclean-g3U7sqtdJ1w-unsplash.jpg",
      year: "2025",
      categories: ["Product Design",],
      url: "#",
    },
    {
      title: "Luxury Concrete Box",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw14.jpeg",
      year: "2025",
      categories: ["Residential",],
      url: "#",
    },
    {
      title: "Glasshouse in Nature",
      img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw16.jpeg",
      year: "2025",
      categories: ["Sustainable Design",],
      url: "#",
    },
]

projects.push(creator)
projects.push(leadership)
projects.push(omnipath)

export default projects