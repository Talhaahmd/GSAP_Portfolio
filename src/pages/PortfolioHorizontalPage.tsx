import PageMeta from "@/seo/PageMeta";
import Slideshow from "@/shared/slideshow/Slideshow";
import { SLIDESHOW_PROJECTS } from "@/shared/slideshow/projects";

export default function PortfolioHorizontalPage() {
  return (
    <>
      <PageMeta title="Klarus AI - PortfolioHorizontal" />
            <Slideshow variant="horizontal" projects={SLIDESHOW_PROJECTS} />
        
    </>
  );
}
