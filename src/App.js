import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {  BrowserRouter as Router , Route ,Routes} from "react-router-dom"
import Slider from './components/Slider';
import pkg from './data/data.json'
import Offers from './components/Offers.js'
import Heading from "./components/Heading.js"
import StarProduct from './components/StarProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccesories from "./components/HotAccessories.js" 
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos.js'
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptios from './components/NavOptios';

 const banner = pkg.banner;
 const offer = pkg.offer;
 const starProduct = pkg.starProduct;



function App() {

  return (
  <Router>
    <PreNavbar/>
       <Navbar/>
       <NavOptios miPhones={pkg.miPhones} redmiPhones={pkg.redmiPhones} tv={pkg.tv} laptop={pkg.laptop} fitnessAndLifeStyle={pkg.fitnessAndLifeStyle} home={pkg.home} audio={pkg.audio}  accessories={pkg.accessories} />

       <Slider start={banner.start}/>
       <Offers offer={offer}  />
       <Heading text= "STAR PRODUCTS"/> 
       <StarProduct starProduct={starProduct}/>
       <Heading text= "HOT ACCESSORIES"/> 
       <HotAccessoriesMenu />

       <Routes>
      <Route exact path="/music" element={<HotAccesories music={pkg.hotAccessories.music} musicCover={pkg.hotAccessoriesCover.music} />} />
    </Routes>

    <Routes>
      <Route exact path="/smartDevice" element={<HotAccesories smartDevice={pkg.hotAccessories.smartDevice} smartDeviceCover={pkg.hotAccessoriesCover.smartDevice} />} />
    </Routes>

    <Routes>
      <Route exact path="/home" element={<HotAccesories home={pkg.hotAccessories.home} homeCover={pkg.hotAccessoriesCover.home} />} />
    </Routes>

    <Routes>
      <Route exact path="/lifestyle" element={<HotAccesories lifestyle={pkg.hotAccessories.lifeStyle} lifestyleCover={pkg.hotAccessoriesCover.lifeStyle} />} />
    </Routes>
       
    <Routes>
      <Route exact path="/mobileAccessories" element={<HotAccesories mobileAccessories={pkg.hotAccessories.mobileAccessories} mobileAccessoriesCover={pkg.hotAccessoriesCover.mobileAccessories} />} />
    </Routes>
       
   <Heading text="Product Reviews" />

   <ProductReviews productReviews={pkg.productReviews}/>
      
   <Heading text="VIDEOS" />

   <Videos videos={pkg.videos}/>

   <Heading text="IN THE PRESS" />

   <Banner Banner={pkg.banner}/>

   <Footer footer={pkg.footer} />
   </Router>

  );
}

export default App;
