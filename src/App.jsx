import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Catagory from './components/category'
import Bestseller from './components/bestseller'
import BestsellerBanner from './components/bestsellerBanner'
import NewArrivals from './components/newArrivals'
import Discount from './components/discount'
import Facilities from './components/facilities'
import PreFooterGrid from './components/preFooter'
import Footer from './components/footer'
import Blog from './components/blog'

function App() {
  return(
    <>
      <Navbar/>
      <Hero/>
      <Catagory/>
      <Bestseller/>
      <BestsellerBanner/>
      <NewArrivals/>
      <Discount/>
      <Blog/>
      <Facilities/>
      <PreFooterGrid/>
      <Footer/>
    </>
  )
}

export default App;
