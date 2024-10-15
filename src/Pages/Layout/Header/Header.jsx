import React, { useEffect, useState } from 'react';
import LOGO from "../../../assets/images/logo.png";
import "./Header.css";
import { Link } from 'react-router-dom';
import axiosIntance from '../../Auth/Helper';
import { Profile_pic } from '../../Auth/Helper';
import { useNavigate } from 'react-router-dom';

export default function Header({cmnLayout, cmnLayoutFunc}) {
  const navigate = useNavigate();
const [userHeader, setUserHeader] = useState(null);
useEffect(() => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const isAuthenticated = token !== null && token !== undefined;
  cmnLayoutFunc(isAuthenticated);
  const api = async () => {
    try{
      let res = await axiosIntance.get("/user/profile-details");
      setUserHeader(res.data.data);
        
    }catch(err){
      console.log(err);
    }
  }
   
  api();

  
},[]);

const handalerLogout = () => {
  setTimeout(() => {
    cmnLayoutFunc(false)
  },1000);
  localStorage.removeItem("token");
  setTimeout(() => {
    navigate("/login");
  },1000);
  
}
    

  return (
    <>
      {
         cmnLayout &&  <div className='navber'>
                            <div className='container'>
                                <div className='inr'>
                                <div className='logo'>
                                        <Link to="/home"><img src={LOGO} alt="" /></Link>
                                    </div>
                                    <div className='navigation'>
                                        <ul>
                                            <li><Link className='cursorLink' to="/home">Home</Link></li>
                                            <li><Link className='cursorLink' to="/about">About</Link></li>
                                            <li><Link className='cursorLink' to="/productadd">Product</Link></li>
                                        </ul>
                                    </div>
                                    <div className='rt_btn'>
                                        <Link to="/contact" className='cmn-btn'>Contact Sales</Link>
                                        <Link className='cmn-btn user' to="/profile"><i><img src={Profile_pic(userHeader?.profile_pic)} alt="" /></i>Welcome , {userHeader?.first_name}</Link>
                                        <Link onClick={()=>handalerLogout()} className='logout'><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
      }
    
    </>
  )
};
