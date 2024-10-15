import React, { useLayoutEffect } from 'react';

import CmnBanner from '../CmnBanner/CmnBanner';
import ContactBnr from "../../../assets/images/contact_bnr.png";
import Mail from "../../../assets/images/mail_1.png";
import Location from "../../../assets/images/lcation.png";
import Phone from "../../../assets/images/call.png";
import ContactInrShape from "../../../assets/images/contact_inr_shape.png";
import { Link } from 'react-router-dom';
import Input from './Input';
import "./Contact.css";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap-trial/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function Contact() {

  useLayoutEffect(() => {
    let animation = gsap.context(()=> {
      let target = gsap.utils.toArray(".contact_inr_sec .left_col h2");
      let split = SplitText.create(".contact_inr_sec .left_col h2", {type:"chars"});
      gsap.from(split.chars,{
        opacity:0,
        y:100,
        case:"black",
        duration:0.5,
        stagger:0.1,
        scrollTrigger:{
            trigger:target,
            start:"top 85%",
            end:"bottom center"
        }
      })
    })
  return ()=> {animation.revert()}
  },[]);

  const subHandaler = (e) =>{
    e.preventDefault();
  }

  return (
    <>
        <CmnBanner Img={ContactBnr} Text={"Contact us"} />

        {/*=== Contact Start ===*/}
        <div className='contact_inr_sec'>
            <div className='container'>
              <div className='row'>
                  <div className='col-lg-6 col-md-12'>
                      <div className='left_col'>
                          <h6>Contact Details</h6>
                          <h2>Lorem ipsum dolor sit amet consectetur</h2>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                          <div className='contact_info'>
                              <ul>
                                <li>
                                  <i><img src={Location} alt="" /></i>
                                  <div className='contact_info'>
                                    <h6>Location</h6>
                                    <p>abc street name, location, city, country, zip</p>
                                  </div>
                                </li>
                                <li>
                                  <i><img src={Phone} alt="" /></i>
                                  <div className='contact_info'>
                                    <h6>Call</h6>
                                    <p><Link to="tel:1234567890">1234567890</Link></p>
                                  </div>
                                </li>
                                <li>
                                  <i><img src={Mail} alt="" /></i>
                                  <div className='contact_info'>
                                    <h6>Email</h6>
                                    <p><Link to="mailto:info@gmail.com">info@gmail.com</Link></p>
                                  </div>
                                </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                      <div className='right_col'>
                          <h2>Contact With Us</h2>
                          <form onSubmit={subHandaler}>
                            <div className='input_info'>
                                <label>Name</label>
                                <Input className={"form-control"} type={"text"} placeholder={"John"} />
                            </div>
                            <div className='input_info'>
                                <label>Email</label>
                                <Input type={"email"} placeholder={"info@email.com"} className={"form-control"} />
                            </div>
                            <div className='input_info'>
                                <label>Phone Number</label>
                                <Input type={"text"} placeholder={"000-000-0000"} className={"form-control"} />
                            </div>
                            <div className='input_info'>
                                <label>Message</label>
                                <textarea className='form-control' placeholder='Lorem ipsum dolor'></textarea>
                            </div>
                            <div className='btn_fld'>
                                <button type='submit' className='cmn-btn'>Submit</button>
                            </div>
                          </form>
                      </div>
                  </div>
              </div>
            </div>
            <img className='contactInrShape' src={ContactInrShape} alt="" />
        </div>
    </>
  )
};
