
function Hero() {
    const categories = ["Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",]
  return (
    <div className='w-full '>
        <div className="container mx-auto ">
            <div className="flex flex-col lg:flex-row  justify-between gap-6">
                <div className='flex-[1] border-r-2 border-[#d4d4d4]  '>
                    <ul className='flex lg:flex-col flex-row flex-wrap gap-[20px]'>
                        {categories.map((category, idx)=>(
                            <li className='cursor-pointer' key={idx}>{category}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex-[4]'>
                    <img src="./hero_img.png" className='w-full' alt="" />
                </div>
            </div>
        </div> 
        
    </div>
    
  )
}

export default Hero