import { Project } from "./types";

interface ProjectSourceListProps {
    projects: Project[];
}

export default function ProjectSourceList({ projects }: ProjectSourceListProps) {
    return (
        <ul className="project-source-list" hidden aria-hidden="true">
            {projects.map((p, i) => (
                <li key={i}>
                    <article
                        className="project-source"
                        data-image={p.image}
                        data-link={p.link}
                    >
                        <h3 className="project-source-title">{p.title}</h3>
                        <p className="project-source-category">{p.category}</p>
                        <p className="project-source-year">{p.year}</p>
                    </article>
                </li>
            ))}
        </ul>
    );
}
