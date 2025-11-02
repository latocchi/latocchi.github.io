import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ProjectCardProps } from "@/interface"
const ProjectCard = ({ title, language, description, html_url }: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-full bg-myrtle-green">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-gray-200 italic">{language}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <a href={html_url}>View on GitHub</a>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard