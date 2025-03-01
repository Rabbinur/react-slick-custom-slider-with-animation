"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Banners } from "../../constants";
import Image from "next/image";
import Banner from "./Banner";
import Button from "./Button";
const Hero = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const link = "/about";
  // console.log(Banners);
  const settings = {
    dots: false,
    lazyLoad: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };
  const slideStyles = (index) => {
    const transition = {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    };

    return {
      y: currentSlide === index ? "0%" : "-100%",
      transition: transition,
    };
  };
  const slideStyles1 = (index) => {
    const transition = {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    };

    return {
      y: currentSlide === index ? "0%" : "100%",
      transition: transition,
    };
  };

  const handleClickNext = () => {
    sliderRef.current.slickNext();
  };

  const handleClickPrev = () => {
    sliderRef.current.slickPrev();
  };
  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };
  const divStyle = {
    backgroundImage:
      "linear-gradient(45deg, rgba(215, 65, 120, 1) 0%, rgba(255, 234, 138, 0.6) 100%)",

    // background: linear-gradient(45deg, rgba(215,65,120,1) 0%, rgba(255,234,138,0.6) 100%);
  };

  return (
    <div
      className={`w-full  bg-[#f1f1f1] overflow-hidden relative transition duration-300 group`}
    >
      <AnimatePresence>
        <Slider ref={sliderRef} {...settings}>
          {Banners.map((item, index) => (
            <motion.div key={item._id} className="relative  overflow-hidden ">
              <div className="relative">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={
                    currentSlide === index ? { scale: 1.1 } : { scale: 1 }
                  }
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Image
                    src={item.img}
                    alt={` ${index + 1}`}
                    width=""
                    height=""
                    className="w-full object-cover h-[502px] sm:h-[900px]"
                  />
                </motion.div>
                <div style={divStyle} className="absolute inset-0  "></div>

                <motion.div
                  // initial={{ y: "0%" }}
                  animate={slideStyles1(index)}
                  // transition={{ duration: 0.95, delay: 0.5 }}
                  // exit={{ opacity: 0 }}
                  className=" absolute top-[40%] left-0 right-0  transform -translate-y-1/2 -translate-x-1/2
                z-[999]"
                >
                  {/* // <div className="relative py-5">
                //   <Banner className={`text-white z-[999]`} />
                // </div> */}
                  <motion.div
                    initial={{ y: "10%" }} // Initial vertical translation
                    animate={
                      currentSlide === index ? { y: "0%" } : { y: "10%" }
                    } // Use vertical translation
                    transition={{ duration: 0.25, delay: 0.25 }}
                    exit={{ y: "10%" }} // Exit with vertical translation
                  >
                    <Banner className={`text-white z-[999]`} />
                  </motion.div>
                  {/* // <div className="w-32 mx-auto">
                //   <Link href={link} className="flex  justify-center  ">
                //     <Button
                //       type="button"
                //       title="About More"
                //       className={`px-6 py-2 bg-[#000] text-white rounded-full`}
                //     />
                //   </Link>
                // </div> */}
                  <motion.div
                    initial={{ y: "10%" }}
                    animate={
                      currentSlide === index ? { y: "0%" } : { y: "10%" }
                    }
                    transition={{ duration: 0.5, delay: 0.5 }}
                    exit={{ y: "10%" }}
                  >
                    <div
                      className={` ${
                        item.href1 ? "w-72" : "w-32"
                      }  mx-auto my-auto flex gap-5 mt-5`}
                    >
                      <Link
                        href={`${item.href}`}
                        className="flex justify-center "
                      >
                        <Button
                          type="button"
                          title={item.title}
                          className={`px-6 py-2 bg-[#000] hover:bg-white hover:text-black duration-500 hover:duration-500 text-white rounded-full`}
                        />
                      </Link>
                      {item.href1 ? (
                        <Link
                          href={`${item.href1}`}
                          className="flex justify-center "
                        >
                          <Button
                            type="button"
                            title={item.title1}
                            className={`px-6 py-2 bg-[#000] text-white hover:bg-white hover:text-black duration-500 hover:duration-500 rounded-full`}
                          />
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </motion.div>
                </motion.div>
                {/* <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 -translate-x-1/2 z-[999]">
                  <motion.div
                    initial={{ y: "10%" }} // Initial vertical translation
                    animate={
                      currentSlide === index ? { y: "0%" } : { y: "10%" }
                    } // Use vertical translation
                    transition={{ duration: 0.25, delay: 0.25 }}
                    exit={{ y: "10%" }} // Exit with vertical translation
                  >
                    <Banner className={`text-white z-[999]`} />
                  </motion.div>
                  <motion.div
                    initial={{ y: "10%" }}
                    animate={
                      currentSlide === index ? { y: "0%" } : { y: "10%" }
                    }
                    transition={{ duration: 0.5, delay: 0.5 }}
                    exit={{ y: "10%" }}
                  >
                    <div className="w-32 mx-auto">
                      <Link href={link} className="flex justify-center ">
                        <Button
                          type="button"
                          title="About More"
                          className={`px-6 py-2 bg-[#000] text-white rounded-full`}
                        />
                      </Link>
                    </div>
                  </motion.div>
                </div> */}
              </div>
            </motion.div>
          ))}
        </Slider>
      </AnimatePresence>
      <div
        className="flex justify-center mt-2 cursor-pointer
       md:left-[38%] sm:left-[37%] left-[25%] 
         absolute  lg:left-[45%] lg:bottom-20
     md:bottom-14 bottom-5 "
      >
        {Banners.map((_, index) => (
          <div
            key={index}
            className={`w-10 h-[6px] mx-2 rounded-full ${
              currentSlide === index ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div
        className={` z-[999] h-[50px] w-[50px] bg-white rounded-full flexCenter duration-500 absolute opacity-0
         -translate-x-10 overflow-hidden group-hover:opacity-100 group-hover:translate-x-0  cursor-pointer
         top-[45%] left-5`}
        onClick={handleClickPrev}
      >
        <Icon icon="mingcute:arrow-left-fill" width={35} />
      </div>
      <div
        className={` z-[999] h-[50px] w-[50px] bg-white rounded-full flexCenter duration-500 absolute
         opacity-0 translate-x-10 overflow-hidden group-hover:opacity-100 group-hover:translate-x-0  cursor-pointer
         top-[45%] right-5`}
        onClick={handleClickNext}
      >
        <Icon icon="mingcute:arrow-right-fill" width={35} />
      </div>
    </div>
  );
};

export default Hero;
