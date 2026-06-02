import PageMeta from "@/seo/PageMeta";
import Slideshow from "@/shared/slideshow/Slideshow";
import { SLIDESHOW_PROJECTS } from "@/shared/slideshow/projects";

export default function PortfolioCinemaPage() {
  return (
    <>
      <PageMeta title="Klarus AI - PortfolioCinema" />
            <Slideshow variant="cinema" projects={SLIDESHOW_PROJECTS} />
        
    </>
  );
}
