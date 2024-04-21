import ProductCard from "../ProductCard";


function AllProducts() {
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

  return (
    <div className="w-full h-fit border-b-2">
      <div className="container mx-auto py-20 flex flex-col justify-between border-b-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[40px] w-[20px] rounded-[5px] bg-[#DB4444]"></div>
          <span className="font-semibold text-[#DB4444]">Our Products</span>
        </div>

        <div className="flex items-end justify-between ">
          <div className="">
            <h1 className="text-[36px] font-semibold tracking-[4%] ">
              Explore Our Products
            </h1>
          </div>
        </div>

        <div className=" py-9 my-6 flex items-center justify-center flex-wrap">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
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

export default AllProducts;
