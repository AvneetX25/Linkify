import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./Textfield";
import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import api from '../Api/api';

function RegisterPage() {
    const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });
  const registerHandler = async (data) => {
    setLoader(true);
    try{
        const {data : response} = await api.post(
            "/api/auth/public/register",
            data
        );
        reset();
        navigate("/login");
        toast.success("Registered Successfulyy!")
        
    }catch(error){
        console.log(error);
        toast.error("Registration Failed!");
    }finally{
        setLoader(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
             <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
          Register Here
        </h1>
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="space-y-5 pt-6"
      >
       
    
        <div className="flex flex-col gap-3">
          <TextField
            label="Username"
            required
            id="username"
            type="text"
            message="Username is required"
            placeholder="Type your username"
            register={register}
            errors={errors}
          />
          <TextField
            label="Email"
            required
            id="email"
            type="text"
            message="Email is required"
            placeholder="Type your email-id"
            register={register}
            errors={errors}
          />
          <TextField
            label="Password"
            required
            id="password"
            type="text"
            message="Password is required"
            placeholder="Type your password"
            min={6}
            register={register}
            errors={errors}
          />
        </div>
        <button
          disabled={loader}
          type="submit"
          className=" w-full font-semibold my-3 bg bg-gradient-to-r from-blue-500 to-purple-500 text-white  px-4 py-2 rounded-md shadow">
          {loader ? "Loading" : "Register"}
        </button>
         <p className="text-center text-slate-700 mt-3">Already have an account?
             <Link
                    className='font-semibold  hover:text-black'
                    to="/login">
                        <span className="text-purple-500"> Login</span>
                </Link>
        
      </p>

      </form>
      </div>
     
    </div>
  );
}

export default RegisterPage;
