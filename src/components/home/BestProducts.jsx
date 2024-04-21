import ProductCard from "../ProductCard";

function BestProducts() {
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
    <div className="w-full h-fit border-b-2">
      <div className="container mx-auto py-20 flex flex-col justify-between border-b-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[40px] w-[20px] rounded-[5px] bg-[#DB4444]"></div>
          <span className="font-semibold text-[#DB4444]">This Month</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="">
            <h1 className="text-[36px] font-semibold tracking-[4%] ">
              Best Selling Products
            </h1>
          </div>
          <div className="flex items-center h-11 gap-3">
            <button className="bg-[#DB4444] py-4 px-12 text-white rounded-md ">
              View All Products
            </button>
          </div>
        </div>

        <div className="py-9 my-6 flex flex-wrap items-center justify-center">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestProducts;
