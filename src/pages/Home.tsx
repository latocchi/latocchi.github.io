// TODO: implement Home page
// TODO: add icon to website title
import ProjectCard from "@/components/ProjectCard";
import type { GitHubRepo } from "@/interface";
import { useState, useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import cIcon from "../assets/icons8-c-programming.svg";
import TechCarousel from "@/components/TechCarousel";

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
  {
    name: "Typescript",
    website: "https://www.typescriptlang.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Go",
    website: "https://go.dev/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
  },
  {
    name: "FastAPI",
    website: "https://fastapi.tiangolo.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "React",
    website: "https://react.dev/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Vue",
    website: "https://vuejs.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    website: "https://tailwindcss.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "ESP-IDF",
    website:
      "https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/espressif.svg",
  },
  {
    name: "PostgreSQL",
    website: "https://www.postgresql.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    website: "https://www.mysql.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    website: "https://git-scm.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    website: "https://www.docker.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "KiCad",
    website: "https://www.kicad.org/",
    icon: "https://community.aisler.net/uploads/default/original/1X/bd76c59d8985e3e96370e5054eefa3a62f9be00f.png",
  },
  {
    name: "Windows",
    website: "https://www.microsoft.com/en-us/windows?r=1",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/microsoft-windows.svg",
  },
  {
    name: "Linux",
    website: "https://www.linux.org/",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/linux.svg",
  },
  {
    name: "Fedora",
    website: "https://www.fedoraproject.org/",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/fedora.svg",
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
      <div className="flex flex-col items-center justify-center">
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
      <div className="flex flex-col items-center justify-center px-5 mt-5">
        <h1 className="text-4xl font-bold">Technologies</h1>
        <TechCarousel technologies={technologies} />
      </div>
    </div>
  );
};

export default Home;
