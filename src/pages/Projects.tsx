import ProjectCard from "@/components/ProjectCard"
import type { GitHubRepo } from "@/interface"
import { useEffect, useState } from "react"

const Projects = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(false)

  async function fetchGithubProjects(username: string) {
    try {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub projects")
      }

      const data = await response.json()
      const repos: GitHubRepo[] = data.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        updated_at: repo.updated_at,
      }))
      setProjects(repos)
    } catch (err: any) {
      console.error(err)
      setLoading(false)
    } finally {
      setLoading(false)
    }
    
  }

  useEffect(() => {
    fetchGithubProjects("latocchi")
  }, [])

  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        {projects.length === 0 && <p>No public repos found</p>}
        {projects.map((repo: GitHubRepo) => (
          <ProjectCard key={repo.html_url} title={repo.name} language={repo.language} description={repo.description} />
        ))}
      </div>
    </div>
  )
}

export default Projects