import PortfolioCard2 from "@/shared/cards/PortfolioCard2";

type PortfolioItem = {
    classList: string;
    category: string;
    link: string;
    linkCase: string;
    img: string;
    headline: string;
    description: string;
    title: string;
    featuredHtml?: React.ReactNode;
};

const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        classList: "card-3d",
        category: "design",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-63.webp",
        headline: "+72% ROAS in 90 days",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "Ecommerce Brand",
        featuredHtml: (
            <span className="alt-portfolio-tag bg-theme-primary px-3 py-2 rounded-pill p-absolute top-0 end-0 m-4 fz-10 fw-600 text-white">
                FEATURED CASE
            </span>
        ),
    },
    {
        classList: "card-3d",
        category: "photography",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-64.webp",
        headline: "3× qualified leads in 4 months",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "SaaS Startup",
    },
    {
        classList: "card-3d",
        category: "marketing",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-65.webp",
        headline: "–38% Cost per acquisition",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "Fintech Platform",
    },
    {
        classList: "card-3d",
        category: "marketing",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-66.webp",
        headline: "+41% conversion rate",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "B2B Service Company",
    },
    {
        classList: "card-3d",
        category: "photography",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-67.webp",
        headline: "+54% revenue growth YoY",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "DTC Brand",
    },
    {
        classList: "card-3d",
        category: "photography",
        link: "/portfolio-details-2",
        linkCase: "#",
        img: "/assets/imgs/pages/img-68.webp",
        headline: "$1.4M revenue in 6 months",
        description:
            "We restructured paid campaigns, refined audience targeting, and optimized creatives to drive higher returns while reducing wasted ad spend.",
        title: "Global Brand",
    },
];

export default function Section1() {
    return (
        <div className="bg-neutral-50">
            <section className="sec-1-portfolio-6 overflow-hidden pt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sec-head">
                                <h1 className="fz-ds-1 fw-500 lh-1 text-center mb-40">
                                    Work in Action
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            {PORTFOLIO_DATA.map((item, idx) => (
                                <PortfolioCard2
                                    key={`${item.title}-${idx}`}
                                    classList={item.classList}
                                    category={item.category}
                                    link={item.link}
                                    linkCase={item.linkCase}
                                    img={item.img}
                                    headline={item.headline}
                                    description={item.description}
                                    title={item.title}
                                    featuredHtml={item.featuredHtml}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
