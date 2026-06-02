import PageMeta from "@/seo/PageMeta";
import Slideshow from "@/shared/slideshow/Slideshow";
import { SLIDESHOW_PROJECTS } from "@/shared/slideshow/projects";

export default function PortfolioSplitPage() {
  return (
    <>
      <PageMeta title="Orisa - PortfolioSplit" />
            <Slideshow variant="split" projects={SLIDESHOW_PROJECTS} />
        
    </>
  );
}
