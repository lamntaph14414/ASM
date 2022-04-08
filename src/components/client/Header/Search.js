import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <>
        <div className='relative'>
            <button>
                <i className="bi bi-search py-[10px] px-3 rounded-full trans-second hover:bg-primary-15-color"></i>
            </button>
            <div className="absolute shadow overflow-hidden color-[#fff] w-[400px] mt-4 p-2 px-3 -right-1 transition-all z-40 bg-white rounded-md">
                <form action="" className="bg-gray-light radius-secondary py-[8px] px-[7px] duration-1000 my-2">
                    <button className="text-gray-primary text-lg pl-1 pr-2" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                    <input id="search" className="border-none bg-transparent w-[250px] outline-none focus:border-orange-200" type="text" placeholder="Nike 2021..."/>
                </form>
                <div className="max-h-[400px] overflow-auto">
                    <div className="product-search grid grid-cols-4 w-full py-2">
                        <div className="col-span-3">
                            <Link  className=" block truncate w-[220px] text-sm text-orange-800"></Link>
                            <span className="text-sm">Size:</span>
                            <p>
                                <span className="product__price--now"></span>
                                <span className="product__price--old"></span>
                            </p>
                        </div>
                        <Link>
                            <img className="w-full h-18 object-cover" src="" alt=""/>
                        </Link>
                    </div>
                    <div className="text-center text-orange-800">Input your item you want to search</div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Search