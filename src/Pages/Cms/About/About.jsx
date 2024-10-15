import React, { useLayoutEffect } from 'react';
import CmnBanner from '../CmnBanner/CmnBanner';
import Solution from './Solution';

import AboutImg from "../../../assets/images/about_bnr_img.png";
import AboutAllup from "../../../assets/images/inr_about_img.png";
import SolutionImg1 from "../../../assets/images/about_inr_solution1.png";
import SolutionImg2 from "../../../assets/images/about_inr_solution2.png";
import SolutionImg3 from "../../../assets/images/about_inr_solution3.png";
import SolutionImg4 from "../../../assets/images/about_inr_solution4.png";
import Solutionshape from "../../../assets/images/about_inr_allu_shape.png";

import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap-trial/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function About() {
    // const TitleOne = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let target = gsap.utils.toArray(".inr_about_allup .left_col h2");
            let split = SplitText.create(".inr_about_allup .left_col h2",{type:"chars"});
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
        });
        let ct2 = gsap.context(() => {
            let target = gsap.utils.toArray(".about_inr_solution .title h2");
            let split = SplitText.create(".about_inr_solution .title h2",{type:"chars"});
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

        return () =>{
            ctx.revert();
            ct2.revert()
        };
    },[]);
  return (
    <>
        <CmnBanner Img={AboutImg} Text={"About us"} /> 

        {/* ===== About Inner Start ===*/}
        <div className='inr_about_allup'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='left_col'>
                            <h2>About Allup</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Pulvinar proin bibendum blandit quis vitae. Commodo turpis bibendum malesuada consequat nunc. Dictum scelerisque cursus sapien lacus sit. Sit euismod adipiscing orci nulla molestie. Dictum vehicula justo consectetur urna mi nunc elementum. Dictum amet augue lorem duis commodo at sed. Faucibus blandit pulvinar lorem sollicitudin pharetra lorem elementum. Lectus facilisis quis nunc sem diam ut.</p>
                            <p>id eu magna tellus sit. Lacus libero sed eu diam sit odio fusce ac. Volutpat arcu varius nunc diam ullamcorper. Commodo arcu suspendisse enim elit massa accumsan curabitur maecenas nunc. Morbi ac a risus eget varius. Ut porttitor neque felis molestie tempus tellus arcu fermentum. Cursus odio sapien lobortis mauris viverra cursus eget mus.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='right_col'>
                            <figure>
                                <img src={AboutAllup} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ===== Perfect Solution Start ===*/}
        <div className='about_inr_solution'>
            <div className='container'>
                <div className='title'>
                    <h2>Let's Find Your Perfect Solution</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <Solution SolutionImg1={SolutionImg1} subTitle={"Bluu Station Package 2"} Para={"Includes bluu Restaurant Pro, Reciept Printer and etc..."} Price={"+$399"} Condition={true} />
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                    <Solution SolutionImg1={SolutionImg2} subTitle={"bluu Kiosk 27”"} Para={"Includes bluu Restaurant Pro, Reciept Printer and etc..."} Price={"+$399"}  Condition={true} />
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <Solution SolutionImg1={SolutionImg3} subTitle={"bluu Kiosk 32”"} Para={"Includes bluu Restaurant Pro, Reciept Printer and etc..."} Price={"+$399"}  Condition={true} />
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                    <Solution SolutionImg1={SolutionImg4} subTitle={"Smart Terminals"} Para={"Includes bluu Restaurant Pro, Reciept Printer and etc..."} Price={"+$19/mo"}  Condition={true} />
                    </div>
                </div>
            </div>
            <img className='solution_shape' src={Solutionshape} alt="" />
        </div>
    </>
  )
};

  