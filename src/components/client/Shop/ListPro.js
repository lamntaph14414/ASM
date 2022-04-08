import React from 'react'
import { Link } from 'react-router-dom'


const ListPro = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
        <div key={index} className="products__item bg-white radius-primary pt-[5px] px-[5px] pb-[10px]">
            <div className="relative overflow-hidden h-44">
                <span className="product-tag product-tag--sale"></span>
                <Link>
                    <img alt="" className="item-img max-w-full h-44 w-full rounded-[7px] object-cover" />
                </Link>
                <button className="btn-favorite btn-favorite-1"><i className="bi bi-heart"></i><i
                    className="bi bi-heart-fill"></i></button>
                <button
                    className="btn-cart-quick absolute -bottom-[50px] -translate-x-1/2 translate-y-8 left-1/2">Add
                    to cart <i className="bi bi-bag"></i></button>
            </div>
            <div className="my-0 mx-2">
                <h3 className="my-[3px] mx-0 h-auto">
                    <Link className="font-normal text-[15px] block w-[190px] truncate" to=""></Link>
                </h3>
                <div className="flex justify-between items-center">
                    <div className="">
                        <span className="product__price product__price--now"></span>
                        <span className="product__price product__price--old"></span>
                    </div>
                    <div className="product-group__variation">
                        <span className="variation__item"></span>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-1">
                    <div className="text-sm">
                        <i className="bi bi-star-fill text-star-color"></i>
                        <i className="bi bi-star-fill text-star-color"></i>
                        <i className="bi bi-star-fill text-star-color"></i>
                        <i className="bi bi-star-fill text-star-color"></i>
                        <i className="bi bi-star-fill text-gray-primary disabled"></i>
                        <span className="product__feedback-quantity">(10)</span>
                    </div>
                    <div className="text-sm"> <span className="text-[15px]">10</span> sales</div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ListPro