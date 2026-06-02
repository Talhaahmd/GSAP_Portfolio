import PageMeta from "@/seo/PageMeta";
import Slideshow from "@/shared/slideshow/Slideshow";
import { SLIDESHOW_PROJECTS } from "@/shared/slideshow/projects";

export default function PortfolioVistaPage() {
  return (
    <>
      <PageMeta title="Klarus AI - PortfolioVista" />
            <Slideshow variant="vista" projects={SLIDESHOW_PROJECTS} />
        
    </>
  );
}
