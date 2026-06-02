import RevealText from "@/shared/effects/RevealText";

interface Testimonial {
    quote: string;
    avatar: string;
    name: string;
    role: string;
    delay: string;
    dark?: boolean;
}

const COL1: Testimonial[] = [
    { quote: "We were struggling to present ourselves professionally until we worked with them. Now our brand looks like it belongs with the leaders in our space.", avatar: "sec-7-avatar-1.webp", name: "Malik Johnson", role: "Founder, DriftKlaye", delay: ".05" },
    { quote: "I finally felt our brand just made sense. They cleared all the noise out of the way.", avatar: "sec-7-avatar-2.webp", name: "Michael Kith", role: "Indie App Dev", delay: ".15" },
];
const COL2: Testimonial[] = [
    { quote: "Before, we wasted time going back and forth with designers. Now we get clean, clear visuals on the first try. Which lets us focus on what really matters.", avatar: "sec-7-avatar-3.webp", name: "Marcus Lee", role: "Product Manager, Flowdrift", delay: ".1", dark: true },
    { quote: "Linea helped us look polished without hiring a whole design team. Our brand has held the truth aligned online.", avatar: "sec-7-avatar-4.webp", name: "Ayla Noor", role: "Founder, Sundae Studio", delay: ".2" },
];
const COL3: Testimonial[] = [
    { quote: "It's not just about looking good. It's about showing up confidently every day. That's what they help us do, and it's changed how our team thinks about our brand.", avatar: "sec-7-avatar-5.webp", name: "Bruno Rivers", role: "Brand Strategist, Studio Iron", delay: ".15" },
    { quote: "As a non-designer, I have appreciated this team's clarity and how they look out for the box.", avatar: "sec-7-avatar-6.webp", name: "Rui Hachi", role: "Web SaaS Founder", delay: ".25" },
];

function Card({ t }: { t: Testimonial }) {
    return (
        <article className={`card-home-12-testimonial${t.dark ? " card-home-12-testimonial--dark" : ""} at_fade_anim`} data-fade-from="bottom" data-delay={t.delay}>
            <p className="card-home-12-testimonial__quote mb-0">{t.quote}</p>
            <footer className="card-home-12-testimonial__author">
                <img className="card-home-12-testimonial__avatar" src={`/assets/imgs/pages/home-12/${t.avatar}`} alt="Orisa" loading="lazy" />
                <div className="card-home-12-testimonial__meta">
                    <span className="card-home-12-testimonial__name">{t.name}</span>
                    <span className="card-home-12-testimonial__role">{t.role}</span>
                </div>
            </footer>
        </article>
    );
}

export default function Section7() {
    return (
        <section className="sec-7-home-12" aria-label="Testimonials">
            <div className="container">
                <header className="sec-7-home-12__header">
                    <p className="sec-7-home-12__eyebrow at_fade_anim" data-fade-from="bottom" data-delay=".05">TESTIMONIALS</p>
                    <h2 className="sec-7-home-12__title reveal-text mb-0"><RevealText>Passion in Process. Precision in Results.</RevealText></h2>
                </header>

                <div className="sec-7-home-12__row">
                    <div className="sec-7-home-12__col">
                        {COL1.map((t, i) => <Card key={i} t={t} />)}
                    </div>
                    <div className="sec-7-home-12__col sec-7-home-12__col--offset-lg scroll-move-up">
                        {COL2.map((t, i) => <Card key={i} t={t} />)}
                    </div>
                    <div className="sec-7-home-12__col sec-7-home-12__col--offset-sm">
                        {COL3.map((t, i) => <Card key={i} t={t} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
