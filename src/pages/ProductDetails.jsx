import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/layout/Footer";
import { useState } from "react";

function ProductDetails() {
  const [quantity,setQuantity] = useState(1)
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
     
      noOfReviews: "88",
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "",
      rating: 5,
      price: "$120",
     
      noOfReviews: "88",
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "",
      rating: 5,
      price: "$120",
     
      noOfReviews: "88",
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      image: "",
      rating: 5,
      price: "$120",
     
      noOfReviews: "88",
    },
  ];
  return (
    <div className="w-full">
      <Navbar />
      <div className="container mx-auto py-10 ">
        <div className="flex ">
          <div className="flex-[2]">
            <div className="flex">
              <div className="flex-[1] flex flex-col gap-4">
                <img
                  src="./images/products/keyboard.png"
                  alt=""
                  className="w-[170px] h-[170px] rounded-md object-cover "
                />
                <img
                  src="./images/products/keyboard.png"
                  alt=""
                  className="w-[170px] h-[170px] rounded-md object-cover "
                />
                <img
                  src="./images/products/keyboard.png"
                  alt=""
                  className="w-[170px] h-[170px] rounded-md object-cover "
                />
                <img
                  src="./images/products/keyboard.png"
                  alt=""
                  className="w-[170px] h-[170px] rounded-md object-cover "
                />
                
              </div>
              <div className="flex-[2] w-[500px] h-[600px] flex items-center justify-center">
                <img
                  src="./images/products/keyboard.png"
                  alt=""
                  className="w-[446px] h-[315px] object-cover "
                />
              </div>
            </div>
          </div>
          <div className="flex-[1]">
            <h1 className="text-[24px] font-semibold mb-4">
              Havic HV G-92 Gamepad
            </h1>
            <div className="flex items-center text-[25px] gap-1 mb-4">
              {[...Array(3)].map((_, starIndex) => (
                <AiFillStar key={starIndex} className="text-[yellow]" />
              ))}
              {[...Array(5 - 3)].map((_, starIndex) => (
                <AiFillStar key={starIndex} className="text-[#0000004b]" />
              ))}

              <span className="ml-1">(150 Reviews)</span>
              <span className="border-l-[3px] border-[#00FF66] ml-4 px-4 ">
                In Stock
              </span>
            </div>
            <div className="mb-6">
              <span className="text-[24px] font-medium">$123</span>
            </div>
            <div className="mb-6">
              <p className="">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>

            <div className=" mb-6 w-full h-[1px] bg-black" />

            <div className="flex items-center mb-6">
              <p className="text-[20px] mr-6">Colors : </p>
              <div className="w-[20px] h-[20px] rounded-[50%] bg-black mr-2"></div>
              <div className="w-[20px] h-[20px] rounded-[50%] bg-[pink]"></div>
            </div>

            <div className="flex items-center text-[20px] mb-6">
              <p className="mr-4">Sizes : </p>
              <span className="text-center min-w-[40px] border-2 border-black rounded-[4px] p-1 ml-2 hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-[#ffffff] ">
                XS
              </span>
              <span className="text-center min-w-[40px] border-2 border-black rounded-[4px] p-1 ml-2 hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-[#ffffff] ">
                S
              </span>
              <span className="text-center min-w-[40px] border-2 border-black rounded-[4px] p-1 ml-2 hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-[#ffffff] ">
                M
              </span>
              <span className="text-center min-w-[40px] border-2 border-black rounded-[4px] p-1 ml-2 hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-[#ffffff] ">
                L
              </span>
              <span className="text-center min-w-[40px] border-2 border-black rounded-[4px] p-1 ml-2 hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-[#ffffff] ">
                XL
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-[160px] h-10 flex">
                <button className="w-[40px] h-full text-center text-[20px] hover:bg-[#DB4444] border-[2px] border-black hover:text-white " 
                  onClick={()=>{quantity > 1 ?setQuantity(quantity-1) : setQuantity(1)}}
                  >
                  -
                </button>
                <p className="w-[80px] h-full text-center text-[20px] border-[2px] border-black leading-[40px] ">
                  {quantity}
                </p>
                <button className="w-[40px] h-full text-center text-[20px] hover:text-white hover:bg-[#DB4444] border-[2px] border-black " onClick={()=>setQuantity(quantity+1)}>
                  +
                </button>
              </div>
              <div>
                <button className="bg-[#DB4444] text-white px-6 py-3 rounded-[4px] text-[20px ">
                  Buy Now
                </button>
              </div>
              <div>
                <button className="text-[25px] p-[7px]  rounded-[4px] hover:text-white hover:bg-[#DB4444] border-[2px] border-black ">
                  <AiOutlineHeart className="" />
                </button>
              </div>
            </div>

            <div className="border-2 border-black">
              <div className="border-b-2 border-black  px-4 py-6 flex items-center gap-4">
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_261_4843)">
                      <path
                        d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 11.8182H11.6667"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.81836 15.4545H8.48503"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 19.0909H11.6667"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_261_4843">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 font-medium">Free Delivery</p>
                  <p>Enter the postal code for devlivery availabilty</p>
                </div>
              </div>
              <div className="px-4 py-6 flex items-center gap-4">
                <div >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_261_4865)">
                      <path
                        d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_261_4865">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                <p className="mb-2 font-medium">Return Delivery</p>
                  <p>
                    Free thirty days Delivery returns. <span>Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit border-b-2">
      <div className="container mx-auto py-20 flex flex-col justify-between border-b-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[40px] w-[20px] rounded-[5px] bg-[#DB4444]"></div>
          <span className="font-semibold text-[#DB4444]">Related Items</span>
        </div>

        <div className="py-9 my-6 flex flex-wrap items-center justify-center">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
    
    <Footer/>
    </div>
  );
}

export default ProductDetails;
