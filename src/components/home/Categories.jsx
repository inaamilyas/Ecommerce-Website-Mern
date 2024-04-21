import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

function Categories() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const categories = [
    {
      name: "Phones",
      image: "./images/categories/Category-CellPhone.svg",
    },
    {
      name: "Computers",
      image: "./images/categories/Category-CellPhone.svg",
    },
    {
      name: "SmartWatch",
      image: "./images/categories/Category-CellPhone.svg",
    },
    {
      name: "Camera",
      image: "./images/categories/Category-CellPhone.svg",
    },
    {
      name: "HeadPhones",
      image: "./images/categories/Category-CellPhone.svg",
    },
    {
      name: "Gaming",
      image: "./images/categories/Category-CellPhone.svg",
    },
  ];
  return (
    <div className="w-full h-fit border-b-2">
      <div className="container mx-auto py-20 flex flex-col justify-between border-b-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[40px] w-[20px] rounded-[5px] bg-[#DB4444]"></div>
          <span className="font-semibold text-[#DB4444]">Categories</span>
        </div>

        <div className="flex items-end justify-between ">
          <div className="">
            <h1 className="text-[36px] font-semibold tracking-[4%] ">
              Browaws By Categories
            </h1>
          </div>
          <div className="flex items-center h-11 gap-3">
            <FaArrowLeft
              className="text-[25px] cursor-pointer"
              //   onClick={goToPrev}
            />
            <FaArrowRight
              className="text-[25px] cursor-pointer"
              //   onClick={goToNext}
            />
          </div>
        </div>

        <div className="overflow-hidden py-9 my-6">
          <Slider {...settings} className="categories-slider">
            {categories.map((category, idx) => (
              <div className="flex justify-center slide-item" key={idx}>
                <div className="flex items-center justify-center p-5 flex-col h-[218px] w-[200px] border-[1px] border-black rounded-md hover:bg-[#DB4444] hover:text-white ">
                  <img
                    src={category.image}
                    className=" w-[145px] h-[145px] object-cover"
                    alt=""
                  />
                  <h1 className="text-[20px] font-semibold tracking-[4%] ">
                    {category.name}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Categories;
