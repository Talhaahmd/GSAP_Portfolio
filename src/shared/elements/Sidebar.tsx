import ArticleCard3 from "@/shared/cards/ArticleCard3";

const FLASH_NEWS = [
    {
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-23.webp",
        title: "Why Consistency Is the Key to Memorable Brand Experiences",
        author: "Olivia",
        date: "July 3, 2026",
    },
    {
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-24.webp",
        title: "The Power of Simplicity in Modern Interface Design",
        author: "Daniel",
        date: "July 8, 2026",
    },
    {
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-25.webp",
        title: "How Visual Language Influences Perception and Brand Identity",
        author: "Emma",
        date: "July 12, 2026",
    },
    {
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-192.webp",
        title: "Designing Products That Adapt and Evolve Over Time",
        author: "Lucas",
        date: "July 17, 2026",
    },
    {
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/pages/img-193.webp",
        title: "Crafting User Journeys That Feel Effortless and Human",
        author: "Olivia",
        date: "July 3, 2026",
    },
];

export default function Sidebar() {
    return (
        <div className="sidebar_right">
            <span className="neutral-500 fw-600 fz-font-md text-uppercase">Flash news</span>
            <div className="blog-card-3-wrap">
                {FLASH_NEWS.map((item, i) => (
                    <ArticleCard3
                        key={`${item.img}-${i}`}
                        card={{
                            img: item.img,
                            linkPost: item.linkPost,
                            title: item.title,
                            date: item.date,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
