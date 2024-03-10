import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_category } from './store/reducers/homeReducer';
import CategoryShop from './pages/CategoryShop';
import SearchProducts from './pages/SearchProducts';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Card from './pages/Card';
import Details from './pages/Details';
import Register from './pages/Register';
import Login from './pages/Login';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';

import Dashboard from './pages/Dashboard';
import ProtectUser from './utils/ProtectUser';
import Index from './components/dashboard/Index';
import Orders from './components/dashboard/Orders';
import Wishlist from './components/dashboard/Wishlist';
import ChangePassword from './components/dashboard/ChangePassword';
import OrderDetails from './components/dashboard/OrderDetails';
import Chat from './components/dashboard/Chat';
// import ChangePassword from './components/dashboard/ChangePassword';
// import Order from './components/dashboard/Order';
// import Chat from './components/dashboard/Chat';
import ConfirmOrder from './pages/ConfirmOrder';
import About from './pages/About';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_category());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shop />} />
        <Route path="/products?" element={<CategoryShop />} />
        <Route path="/products/search?" element={<SearchProducts />} />
        <Route path="/card" element={<Card />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product/details/:slug" element={<Details />} />
        <Route path="/order/confirm?" element={<ConfirmOrder />} />

        <Route path="/dashboard" element={<ProtectUser />}>
          <Route path="" element={<Dashboard />}>
            <Route path="" element={<Index />} />
            <Route path="my-orders" element={<Orders />} />
            <Route path="my-wishlist" element={<Wishlist />} />
            <Route path="chage-password" element={<ChangePassword />} />
            <Route path="order/details/:orderId" element={<OrderDetails />} />

            <Route path="chat" element={<Chat />} />
            <Route path="chat/:sellerId" element={<Chat />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
