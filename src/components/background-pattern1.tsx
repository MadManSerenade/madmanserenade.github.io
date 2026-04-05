import { cn } from "@/lib/utils";


interface BackgroundPattern1Props {
  className?: string;
}

const BackgroundPattern1 = ({ className }: BackgroundPattern1Props) => {
  return (
    <section className={cn("absolute min-h-screen w-full", className)}>
      <div className="inset-0 -z-100">
        <img className="opacity-25" src="SriYantra_monochrome.svg"></img>
        <img className="opacity-25" src="SriYantra_monochrome.svg"></img>
        <img className="opacity-25" src="SriYantra_monochrome.svg"></img>
        <img className="opacity-25" src="SriYantra_monochrome.svg"></img>
        <img className="opacity-25" src="SriYantra_monochrome.svg"></img>

      </div>
    </section>
  );
};

export { BackgroundPattern1 };
