import React from 'react'
import { Route, Routes } from 'react-router'
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import HomePage from './pages/client/HomePage';
import ProductPage from './pages/client/shop/ProductPage';
import ProductCatePage from './pages/client/shop/ProductCatePage';
import ProductDetailPage from './pages/client/shop/ProductDetailPage';
import AboutPage from './pages/client/AboutPage';
import ContactPage from './pages/client/ContactPage';
import NewsPage from './pages/client/news/NewsPage';
import DetailNewsPage from './pages/client/news/DetailNewsPage';
import CartPage from './pages/client/cart/CartPage';
import CheckoutPage from './pages/client/cart/CheckoutPage';
import OrderSuccessfully from './pages/client/cart/OrderSuccessfully';

import UserProfileLayout from './pages/layouts/UserProfiileLayout';
import Profile from './components/user/Profile';
import Information from './components/user/Information';
import Order from './components/user/Order';

import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import CategoryProduct from './pages/admin/cateProduct/Category';
import EditCategory from './pages/admin/cateProduct/EditCategory';
import Product from './pages/admin/product/Product';
import EditProduct from './pages/admin/product/EditProduct';
import AddProduct from './pages/admin/product/AddProduct';

import Register from './pages/auth/Register';
import SignIn from './pages/auth/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword';
import AuthLayout from './pages/layouts/AuthLayout';
import ResetPassword from './pages/auth/ResetPassword';
import PrivateRouter from './components/PrivateRouter';

import Page404 from './pages/Page404';



const App = () => {
  return (
    <Routes>
        {/* Website */}
        <Route path='/' element={<WebsiteLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="/categories/all/:page" element={<ProductPage />} />
            <Route path="/categories/:cateName" element={<ProductCatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:productName" element={<ProductDetailPage />} />
        </Route>

         {/* Admin */}
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product">
                <Route index element={< Product />} />
                <Route path=":id/edit" element={<EditProduct />} />
                <Route path="add" element={<AddProduct />} />
          </Route>
        </Route>

        {/* auth */}
        <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route path='*' element={<Page404/>}/>
    </Routes>
  )
}

export default App