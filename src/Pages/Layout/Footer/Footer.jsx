import React from 'react';
import "./Footer.css";
import Logo from "../../../assets/images/logo.png";
import { Link } from 'react-router-dom';

export default function Footer({cmnLayout, cmnLayoutFunc}) {
  return (
    <>
        {
            cmnLayout && <div className='footer_sec'>
                            <div className='container'>
                                <div className='inr'>
                                    <div className='ftr_logo'>
                                        <Link to=""><img src={Logo} alt="" /></Link>
                                    </div>
                                    <ul className='ftr_navigation'>
                                        <li><Link to="">Sign In</Link></li>
                                        <li><Link to="">About Us</Link></li>
                                        <li><Link to="">Contact Us</Link></li>
                                        <li><Link to="">Our Products</Link></li>
                                        <li><Link to="">Our Solutions</Link></li>
                                        <li><Link to="">FAQ</Link></li>
                                        <li><Link to="">Promotions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='copy'>
                                <div className='container'>
                                    <div className='inr'>
                                        <div className='terms'>
                                            <ul>
                                                <li><Link to="">Terms & Conditions</Link></li>
                                                <li><Link to="">Privacy Policy</Link></li>
                                                <li><Link to="">Cookie Policy</Link></li>
                                            </ul>
                                            <p>Copyright 2024 Allup | All Rights Reserved</p>
                                        </div>
                                        <div className='social'>
                                            <ul>
                                                <li><Link to=""><i class="fa-brands fa-youtube"></i></Link></li>
                                                <li><Link to=""><i class="fa-brands fa-x-twitter"></i></Link></li>
                                                <li><Link to=""><i class="fa-brands fa-instagram"></i></Link></li>
                                                <li><Link to=""><i class="fa-brands fa-facebook"></i></Link></li>
                                                <li><Link to=""><i class="fa-brands fa-linkedin"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>       
                        </div>
        }
    </>
  )
};
