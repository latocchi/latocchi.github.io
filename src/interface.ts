export interface ProjectCardProps {
    title: string;
    description: string
    language: string
    html_url: string
}

export interface GitHubRepo {
    name: string;
    description: string;
    html_url: string;
    language: string;
    updated_at: Date;
}