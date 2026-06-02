import { useEffect, useState } from "react";
import RevealText from "@/shared/effects/RevealText";

// Coming soon Section 1 - Hero (Coming Soon + countdown + banner)

const COUNTDOWN_DATE = "2026/9/12 00:00:00";

function parseCountdownDate(dateStr: string): Date | null {
    const normalized = dateStr.replace(/\//g, "-");
    const finalDate = new Date(normalized);
    return Number.isNaN(finalDate.getTime()) ? null : finalDate;
}

function CountdownDisplay({ dateStr }: { dateStr: string }) {
    const [values, setValues] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

    useEffect(() => {
        const finalDate = parseCountdownDate(dateStr);
        if (!finalDate) return;
        const targetTime = finalDate.getTime();

        function update() {
            const now = new Date();
            const diff = targetTime - now.getTime();
            if (diff <= 0) {
                setValues({ days: 0, hours: 0, mins: 0, secs: 0 });
                return true;
            }
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            setValues({ days: d, hours: h, mins: m, secs: s });
            return false;
        }

        update();
        const timer = setInterval(() => {
            if (update()) clearInterval(timer);
        }, 1000);
        return () => clearInterval(timer);
    }, [dateStr]);

    return (
        <div
            className="deals-countdown justify-content-end"
            data-countdown={dateStr}
        >
            <span className="countdown-section">
                <span className="countdown-amount">{values.days}</span>
                <span className="countdown-period"> days </span>
            </span>
            <span className="countdown-section">
                <span className="countdown-amount">{values.hours}</span>
                <span className="countdown-period"> hours </span>
            </span>
            <span className="countdown-section">
                <span className="countdown-amount">{values.mins}</span>
                <span className="countdown-period"> mins </span>
            </span>
            <span className="countdown-section">
                <span className="countdown-amount">{values.secs}</span>
                <span className="countdown-period"> secs </span>
            </span>
        </div>
    );
}

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section1() {
    return (
        <section className="sec-1-coming-soon overflow-hidden pt-150">
            <div className="container pb-60">
                <div className="row g-4 align-items-end">
                    <div className="col-xxl-6 col-lg-8">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">We are On the Way</span>
                                <span className="text-2">We are On the Way</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h1 className="reveal-text mb-40 fz-ds-1 fw-500 lh-1">
                            <RevealText>Coming Soon</RevealText>
                        </h1>
                        <p className="fw-400 fz-font-3xl neutral-900 mb-40 w-75 lh-sm">
                            We&apos;re crafting something exciting — a special surprise just for our subscribers.
                        </p>
                        <div className="d-flex flex-wrap align-items-center gap-5">
                            <a href="tel:+2125557398" className="fz-font-lg neutral-500 fw-500">
                                [ (+01) 555-7398 ]
                            </a>
                            <a href="mailto:hello@orisa.com" className="fz-font-lg neutral-500 fw-500">
                                [ hello@orisa.com ]
                            </a>
                        </div>
                    </div>
                    <div className="col-xxl-6 pt-xxl-0 pt-100">
                        <div className="box-count box-count-square mb-50">
                            <CountdownDisplay dateStr={COUNTDOWN_DATE} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="at-banner-thumb overflow-hidden scale-up-img pt-md-0 pt-20">
                <img
                    className="img-cover scale-up"
                    data-speed=".8"
                    src="/assets/imgs/pages/img-169.webp"
                    alt="orisa"
                    width={1920}
                    height={800} loading="lazy" />
            </div>
        </section>
    );
}
