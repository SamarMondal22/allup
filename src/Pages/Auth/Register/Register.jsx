import React, { useState } from 'react';
import SignUpImg from "../../../assets/images/signup.png";
import "../Auth.css";
import axiosIntance from '../Helper';
import ProfileIcon from "../../../assets/images/profile.png";
import MailIcon from "../../../assets/images/mail.png";
import EyeSlashIcon from "../../../assets/images/eye-slash.png";
import EyeIcon from "../../../assets/images/eye.png";
import BackEffects from "../../../assets/images/auth-effect.png";
import { Link } from 'react-router-dom';


export default function Register() {

    const [input, setInput] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",

    });
    const [image, setImage] = useState();
    const [error, setError] = useState({});
    const [pass ,setPass] = useState(false)


    const validation = () =>{
        const error = {}
        if(!input.first_name){
            error.first_name = "First Name is Required.."
        }
        if(!input.last_name){
            error.last_name = "Last Name is Required.."
        }
        if(!input.email){
            error.email = "Email Address is Required.."
        }
        else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.email)){
            error.email = "Email Address is Invalid.."
        }
        if(!input.password){
            error.password = "Password is Required.."
        }

        return error
    }

    let name, value;
    const inputHandaler = (e) => {
        name = e.target.name;
        value = e.target.value;

        if(name === "first_name"){
            if(value.length === 0){
                setInput({...input, first_name:""});
                setError({...error, first_name:"Please Enter Your First Name..*"});
            }else{
                setInput({...input, first_name:value});
                setError({...error, first_name:""})
            }
        }
        if(name === "last_name"){
            if(value.length === 0){
                setInput({...input, last_name:""});
                setError({...error, last_name:"Please Enter Your Last Name..*"})
            }else{
                setInput({...input, last_name:value});
                setError({...error, last_name:""});
            }
        }
        if(name === "email"){
            if(value.length === 0){
                setInput({...input, email:""});
                setError({...error, email:"Please Enter Your Email Address..*"})
            }else{
                setInput({...input, email:value});
                setError({...error, email:""});
            }
        }
        if(name === "password"){
            if(value.length === 0){
                setInput({...input, password:""});
                setError({error, password:"Please Enter Your Password..*"})
            }else{
                setInput({...input, password:value});
                setError({...error, password:""});
            }
        }
    }

    const isSubmitting = async (e) =>{
        e.preventDefault();
        setError(validation);

        const formData = new FormData();
        formData.append("first_name", input.first_name);
        formData.append("last_name",input.last_name);
        formData.append("email",input.email);
        formData.append("password",input.password);
        formData.append("profile_pic",image);
        try{
            let res = await axiosIntance.post(
                "/user/signup",
                formData,
                {
                    headers:{"Content-Type":"multipart/form-data"}
                }
            )
        }catch(err){
            console.log(err);
        }

    }

    const passShow = () =>{
        setPass(!pass);
    }

  return (
    <>
        <div className='auth_sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='left_block'>
                            <div className='top_title'>
                                <h1>Let’s Get Started by <br /> Creating an Allup Account</h1>
                                <p>Please enter your information (* indicates a required field)</p>
                            </div>
                            <div className='form_block'>
                               <form>
                                    <div className='input_fld'>
                                        <input className='form-control' type="text" placeholder='First Name*' name='first_name' value={input.first_name} onChange={inputHandaler}/>
                                        <span className='error_msg'>{error.first_name}</span>
                                        <span className='input_icon'><img src={ProfileIcon} alt="" /></span>
                                    </div>
                                    <div className='input_fld'>
                                        <input className='form-control' type="text" placeholder='Last Name*' name='last_name' value={input.last_name} onChange={inputHandaler} />
                                        <span className='error_msg'>{error.last_name}</span>
                                        <span className='input_icon'><img src={ProfileIcon} alt="" /></span>
                                    </div>
                                    <div className='input_fld'>
                                        <input className='form-control' type="text" placeholder='Email Address*' name='email' value={input.email} onChange={inputHandaler} />
                                        <span className='error_msg'>{error.email}</span>
                                        <span className='input_icon'><img src={MailIcon} alt="" /></span>
                                    </div>
                                    <div className='input_fld'>
                                        <input className='form-control' type={pass ? "text" : "password"} placeholder='Password*' name='password' value={input.password} onChange={inputHandaler} />
                                        <span className='error_msg'>{error.password}</span>
                                        <span className='input_icon pass' onClick={passShow}><img src={pass? EyeIcon : EyeSlashIcon} alt="" /></span>
                                    </div>
                                    <div className='input_fld'>
                                        <input className='form-control' type="file" name='image' onChange={(e)=> setImage(e.target.files[0])}  />
                                    </div>
                                    <div className='btm_fld'>
                                        <button onClick={isSubmitting} className='cmn-btn'>Continue</button>
                                    </div>
                               </form>
                            </div>
                            <div className='btm_block'>
                                <p>Already have an account? <Link to="/login">Click here to login</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='rt_block'>
                            <figure>
                                <img src={SignUpImg} alt="" />
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
