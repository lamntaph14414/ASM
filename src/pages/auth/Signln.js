import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { login } from "../../api/auth"
import {isAuthenticate} from "../../utils/localstorage";

const Signln = () => {
    const { register, handleSubmit, formSate: {error}} = useForm()
    const navgate = userNavigate()
    const onSubmit = async (data) =>{
        try {
            const dataUser = await login(data);
            toastr.success("Success", "Login successfully")
            localStorage.setItem("user",JSON.stringify(dataUser.data))
            if(isAuthenticate()){
                if(isAuthenticate().user.role == 1){
                    navgate("/admin")
                }else{
                    navgate("/")
                }
            }
            navgate("/")
        } catch (error) {
            toastr.error("Failed to login", error.response.data.msg)
        }
    }
  return (
    <>
        <div className="relative w-[43%] min-w-[465px] max-w-[465px] mr-12">
            <img src="https://images.unsplash.com/photo-1547103106-9a0e718bb2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" alt="" className="w-full h-[550px] radius-secondary object-cover" />
            <NavLink className="absolute top-3 left-3 bg-white rounded-lg opacity-50 px-2 py-3 trans-second hover:opacity-100 " to="/">
                <img src="https://i.imgur.com/YR2XB5I.png" alt=""
                    className="img-fluid w-28 object-cover" />
            </NavLink>
        </div>
        <div className="auth-content flex flex-col justify-center w-[350px]">
            <h2 className="my-[1px] text-3xl font-bold">Sign In</h2>
            <span className="text-gray-darker">Don’t have an account? <NavLink to="/register" className="text-primary-color font-bold"> Sign Up</NavLink></span>
            <form action="" id="formSignin" className="mt-[20px] mb-[10px]" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__item input-container">
                    <div className="relative">
                        <input id="email"
                            {...register('email', { required: true })}
                            placeholder="Email"
                            className="auth__input p-[10px] radius-primary w-[350px] text-sm border-[1.2px] border-solid border-gray-primary outline-none trans-second focus:border-primary-color" type="email" />
                    </div>
                    <div className="error-container pt-[2px] px-[6px] pb-0 text-xs min-h-[13px]"></div>
                </div>
                <div className="form__item input-container">
                    <div className="relative">
                        <input id="password"
                            {...register('password', { required: true })}
                            placeholder="Password"
                            className="auth__input p-[10px] radius-primary w-[350px] text-sm border-[1.2px] border-solid border-gray-primary outline-none trans-second focus:border-primary-color" type="password" />
                    </div>
                    <div className="error-container">
                        <span className="error-password"></span>
                    </div>
                </div>
                <div className="form__item text-right">
                    <NavLink to="/reset" className="text-gray-darker">Forgot password?</NavLink>
                    <button type="submit" className="auth__button border-none radius-primary bg-primary-color px-[10px] py-[10px] text-white trans-second block w-full mt-1 hover:opacity-90">Sign In</button>
                </div>
            </form>
            <div className="auth-content__social">
                <div className="flex justify-between items-center">
                    <span className="border-b border-solid border-gray-primary w-full"></span>
                    <span className="text-gray-darker block text-center w-full">Or sign in with</span>
                    <span className="border-b border-solid border-gray-primary w-full"></span>
                </div>
                <div className="social__content text-center mt-[10px]">
                    <NavLink to="#" className="social__item border border-solid color-gray-light py-2 px-[10px] radius-primary"><i className="bi bi-google leading-snug text-red"></i></NavLink>
                    <NavLink to="#" className="social__item border border-solid color-gray-light py-2 px-[10px] radius-primary"><i className="bi bi-facebook leading-snug text-[#0466e4]"></i></NavLink>
                    <NavLink to="#" className="social__item border border-solid color-gray-light py-2 px-[10px] radius-primary"><i className="bi bi-twitter leading-snug text-[#009ef8]"></i></NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signln