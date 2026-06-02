import { Link } from "react-router-dom";
// Footer 9 (Home 9) - Light bg, navigation label + two-column links, contact, hours, socials, brand heading, bottom policies

const QUICK_LINKS_1 = [
    { label: "Home", href: "/index-9", delay: ".1" },
    { label: "About", href: "/about-1", delay: ".2" },
    { label: "Works", href: "/portfolio-1", delay: ".3" },
    { label: "Blog", href: "/archive-1", delay: ".4" },
    { label: "Contact", href: "/contact-1", delay: ".5" },
];

const QUICK_LINKS_2 = [
    { label: "Jobs", href: "#", delay: ".6" },
    { label: "Terms", href: "#", delay: ".7" },
    { label: "Privacy", href: "#", delay: ".8" },
    { label: "Help", href: "#", delay: ".9" },
    { label: "Help", href: "#", delay: "1.0" },
];

const SOCIAL_LINKS = [
    {
        label: "Twitter",
        href: "#",
        delay: "0.1",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
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
        delay: "0.2",
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
        delay: "0.3",
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
        delay: "0.4",
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
        delay: "0.5",
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

const SOCIAL_ARROW_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
        <path d="M7.60201e-05 6.26559L0 2.03894e-05L1.49997 -4.58971e-07L1.50004 4.87322L9.12873 4.87329L6.16652 2.12355L7.22714 1.139L12 5.56948L7.22713 10L6.16652 9.01545L9.12876 6.26566L7.60201e-05 6.26559Z" fill="currentColor" />
    </svg>
);

export default function Footer9() {
    return (
        <footer className="footer-9 changeless bg-neutral-50 overflow-hidden">
            <div className="container-fluid footer-9__container">
                <div className="row g-4 g-xl-5 footer-9__top">
                    <div className="col-xl-5 col-lg-6">
                        <p className="footer-9__label">Navigation</p>
                        <div className="at-footer-widget alt-footer-link-item-wrap footer-9__quick-links row g-4">
                            <div className="alt-footer-link-item col-6 col-sm-5">
                                <ul>
                                    {QUICK_LINKS_1.map((item) => (
                                        <li key={item.label + item.href} className="mb-15">
                                            <Link
                                                className="at_fade_anim"
                                                data-delay={item.delay}
                                                to={item.href}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="alt-footer-link-item col-6 col-sm-5">
                                <ul>
                                    {QUICK_LINKS_2.map((item, index) => (
                                        <li key={item.label + "-" + index} className="mb-15">
                                            <Link
                                                className="at_fade_anim"
                                                data-delay={item.delay}
                                                to={item.href}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <p className="footer-9__label">Contact</p>
                        <div className="footer-9__contact-row">
                            <div className="footer-9__contact">
                                <p className="footer-9__contact-line mb-0 at_fade_anim" data-delay="0.1">
                                    <Link to="tel:+12125557398">+212 - 555-7398</Link>
                                </p>
                                <p className="footer-9__contact-line mb-0 at_fade_anim" data-delay="0.2">
                                    <Link to="mailto:hello@orisa.com">hello@orisa.com</Link>
                                </p>
                                <p className="footer-9__address mb-0 at_fade_anim" data-delay="0.3">
                                    245 Fifth Avenue, Suite 1800<br />New York, NY 10016, USA
                                </p>
                            </div>
                            <div className="footer-9__hours">
                                <p className="footer-9__hours-label mb-0 at_fade_anim" data-delay="0.4">
                                    Mo - Sa
                                </p>
                                <p className="footer-9__hours-value mb-0 at_fade_anim" data-delay="0.5">
                                    9am - 5pm
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-12">
                        <div className="footer-9__socials alt-footer-social-item white-mode" aria-label="Social links">
                            <ul className="list-unstyled mb-0">
                                {SOCIAL_LINKS.map((social) => (
                                    <li key={social.label} className="at_fade_anim" data-delay={social.delay}>
                                        <Link to={social.href} aria-label={social.label}>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="icon-social">{social.icon}</div>
                                                {social.label}
                                            </div>
                                            {SOCIAL_ARROW_SVG}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <h2 className="footer-9__brand text-scale-anim">Orisa Morden Studio</h2>

                <div className="footer-9__bottom">
                    <div className="footer-9__bottom-bar d-flex flex-wrap align-items-center justify-content-between gap-3">
                        <span className="footer-9__copy">Orisa &copy; 2026</span>
                        <ul className="footer-9__policies list-unstyled d-flex flex-wrap gap-3 gap-xxl-4 mb-0">
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="#">Refund Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-9__line" aria-hidden="true">
                        <img
                            src="/assets/imgs/pages/home-9/footer-9-line.webp"
                            alt="orisa"
                            width={1720}
                            height={33}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
