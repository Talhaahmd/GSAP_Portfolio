import PageMeta from "@/seo/PageMeta";
import Slideshow from "@/shared/slideshow/Slideshow";
import { SLIDESHOW_PROJECTS } from "@/shared/slideshow/projects";

export default function PortfolioZstackPage() {
  return (
    <>
      <PageMeta title="Klarus AI - PortfolioZstack" />
            <Slideshow variant="zstack" projects={SLIDESHOW_PROJECTS} />
        
    </>
  );
}
