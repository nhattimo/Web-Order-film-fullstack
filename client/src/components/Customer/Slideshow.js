import React, { useEffect, useRef } from "react";
import image1 from "../../assets/img/slideshows/item1.jpg";
import image1Md from "../../assets/img/slideshows/item1-md.png";
import image2 from "../../assets/img/slideshows/item2.jpg";
import image3 from "../../assets/img/slideshows/item3.jpg";
import image4 from "../../assets/img/slideshows/item5.png";

const Slideshow = () => {
    const slideIndex = useRef(0);
    const slidesRef = useRef([]);

    useEffect(() => {
        function showSlides() {
            let slides = slidesRef.current;
            if (slides.length === 0) return;

            for (let i = 0; i < slides.length; i++) {
                if (slides[i]) {
                    slides[i].style.display = "none";
                }
            }
            slideIndex.current++;
            if (slideIndex.current > slides.length) {
                slideIndex.current = 1;
            }
            if (slides[slideIndex.current - 1]) {
                slides[slideIndex.current - 1].style.display = "block";
            }
            setTimeout(showSlides, 6000);
        }

        // Hiển thị slide đầu tiên ngay khi component được render
        if (slidesRef.current[0]) {
            slidesRef.current[0].style.display = "block";
        }

        // Bắt đầu slideshow
        showSlides();

        // Cleanup function to clear timeout when component unmounts
        return () => {
            clearTimeout(showSlides);
        };
    }, []);

    return (
        <div className="slideshow">
            <div className="slideshow__inner">
                {/* Slideshow items */}
                <div
                    className="slideshow__item mySlides"
                    ref={(el) => (slidesRef.current[0] = el)}
                >
                    <a href="#!" className="slideshow__link">
                        <picture>
                            <source
                                media="(max-width: 767.98px)"
                                srcSet={image1Md}
                            />
                            <img
                                src={image1}
                                alt=""
                                className="slideshow__img"
                            />
                        </picture>
                    </a>
                </div>

                <div
                    className="slideshow__item mySlides"
                    ref={(el) => (slidesRef.current[1] = el)}
                >
                    <a href="#!" className="slideshow__link">
                        <picture>
                            <source
                                media="(max-width: 767.98px)"
                                srcSet={image2}
                            />
                            <img
                                src={image2}
                                alt=""
                                className="slideshow__img"
                            />
                        </picture>
                    </a>
                </div>

                <div
                    className="slideshow__item mySlides"
                    ref={(el) => (slidesRef.current[2] = el)}
                >
                    <a href="#!" className="slideshow__link">
                        <picture>
                            <source
                                media="(max-width: 767.98px)"
                                srcSet={image3}
                            />
                            <img
                                src={image3}
                                alt=""
                                className="slideshow__img"
                            />
                        </picture>
                    </a>
                </div>

                <div
                    className="slideshow__item mySlides"
                    ref={(el) => (slidesRef.current[3] = el)}
                >
                    <a href="#!" className="slideshow__link">
                        <picture>
                            <source
                                media="(max-width: 767.98px)"
                                srcSet={image4}
                            />
                            <img
                                src={image4}
                                alt=""
                                className="slideshow__img"
                            />
                        </picture>
                    </a>
                </div>
            </div>
            <div className="slideshow__page">
                <span className="slideshow__num">1</span>
                <span className="slideshow__slider"></span>
                <span className="slideshow__num">5</span>
            </div>
        </div>
    );
};

export default Slideshow;
