/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import ProductCard from "../ProductCard";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Products() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "",
      rating: 5,
      price: "$120",
      off: "",
      noOfReviews: "88",
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "",
      rating: 5,
      price: "$120",
      off: "40",
      noOfReviews: "88",
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "",
      rating: 5,
      price: "$120",
      off: "40",
      noOfReviews: "88",
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "",
      rating: 5,
      price: "$120",
      off: "40",
      noOfReviews: "88",
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "",
      rating: 5,
      price: "$120",
      off: "40",
      noOfReviews: "88",
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "",
      rating: 5,
      price: "$120",
      off: "40",
      noOfReviews: "88",
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "",
      rating: 5,
      price: "$120",
      off: "40",
      noOfReviews: "88",
    },
  ];

  const sliderRef = useRef(null); // Reference to the Slider component

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Move to previous slide
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move to next slide
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="container mx-auto py-20 flex flex-col justify-between border-b-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[40px] w-[20px] rounded-[5px] bg-[#DB4444]"></div>
          <span className="font-semibold text-[#DB4444]">Today's</span>
        </div>

        <div className="flex items-end justify-between ">
          <div className="flex flex-col md:flex-row  md:items-end md:gap-[90px] ">
            <h1 className="text-[36px] font-semibold tracking-[4%] ">
              Flash Sales
            </h1>
            <div className="flex gap-[30px] ">
              <div>
                <p className="text-[14px] font-medium ">Days</p>
                <span className="text-[32px] font-semibold tracking-[4%] mr-[15px]">
                  03
                </span>
                <span className="text-[#DB4444] text-[32px] font-bold ">:</span>
              </div>
              <div>
                <p className="text-[14px] font-medium  ">Hours</p>
                <span className="text-[32px] font-semibold tracking-[4%] mr-[8px]">
                  03
                </span>
                <span className="text-[#DB4444] text-[32px] font-bold ">:</span>
              </div>
              <div>
                <p className="text-[14px] font-medium  ">Minutes</p>
                <span className="text-[32px] font-semibold tracking-[4%] mr-[8px]">
                  03
                </span>
                <span className="text-[#DB4444] text-[32px] font-bold ">:</span>
              </div>
              <div>
                <p className="text-[14px] font-medium  ">Seconds</p>
                <span className="text-[32px] font-semibold tracking-[4%] mr-[8px]">
                  03
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center h-11 gap-3">
            <FaArrowLeft
              className="text-[25px] cursor-pointer"
              onClick={goToPrev}
            />
            <FaArrowRight
              className="text-[25px] cursor-pointer"
              onClick={goToNext}
            />
          </div>
        </div>

        <div className="overflow-hidden py-9 my-6">
          <Slider {...settings} className="test" ref={sliderRef}>
            {products.map((product, idx) => (
              <ProductCard key={idx} product={product}/>
              
            ))}
          </Slider>
        </div>

        <div className="mx-auto mt-5">
          <button className="bg-[#DB4444] py-4 px-12 text-white rounded-md ">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
