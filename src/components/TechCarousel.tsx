import { Button } from "@/components/ui/button";
import type { TechCarouselProps } from "@/interface";

const TechCarousel = ({ technologies }: TechCarouselProps) => {
  return (
    <div className="relative w-full flex overflow-hidden">
      <ul className="flex gap-10 py-5 animate-infinite-scroll w-max">
        {[...technologies, ...technologies].map((tech, idx) => {
          return (
            <li key={idx} className="flex gap-5 m-5 md:m-10 lg:m-15">
              <Button
                className="flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 shrink-0 select-none"
                onClick={() => window.open(tech.website, "_blank")}
                draggable={false}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 md:w-20 md:h-20"
                  draggable={false}
                />
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechCarousel;
