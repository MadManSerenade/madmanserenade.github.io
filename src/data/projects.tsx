import activism from "@/data/projects/activism"
import community from "@/data/projects/community"
import creator from "@/data/projects/creativity"
import fitness from "@/data/projects/fitness"
import governance from "@/data/projects/governance"
import history from "@/data/projects/history"
import intelligences from "@/data/projects/intelligences"
import islamicStudies from "@/data/projects/islamic-studies"
import omnipath from "@/data/projects/omnimath"
import polyglot from "@/data/projects/polyglot"
import sovereignty from "@/data/projects/sovereignty"
import spirituality from "@/data/projects/spirituality"

export interface MilestoneItem {
  name?: string;
  image?: string;
  description?: string;
  isComplete?: boolean;
}

export interface ProjectItem {
  name?: string;
  priority?: number;
  url?: string;
  purpose?: string;
  tldr?: string;
  image?: string;
  categories?: string[];
  milestones?: MilestoneItem[];
  markdown?: string;
}

export interface ProjectItemReduced {
  name?: string;
  priority?: number
  url?: string;
  purpose?: string;
  tldr?: string;
  image?: string;
  categories?: string[];
}

const projects: ProjectItem[] = []

projects.push(activism)
projects.push(community)
projects.push(creator)
projects.push(fitness)
projects.push(governance)
projects.push(history)
projects.push(intelligences)
projects.push(islamicStudies)
projects.push(omnipath)
projects.push(polyglot)
projects.push(sovereignty)
projects.push(spirituality)

export { projects as projectsData }