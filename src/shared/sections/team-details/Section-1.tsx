import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Team details Section 1 - Member profile (Amelia Courtney, Project Manager)

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const PLUS_SM_SVG = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const PLUS_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
            d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z"
            fill="currentColor"
        />
    </svg>
);

const KEY_ACHIEVEMENTS: { bold?: string; text?: string; textBefore?: string }[] = [
    { bold: "8+ years", text: " managing digital & creative projects" },
    { bold: "120+ projects", text: " delivered across branding, web, and marketing" },
    { bold: "30+ cross-functional teams", text: " led and coordinated" },
    { bold: "98% on-time", text: " delivery rate" },
    { textBefore: "Managed projects with budgets ", bold: "up to $2M+" },
];

const RESPONSIBILITIES = [
    "Oversee end-to-end project execution",
    "Align creative, design, and development teams",
    "Manage timelines, scope, and resources",
    "Act as the main point of contact for clients",
    "Ensure quality, consistency, and delivery excellence",
];

const SOCIAL_LINKS = [
    {
        label: "Twitter",
        href: "#",
        ariaLabel: "Twitter",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 15" fill="none" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H5.25L8.98421 5.21053L13.5 0H15.5L9.8895 6.47368L16 15H10.75L7.01579 9.7895L2.5 15H0.5L6.11053 8.52632L0 0ZM11.5204 13.5L2.92043 1.5H4.47957L13.0796 13.5H11.5204Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "#",
        ariaLabel: "Facebook",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                    d="M12.4024 18V11.0344H14.7347L15.0838 8.3265H12.4024V6.59765C12.4024 5.81364 12.62 5.27934 13.7443 5.27934L15.1783 5.27867V2.85676C14.9302 2.82382 14.0791 2.75006 13.0888 2.75006C11.0213 2.75006 9.606 4.01198 9.606 6.32952V8.3265H7.2677V11.0344H9.606V18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H12.4024Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
    {
        label: "Linkedin",
        href: "#",
        ariaLabel: "LinkedIn",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                    d="M15.3352 15.339H12.6697V11.1622C12.6697 10.1662 12.6495 8.8845 11.2807 8.8845C9.89102 8.8845 9.67872 9.9683 9.67872 11.0887V15.339H7.01322V6.75H9.57372V7.9207H9.60822C9.96602 7.2457 10.836 6.53325 12.1357 6.53325C14.8365 6.53325 15.336 8.3108 15.336 10.6245L15.3352 15.339ZM4.00275 5.57475C3.14475 5.57475 2.4555 4.88025 2.4555 4.026C2.4555 3.1725 3.1455 2.47875 4.00275 2.47875C4.85775 2.47875 5.55075 3.1725 5.55075 4.026C5.55075 4.88025 4.857 5.57475 4.00275 5.57475ZM5.33925 15.339H2.66625V6.75H5.33925V15.339ZM16.6687 0H1.32825C0.594 0 0 0.5805 0 1.29675V16.7033C0 17.4202 0.594 18 1.32825 18H16.6665C17.4 18 18 17.4202 18 16.7033V1.29675C18 0.5805 17.4 0 16.6665 0H16.6687Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        ariaLabel: "Instagram",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                    d="M9.92475 0C10.9376 0.00167406 11.4509 0.00703828 11.8945 0.0202418L12.0692 0.025948C12.2709 0.0331213 12.47 0.0421215 12.7101 0.0533719C13.6678 0.0976265 14.3211 0.249129 14.8949 0.471887C15.4881 0.700648 15.9892 1.00966 16.4894 1.50993C16.9889 2.0102 17.298 2.51271 17.5275 3.10448C17.7494 3.67751 17.901 4.33153 17.946 5.28931C17.9567 5.52933 17.9653 5.72841 17.9725 5.93024L17.9781 6.10492C17.9913 6.5484 17.9973 7.06177 17.9992 8.07471L17.9999 8.74577C18 8.82777 18 8.91237 18 8.99967L17.9999 9.25357L17.9994 9.92472C17.9977 10.9376 17.9923 11.451 17.9791 11.8944L17.9734 12.0691C17.9662 12.271 17.9572 12.4701 17.946 12.7101C17.9017 13.6679 17.7494 14.3211 17.5275 14.8949C17.2987 15.4882 16.9889 15.9892 16.4894 16.4895C15.9892 16.989 15.4859 17.298 14.8949 17.5275C14.3211 17.7495 13.6678 17.901 12.7101 17.946C12.47 17.9567 12.2709 17.9654 12.0692 17.9725L11.8945 17.9781C11.4509 17.9914 10.9376 17.9973 9.92475 17.9993L9.25359 18C9.1716 18 9.087 18 8.99969 18H8.7458L8.07464 17.9994C7.06175 17.9977 6.54839 17.9924 6.1049 17.9791L5.93022 17.9734C5.72839 17.9662 5.5293 17.9572 5.2893 17.946C4.33151 17.9018 3.67899 17.7495 3.10448 17.5275C2.51195 17.2988 2.01018 16.989 1.50992 16.4895C1.00965 15.9892 0.701394 15.4859 0.471886 14.8949C0.249129 14.3211 0.0983735 13.6679 0.053372 12.7101C0.0426796 12.4701 0.0339582 12.271 0.026893 12.0691L0.0212318 11.8944C0.00806435 11.451 0.00206123 10.9376 0.000117163 9.92472L0 8.07471C0.00167406 7.06177 0.00702925 6.5484 0.0202327 6.10492L0.0259479 5.93024C0.0331212 5.72841 0.0421216 5.52933 0.053372 5.28931C0.0976175 4.33078 0.249129 3.67825 0.471886 3.10448C0.700638 2.51196 1.00965 2.0102 1.50992 1.50993C2.01018 1.00966 2.51271 0.701396 3.10448 0.471887C3.67825 0.249129 4.33077 0.0983735 5.2893 0.0533719C5.5293 0.0426885 5.72839 0.0339673 5.93022 0.026902L6.1049 0.0212407C6.54839 0.00806417 7.06175 0.00206102 8.07464 0.000116949L9.92475 0ZM8.99969 4.49953C6.51298 4.49953 4.49952 6.51518 4.49952 8.99967C4.49952 11.4864 6.51517 13.4998 8.99969 13.4998C11.4864 13.4998 13.4998 11.4842 13.4998 8.99967C13.4998 6.513 11.4841 4.49953 8.99969 4.49953ZM8.99969 6.2996C10.491 6.2996 11.6998 7.50805 11.6998 8.99967C11.6998 10.4909 10.4913 11.6998 8.99969 11.6998C7.50843 11.6998 6.29958 10.4914 6.29958 8.99967C6.29958 7.50841 7.50798 6.2996 8.99969 6.2996ZM13.7249 3.14949C13.1045 3.14949 12.5998 3.65342 12.5998 4.27376C12.5998 4.89411 13.1037 5.39882 13.7249 5.39882C14.3452 5.39882 14.8499 4.89489 14.8499 4.27376C14.8499 3.65342 14.3443 3.14871 13.7249 3.14949Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
    {
        label: "Youtube",
        href: "#",
        ariaLabel: "Youtube",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0322 0.388283C16.8071 0.602295 17.4162 1.23059 17.6237 2.03009C17.9985 3.47775 18 6.49997 18 6.49997C18 6.49997 18 9.52214 17.6237 10.9698C17.4162 11.7694 16.8071 12.3977 16.0322 12.6116C14.6291 13 8.99997 13 8.99997 13C8.99997 13 3.37092 13 1.96772 12.6116C1.1928 12.3977 0.583804 11.7694 0.376354 10.9698C-3.83173e-08 9.52214 0 6.49997 0 6.49997C0 6.49997 -3.83173e-08 3.47775 0.376354 2.03009C0.583804 1.23059 1.1928 0.602295 1.96772 0.388283C3.37092 1.18595e-07 8.99997 0 8.99997 0C8.99997 0 14.6291 1.18595e-07 16.0322 0.388283ZM11.8751 6.50027L7.19879 9.2855V3.71499L11.8751 6.50027Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
];

function AchievementItem({ item }: { item: (typeof KEY_ACHIEVEMENTS)[number] }) {
    return (
        <li>
            <div className="d-flex align-items-center gap-2 mb-2">
                {PLUS_ICON}
                <p className="mb-0 fz-font-md neutral-700">
                    {item.textBefore}
                    {item.bold && <span className="fw-700">{item.bold}</span>}
                    {item.text}
                </p>
            </div>
        </li>
    );
}

export default function Section1() {
    return (
        <>
            <div className="pt-100"></div>
            <div className="pt-lg-0 pt-20" />
            <section className="sec-1-team-details overflow-hidden border-top-100 pt-100 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 pt-lg-0 pt-100">
                            <div className="card_case__studies-list card_case__studies-list--row">
                                <div className="card_case__studies-card card_case__studies-card--overlay bg-neutral-100">
                                    <div className="card_case__studies-avatar rounded-3 fix anim-zoomin">
                                        <img
                                            className="img-cover rounded-3"
                                            src="/assets/imgs/pages/img-167.webp"
                                            alt="Amelia Courtney"
                                            width={400}
                                            height={500} loading="lazy" />
                                    </div>
                                    <div className="card_case__studies-footer mt-10 bg-neutral-0">
                                        <h5 className="card_case__studies-footer-title neutral-900">
                                            <Link to="#">Amelia Courtney</Link>
                                        </h5>
                                        <Link to="#" className="card_case__studies-link neutral-900">
                                            <span className="neutral-900 text-nowrap"> Project Manager</span>
                                            {PLUS_SM_SVG}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-7 mx-auto pt-70">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">Project Manager</span>
                                    <span className="text-2">Project Manager</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h3 className="reveal-text mb-40">
                                <RevealText>Amelia Courtney</RevealText>
                            </h3>
                            <p className="fw-500 fz-font-lg neutral-900 mb-40">
                                <span className="fw-700">Amelia Courtney</span> is a results-driven Project Manager with a strong background in leading complex digital and AI-driven projects. She bridges the gap between strategy, technology, and execution—ensuring every project is delivered on time, within scope, and with measurable impact.
                            </p>
                            <p className="fw-500 fz-font-lg neutral-900 mb-60">
                                With a sharp eye for detail and a calm, structured approach, Amelia keeps cross-functional teams aligned, motivated, and focused on what matters most: delivering real value to clients.
                            </p>
                            <div className="block-content mb-50">
                                <h6 className="fw-600 mb-25">Key Achievements</h6>
                                <ul className="list-unstyled">
                                    {KEY_ACHIEVEMENTS.map((item, i) => (
                                        <AchievementItem key={i} item={item} />
                                    ))}
                                </ul>
                            </div>
                            <div className="block-content mb-50">
                                <h6 className="fw-600 mb-25">Working Style</h6>
                                <p className="mb-0 fz-font-md neutral-900">
                                    Structured, proactive, and detail-oriented. Henry focuses on clarity, accountability, and momentum—keeping projects moving forward without compromising creative quality.
                                </p>
                            </div>
                            <div className="block-content mb-50">
                                <h6 className="fw-600 mb-25">Responsibilities</h6>
                                <ul className="list-unstyled">
                                    {RESPONSIBILITIES.map((item, i) => (
                                        <li key={i}>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                {PLUS_ICON}
                                                <p className="mb-0 fz-font-md neutral-700">
                                                    <span className="fw-700">{item}</span>
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="block-content mb-50">
                                <h6 className="fw-600 mb-25">Contact</h6>
                                <h6 className="fw-600 mb-10">
                                    <a href="mailto:amelia@orisa.com">amelia@orisa.com</a>
                                </h6>
                                <h6 className="fw-600">
                                    <a href="tel:(212) 555-7398">(212) 555-7398</a>
                                </h6>
                            </div>
                            <div className="block-content">
                                <h6 className="fw-600 mb-25">Follow</h6>
                                <ul className="at-social-list list-unstyled d-flex flex-wrap align-items-end gap-2 w-50">
                                    {SOCIAL_LINKS.map((social, i) => (
                                        <li key={i}>
                                            <Link
                                                to={social.href}
                                                className="at-social__link d-flex align-items-center rounded-pill border-100 px-3 py-1 gap-2 hover-up"
                                                aria-label={social.ariaLabel}
                                            >
                                                {social.icon}
                                                <span className="fw-500">{social.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
