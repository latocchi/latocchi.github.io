import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ProjectCardProps } from "@/interface"
const ProjectCard = ({ title, language, description }: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-full bg-myrtle-green">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{language}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard