import BrandsAndReviews from '../components/subcomponents/brands&review'
import GameCompatible from '../components/subcomponents/compatable'
import ImgSec from '../components/subcomponents/imgsec'
import ProductShowcase from '../components/subcomponents/prodcomp'
import ProductGrid from '../components/subcomponents/prodgrid'
import BuildYourPC from '../components/subcomponents/buildpc'
const Home = () => {
  return (
    <div style={{backgroundColor:'black'}} >
      <ImgSec />
      <ProductShowcase/>
      <ProductGrid/>
      <GameCompatible/>
      <BuildYourPC/>
      <BrandsAndReviews/>
      
    </div>
  )
}
export default Home
