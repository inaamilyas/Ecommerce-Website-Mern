import React from "react";
import { AiFillStar } from "react-icons/ai";

function ProductDetails() {
  return (
    <div className="w-screen h-auto">
      <div className="flex ">
        <div className="flex-3">
          <div className="flex">
            <div className="flex flex-col">
              <img src="./images/products/keyboard.png" alt="" />
              <img src="./images/products/keyboard.png" alt="" />
              <img src="./images/products/keyboard.png" alt="" />
              <img src="./images/products/keyboard.png" alt="" />
            </div>
            <div>
              <img src="./images/products/keyboard.png" alt="" />
            </div>
          </div>
        </div>
        <div className="flex-1">
            <h1>Product Namee</h1>
            <div>
                <AiFillStar/> <span>(150 reviews)</span> | <span>In Stock</span>
            </div>
            <div>
                <span>Price 123$</span>
            </div>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ut laudantium temporibus. Animi optio qui cupiditate est placeat aperiam illo quasi nemo quas?</p>
            </div>

            <hr />

            <div>
                <h1>Colors : <span className="w-20px h-20px reounded-[]"></span> <span></span> </h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
