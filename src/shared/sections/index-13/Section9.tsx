const COL_A = [1, 2, 3, 4, 5, 6];
const COL_B = [7, 8, 9, 1, 2, 3];
const COL_C = [4, 5, 6, 7, 8, 9];

function Column({ images, speed }: { images: number[]; speed: string }) {
    return (
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="at-gallery-item-wrapper" data-speed={speed}>
                {images.map((n, i) => (
                    <div key={i} className="at-gallery-item mb-30">
                        <a href="#"><img className="w-100" src={`/assets/imgs/pages/home-13/home-13_sec_9_${n}.webp`} alt="Orisa" loading="lazy" /></a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Section9() {
    return (
        <div className="sec-5-about pt-65 pb-65">
            <div className="mg-gallery-area fix">
                <div className="container-fluid container-2200">
                    <div className="at-gallery-wrapper">
                        <div className="row gx-30">
                            <Column images={COL_A} speed="-0.1" />
                            <Column images={COL_B} speed="0.8" />
                            <Column images={COL_C} speed="-0.1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
