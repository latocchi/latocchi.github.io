import { LangPieChart } from "@/components/LangPieChart";
import ProjectCard from "@/components/ProjectCard";
import { Spinner } from "@/components/ui/spinner";
import type { GitHubRepo } from "@/interface";
import { useEffect, useState } from "react";

// TODO: Add loading animation
// TODO: Fix the aesthetics of the project cards

const Projects = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);

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
    <div className="h-full w-full grid grid-cols-1 lg:grid-cols-4">
      {loading && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <Spinner className="size-24" />
        </div>
      )}
      <div className="col-span-1 flex flex-col items-center justify-center p-4">
        <LangPieChart repos={projects} />
      </div>
      <div className="grid col-span-1 lg:col-span-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        {projects.length === 0 && <p>No public repos found</p>}
        {projects.map((repo: GitHubRepo) => (
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
  );
};

export default Projects;
