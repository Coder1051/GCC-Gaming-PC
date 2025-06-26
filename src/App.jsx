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
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  );
}

export default App;