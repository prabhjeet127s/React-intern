import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slider = (SlickSlider as any).default || SlickSlider;

const Slidessss = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1,
        cssEase: "linear",
        pauseOnHover: false,
    };
    return (
        <Slider {...settings}>
            <div><h2>1</h2></div>
            <div><h2>2</h2></div>
            <div><h2>3</h2></div>
            <div><h2>3</h2></div>
            <div><h2>3</h2></div>
            <div><h2>3</h2></div>
            <div><h2>3</h2></div>

        </Slider>
    );
};
export default Slidessss;