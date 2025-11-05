// TODO: implement Home page
// TODO: add icon to website title
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import type { GitHubRepo } from "@/interface";
import { useState, useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import cIcon from "../assets/icons8-c-programming.svg";

const technologies = [
  {
    name: "C",
    website: "https://www.c-language.org/",
    icon: cIcon,
  },
  {
    name: "Python",
    website: "https://www.python.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "HTML5",
    website: "https://html.spec.whatwg.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    website: "https://www.w3.org/Style/CSS/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Javascript",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<GitHubRepo[]>([]);

  async function fetchGithubProjects(username: string) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub projects");
      }

      const data = await response.json();
      const repos: GitHubRepo[] = data
        .filter(
          (repo: any) =>
            !repo.fork && !repo.archived && repo.name !== "latocchi.github.io"
        )
        .map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          language: repo.language,
          updated_at: new Date(repo.updated_at),
        }))
        .sort(
          (a: GitHubRepo, b: GitHubRepo) =>
            b.updated_at.getTime() - a.updated_at.getTime()
        );
      setProjects(repos);
    } catch (err: any) {
      console.error(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubProjects("latocchi");
  }, []);

  return (
    <div className="flex flex-col w-full">
      {loading && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <Spinner className="size-24" />
        </div>
      )}
      <div className="flex flex-col items-center justify-center border border-white">
        <h1 className="text-4xl font-bold mb-5">Latest Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
          {projects.slice(0, 3).map((repo: GitHubRepo) => (
            <ProjectCard
              key={repo.html_url}
              title={repo.name}
              language={repo.language}
              description={repo.description}
              html_url={repo.html_url}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-5">Technologies</h1>
        {/* <div className="w-full bg-gray-500">
          <Carousel
            setApi={setApi}
            className="w-full max-w-2xl"
            opts={{
              loop: true,
              align: "start",
            }}
            draggable={false}
          >
            <CarouselContent className="py-3">
              {technologies.map((tech, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/4"
                  draggable={false}
                >
                  <Button
                    className="inline-flex items-center gap-2 bg-transparent hover:bg-transparent p-0 m-0 size-14 md:size-14 lg:size-16"
                    onClick={() => window.open(tech.website, "_blank")}
                    onMouseDown={(e) => e.preventDefault()}
                    draggable={false}
                  >
                    <img
                      className="size-14 md:size-14 lg:size-16"
                      src={tech.icon}
                      draggable={false}
                    />
                    <span className="sr-only">{tech.name}</span>
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
