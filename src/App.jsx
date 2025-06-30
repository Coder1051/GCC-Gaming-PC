import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from './pages/sitelayout';
import Home from './pages/home';
import AllCategories from './pages/allCategories'
import Hotdeals from './pages/hotdeals'
import PreBuiltPc from './pages/preBuiltPc'
import PcComponents from './pages/pcComponents'
import Error from './pages/errorpage';
import Profile from './pages/subPages/profile';
import Cart from './pages/subPages/cart';
import Returns from './pages/subPages/returns';
import Accessories from './pages/accessories';
import Amd from './pages/brandsPages/amd'
import Nvidia from './pages/brandsPages/nvidia'
import Intel from './pages/brandsPages/intel';
import Corsiar from './pages/brandsPages/corsiar';
import Logitech from './pages/brandsPages/logitech';
import Brands from './pages/brands';
function App() {
  return (
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="all-categories" element={<AllCategories />} /> 
          <Route path="hot-deals" element={<Hotdeals />} />
          <Route path="pre-built-pc's" element={<PreBuiltPc />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="pc-components" element={<PcComponents />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="productreturns" element={<Returns />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/amd" element={<Amd />} />
          <Route path="/brands/nvidia" element={<Nvidia />} />
          <Route path="/brands/intel" element={<Intel />} />
          <Route path="/brands/corsiar" element={<Corsiar />} />
          <Route path="/brands/logitech" element={<Logitech />} />
          <Route path="*" element={<Error />} />
          
        </Route>
      </Routes>
  );
}

export default App;