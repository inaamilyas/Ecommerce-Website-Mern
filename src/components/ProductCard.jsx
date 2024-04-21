/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="flex justify-center mb-5">
  
      <div className="w-[270px] h-[350px] py-3 mr-4 rounded-md hover:bg-[#00000014]">
        <div className="h-[32px] flex items-center justify-between px-3">
          {product.off ? (
            <p className="bg-[#DB4444] rounded-md px-3 py-1 text-white ">
              {product.off} %
            </p>
          ) : (
            <div className="h-[4px] w-[12px]"></div>
          )}
          <CiHeart className="text-[20px]" />
        </div>
        <div className="flex justify-between  p-4 gap-4">
          <img
            src="./images/products/keyboard.png"
            alt=""
            className="w-[200px] h-[100px] object-cover"
          />
          <FaRegEye />
        </div>
        <div>
          <button className="w-full bg-black text-center text-white py-2 ">
            Add To Cart
          </button>
        </div>
        <div className="mt-6 px-3">
          <h4 className="font-medium mb-2 ">{product.name}</h4>
          <p className="font-medium mb-2 ">
            <span className="mr-3 text-[#DB4444] ">$343</span>{" "}
            <span className="text-[#00000050] line-through">
              {product.price}
            </span>{" "}
          </p>
          <div className="flex gap-3 font-medium mb-2 ">
            <div className="flex text-[#FFDF00] py-1">
              {[...Array(product.rating)].map((_, starIndex) => (
                <AiFillStar key={starIndex} />
              ))}
            </div>
            <span>({product.noOfReviews})</span>
          </div>
        </div>
      </div>
      </div>
  );
}

export default ProductCard;
