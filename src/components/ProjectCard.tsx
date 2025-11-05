import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectCardProps } from "@/interface";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({
  title,
  language,
  description,
  html_url,
}: ProjectCardProps) => {
  const normalized_title = title.replace(/_/g, " ");
  return (
    <Card className="bg-myrtle-green">
      <CardHeader>
        <CardTitle className="whitespace-normal wrap-break-words">
          {normalized_title}
        </CardTitle>
        <CardDescription className="text-gray-200 italic">
          <Badge className="bg-sunglow">{language}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          View on GitHub
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
