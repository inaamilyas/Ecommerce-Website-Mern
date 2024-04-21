import NavWarning from '../components/home/NavWarning'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import Categories from '../components/home/Categories'
import BestProducts from '../components/home/BestProducts'
import AllProducts from '../components/home/AllProducts'
import Footer from '../components/layout/Footer'


function Home() {
  return (
    <div>
        <NavWarning />
        <Navbar />
        <Hero/>
        <Products />
        <Categories />
        <BestProducts />

        <AllProducts />

        <Footer/>
    </div>
  )
}

export default Home