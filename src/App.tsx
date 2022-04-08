import { useEffect, useState } from 'react'
import '../App.css'
import '../src/index.css'
import {Navigate, Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import HomePage from './pages/Homepage'
import Product from './pages/Product'

import ContactPage from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PrivateRouter from './components/PrivateRouter'
import ProductManager from './pages/ProductManager'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import { ProductType } from './pages/types/product'
import {add, list, remove, update } from './api/product'
import Adminlayout from './components/Adminlayout'


function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () =>{
      const {data} = await list();
      setProducts(data);
    }
    getProducts();
  },[])
  const removeItem = (id: number)=>{
    remove(id);
    setProducts(products.filter(item => item.id !== id));
  }
  const onHanldeAdd = (data: ProductType) =>{
    add(data);
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product: ProductType) =>{
    const {data} = await update(product);
    setProducts(products.map(item => item.id === data.id ? data:item));
  }

  return (
    <div className="container">
      <Routes>
        <Route path="/" element ={<WebsiteLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="product">
            <Route index element={<Product/>} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path='contact' element={<ContactPage />} />
        </Route>
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Adminlayout/>} />
            <Route path="product">
              <Route index element={<ProductManager products={products} onRemove={removeItem}/>} />
              <Route path="add" element={<ProductAdd onAdd={onHanldeAdd}/>} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
            </Route>  
          </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
