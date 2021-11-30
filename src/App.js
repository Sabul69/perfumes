import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Pages/Home/Home';
import Header from './Layouts/Header';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import NotFound from './Pages/NotFound/NotFound';
import { StoreProvider } from './Context/StoreContext';

function App() {
  return (
    <StoreProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header/> } exact>
    <Route index element={<Home/>}/>
    <Route path="/Cart" element={<Cart/>} exact />
    <Route path="/Checkout" element={<Checkout/>} exact />
    </Route>
    <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
