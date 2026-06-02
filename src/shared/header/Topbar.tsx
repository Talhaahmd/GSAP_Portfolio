import { Link } from "react-router-dom";
export default function Topbar() {
    return (
        <div className="topbar container-2200 d-none d-md-block bg-neutral-900 changeless mx-lg-3 mx-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="date">
                                <p className="fz-font-label text-white my-0">
                                    Toronto, Canada.
                                </p>
                            </div>
                            <div className="d-flex align-items-center gap-4">
                                <Link to="#" className="fz-font-label fw-500 text-white">
                                    <span>+1 (437) 879-4050</span>
                                </Link>
                                <Link to="#" className="fz-font-body text-white fw-500">
                                    <span>info@klarus.io</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
