/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  CommonForm  from "../../components/common/form";
import { registerFormControls } from "@/config";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth-slice";

const initialState = {
    userName: '',
    email: '',
    password: ''
  };

function AuthRegister() {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmit(event){
        event.preventDefault(); 
        dispatch(registerUser(formData)).then((data)=> 
            console.log(data)
        // navigate('/auth/login')
        );
    }
    return (
        <div className="mx-auto w-full max-w-md space-y-6 ">
            <div className="text-center">
               <h1 className="text-3xl font-bold tracking-tight text-foreground">Create New Account</h1> 
               <p className="mt-2">Already have an account
               <Link className="font-medium ml-2  text-primary hover:underline" to='/auth/login '>Login</Link>
               </p>
            </div>
            <CommonForm
            formControls={registerFormControls}
            buttonText={'Sign Up'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            />
        </div>
    );
 }
 export default AuthRegister;