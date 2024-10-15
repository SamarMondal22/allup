import React, { useState } from 'react';
import Signin from "../../../assets/images/signin.png";
import axiosIntance from '../Helper';
import EyeIcon from "../../../assets/images/eye-slash.png";
import MainIcon from "../../../assets/images/mail.png";
import Eyesimple from "../../../assets/images/eye.png";
import BackEffects from "../../../assets/images/auth-effect.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {

    const [input, setInput] = useState({
        email:"",
        password:"",
    });
    const [error, setError] = useState({});
    const [pass, setPass] = useState(false);
    const navigae = useNavigate();
    const passShow = () =>{
        setPass(!pass);
    }

    const validation = () => {
        let error = {};

        if(!input.email){
            error.email = "Email is Required...*"
        }
        else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.email)){
            error.email = "Email is Invalid.."
        }
        if(!input.password){
            error.password = "Password is Required...*"
        }

        return error;
    }

    let name , value;
    const inputHandaler = (e) =>{
        name = e.target.name;
        value = e.target.value;

        if(name === "email"){
            if(value.length === 0){
                setInput({...input, email:""});
                setError({...error, email:"Email is Required..*"})
            }else{
                setInput({...input, email:value});
                setError({...error, email:""});
            }
        }
        if(name === "password"){
            if(value.length === 0){
                setInput({...input, password:""});
                setError({...error, password:"Password is Required..*"})
            }else{
                setInput({...input, password:value});
                setError({...error, password:""});
            }
        }
    }

    const isSubmitting = async (e) => {
        e.preventDefault();
        setError(validation);

        const formData = new FormData();
        formData.append("email", input.email);
        formData.append("password",input.password);

        try{
            const res = await axiosIntance.post(
                "/user/signin",
                formData,
                {
                    headers:{"Content-Type":"multipart/form-data"}
                }
            )

            if(res.data.status === 200){
                toast(res.data.message);
                const token = res.data.token;
                localStorage.setItem("token",token);
                navigae("/home");
            }else if(res.data.status === 201){
                toast(res.data.message);
                // alert(res.data.message)
            }
            // console.log("login", res.data);
        }catch(err){
            console.log(err);
        }

    }



  return (
    <>
         <div className='auth_sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='left_block'>
                            <div className='top_title'>
                                <h1>Sign In</h1>
                                <p>Ready to build your new allup system?</p>
                            </div>
                            <div className='form_block'>
                               <form>
                                    <div className='input_fld'>
                                        <input className='form-control' type="text" placeholder='Email Address*' name='email' value={input.email} onChange={inputHandaler} />
                                        <span className='error_msg'>{error.email}</span>
                                        <span className='input_icon'><img src={MainIcon} alt="" /></span>
                                    </div>
                                    <div className='input_fld'>
                                        <input className='form-control' type={pass ? "text":"password"} placeholder='Password*' name='password' value={input.password} onChange={inputHandaler} />
                                        <span className='error_msg'>{error.password}</span>
                                        <span className='input_icon pass' onClick={passShow}><img src={pass? Eyesimple : EyeIcon} alt="" /></span>
                                    </div>
                                    <div className='btm_fld'>
                                        <button onClick={isSubmitting} className='cmn-btn'>Sign In</button>
                                    </div>
                               </form>
                            </div>
                            <div className='btm_block'>
                                <p>New User? <Link to="/">Click here to sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='rt_block'>
                            <figure>
                                <img src={Signin} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <img className='back_effects' src={BackEffects} alt="" />
        </div>
    
    
    </>
  )
};
