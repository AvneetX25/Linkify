import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './Textfield';
import { Link, useNavigate } from 'react-router-dom';
import api from '../Api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextApi/ContextApi';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { setToken } = useStoreContext();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const loginHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/login",
                data
            );
            console.log(response.token);
            setToken(response.token);
            localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
            toast.success("Login Successful!");
            reset();
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error("Login Failed!")
        } finally {
            setLoader(false);
        }
    };

  return (
    <div
        className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
        <form onSubmit={handleSubmit(loginHandler)}
            className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
                Login Here
            </h1>

            <hr className='mt-2 mb-5 text-black'/>

            <div className="flex flex-col gap-3">
                <TextField
                    label="UserName"
                    required
                    id="username"
                    type="text"
                    message="*Username is required"
                    placeholder="Type your username"
                    register={register}
                    errors={errors}
                />

                <TextField
                    label="Password"
                    required
                    id="password"
                    type="password"
                    message="*Password is required"
                    placeholder="Type your password"
                    register={register}
                    min={6}
                    errors={errors}
                />
            </div>

            <button
                disabled={loader}
                type='submit'
                className='w-full font-semibold my-3 bg bg-gradient-to-r from-blue-500 to-purple-500 text-white  px-4 py-2 rounded-md shadow'>
                {loader ? "Loading..." : "Login"}
            </button>

            <p className='text-center text-sm text-slate-700 mt-6'>
                Don't have an account? 
                <Link
                    className='font-semibold underline hover:text-black'
                    to="/register">
                        <span className='text-btnColor'> SignUp</span>
                </Link>
            </p>
        </form>
    </div>
  )
}

export default LoginPage