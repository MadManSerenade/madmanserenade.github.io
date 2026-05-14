import { cn } from "@/lib/utils"
import { TriangleAlert } from "lucide-react";

interface UnderConstructionProps extends React.HTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
}

const UnderConstruction = ({
  children,
  className
}: UnderConstructionProps) => (
  <section className={cn("py-8 lg:py-16 2xl:py-32", className)}>
    <div className="container flex flex-col gap-8 p-8 xl:p-12 lg:my-0 items-center">
      <TriangleAlert className="size-20"></TriangleAlert>
      <h2 className="text-5xl">Under Construction</h2>
      {children}
    </div>
  </section>
)

export default UnderConstruction