import React, { useLayoutEffect, useRef } from 'react';
import "./Home.css";
import BnrMainImg from "../../../assets/images/homeMain_brn_img.png";
import BnrSubImg from "../../../assets/images/homeSub_bnr_img.png";
import HomeBnrEffects from "../../../assets/images/home_bnr_effects.png";
import ServiceImg1 from "../../../assets/images/serviceImg1.png";
import ServiceImg2 from "../../../assets/images/serviceImg2.png";
import ServiceIcon1 from "../../../assets/images/serviceIcon1.png";
import ServiceIcon2 from "../../../assets/images/serviceIcon2.png";
import ServiceIcon3 from "../../../assets/images/serviceIcon3.png";
import ServiceIcon4 from "../../../assets/images/serviceIcon4.png";
import SolutionEffects from "../../../assets/images/solution-effects.png";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap-trial/SplitText";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
    const component = useRef();
    const component2 = useRef();
    const parallax = useRef();
useLayoutEffect(() => {
    let ctx = gsap.context(()=> {
        let target = gsap.utils.toArray(".solution_sec .title_pnl h2")
        let split = SplitText.create(".solution_sec .title_pnl h2", {type:"chars"});
        gsap.from(split.chars,{
            opacity:0,
            y:100,
            case:"black",
            duration:0.5,
            stagger:0.1,
            scrollTrigger:{
                trigger: target,
                start: "top 85%",
                end: "bottom center",
            }
        })

        return () => split.revert();
    },component);
    return () => ctx.revert();
},[]);
useLayoutEffect(() => {
    let ctt = gsap.context(()=> {
        let target = gsap.utils.toArray(".home_bnr_sec .home_bnr_text h1")
        let split = SplitText.create(".home_bnr_sec .home_bnr_text h1", {type:"chars"});
        gsap.from(split.chars,{
            opacity:0,
            y:100,
            case:"black",
            duration:0.5,
            stagger:0.1,
            scrollTrigger:{
                trigger: target,
                start: "top 85%",
                end: "bottom center",
            }
        })

        return () => split.revert();
    },component2);
    return () => ctt.revert();
},[]);
useLayoutEffect(() => {
    let context = gsap.context(()=> {
        const tl = gsap.timeline({
            scrollTrigger:{
                yPercent: 100,
                scrub:1.2,

            },
        })
        tl.to(parallax.current, {
            yPercent: -40,
            delay: -1.5,

        })

       
    },parallax);
    return () => context.revert();
},[]);

  return (
    <>
        <div className='home_bnr_sec' ref={component2}>
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-6 col-md-12'>
                      <div className='home_bnr_text'>
                          <h1><span>Peace of mind</span> is included with every bluu™ system.</h1>
                          <p>We lift your process, elevating simplicity to new heights.
                            Setting up has never been easier – our streamlined approach ensures simplicity, speed, and ease, making your journey from start to success quick and hassle-free
                          </p>
                          <ul>
                            <li><a className='cmn-btn' href="">See Pricing</a></li>
                            <li><a className='cmn-btn' href="">Contact Sales</a></li>
                          </ul>
                          <div className='explore'>
                          Explore more allup™ solutions for your business <a href="">bluu Station Package and more</a>
                          </div>

                      </div>
                  </div>
                  <div className='col-lg-6 col-md-12'>
                      <div className='home_bnr_img'>
                          <figure>
                            <img src={BnrMainImg} alt="" />
                          </figure>
                          <img className='brnSubImg'  ref={parallax} src={BnrSubImg} alt="" />
                      </div>
                  </div>
              </div>
          </div>
          <img className='bnr_effects' src={HomeBnrEffects} alt="" />
        </div>

        {/*==== Solution Sec Start ====*/}
        <div className='solution_sec' ref={component}>
            <div className='container'>
                <div className='title_pnl'>
                    <h2>Let’s Find Your Perfect Solution</h2>
                    <p>We’ll guide you to the right allup solution for your business</p>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='solution_box'>
                              <figure>
                                <img src={ServiceImg1} alt="" />
                              </figure>
                              <div className='solution_info'>
                                  <h4>Quick-Service Restaurant</h4>
                                  <div className='inr_info'>
                                      <div className='box'>
                                          <i><img src={ServiceIcon1} alt="" /></i>
                                          <h6>Quick Serve</h6>
                                          <p>Tailored for quick-serve restaurants to enhance operational efficiency</p>
                                          <a className='cmn-btn' href="">Learn More</a>
                                      </div>
                                      <div className='box'>
                                          <i><img src={ServiceIcon2} alt="" /></i>
                                          <h6>Food Trucks</h6>
                                          <p>Smart terminal and solutions specifically crafted for food trucks</p>
                                          <a className='cmn-btn' href="">Learn More</a>
                                      </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='solution_box'>
                              <figure>
                                <img src={ServiceImg2} alt="" />
                              </figure>
                              <div className='solution_info'>
                                  <h4>Personal Services</h4>
                                  <div className='inr_info'>
                                      <div className='box'>
                                          <i><img src={ServiceIcon3} alt="" /></i>
                                          <h6>Skin Care</h6>
                                          <p>Personalized for skincare businesses to ensure smooth transactions and operations</p>
                                          <a className='cmn-btn' href="">Learn More</a>
                                      </div>
                                      <div className='box'>
                                          <i><img src={ServiceIcon4} alt="" /></i>
                                          <h6>Hair/Nail Salon</h6>
                                          <p>Sustomized for hair and nail salons to facilitate seamless transactions and operations</p>
                                          <Link className='cmn-btn'>Learn More</Link>
                                      </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='solution_effects' src={SolutionEffects} alt="" />
        </div>
        
    
    </>
  )
};
