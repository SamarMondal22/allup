import React, { useState } from 'react';
import CmnBanner from '../../CmnBanner/CmnBanner';
import ProductBnr from "../../../../assets/images/product_bnr.png";
import ProductAddShape from "../../../../assets/images/contact_inr_shape.png";
import "./Products.css";

import axiosIntance from '../../../Auth/Helper';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



export default function ProductAdd() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        title:"",
        description:"",
    });
    const[image, setImage] = useState();
    const [errors, setErrors] = useState({});

    const validation = () =>{
        let errors = {};
        if(!input.title){
            errors.title = "Please Add title Name..";
        }
        if(!input.description){
            errors.description = "Please Add Price.."
        }

        return errors;
    }

    let name, value;
    const inputHandaler = (e) => {
        name = e.target.name;
        value = e.target.value;

        if(name === "title"){
            if(value.length === 0){
                setInput({...input, title:""});
                setErrors({...errors, title:"Title is Required..."})
            }else{
                setInput({...input, title:value});
                setErrors({...errors, title:""})
            }
        }
        if(name === "description"){
            if(value.length === 0){
                setInput({...input, description:""});
                setErrors({...errors, description:"Description is Required..."})
            }else{
                setInput({...input, description:value});
                setErrors({...errors, description:""})
            }
        }

    }

    const subHandaler = async (e) => {
        e.preventDefault();
        setErrors(validation);

        const formData = new FormData();
        formData.append("title", input.title);
        formData.append("description",input.description);
        formData.append("image",image);

        try{
            let res = await axiosIntance.post(
                "/product/create",
                formData,
                {
                    headers:{"Content-Type":"multipart/form-data"}
                }
            )
            // console.log("product", res.data);
            if(res.data.status === 200){
                toast(res.data.message);
                // alert(res.data.message);
                setTimeout(() =>{
                    navigate("/productshow")
                },2000);
            }else if(res.data.status === 201){
                toast(res.data.message);
            }
        }catch(err){
            console.log(err);
        }
    }

  return (
    <>
     <CmnBanner Img={ProductBnr} Text={"Product"} />

    {/*==== Products Add form  ===*/}
    <div className='productsAdd_form_sec'>
        <div className='container'>
            <div className='inr'>
                <h2>Ready to Your New Products Create!</h2>
                <p>Hardware packages include 15” Android POS System, Pin pad, Receipt Printer, Cash Drawer, Keyboard and mouse, Backup Battery</p>
                <form>
                    <div className='input_fld'>
                        <label>Product Title</label>
                        <input className='form-control' placeholder='Title Name' value={input.title} name='title' type="text" onChange={inputHandaler} />
                        <span className='err_msg'>{errors.title}</span>
                    </div>
                    <div className='input_fld'>
                        <label>Product Price</label>
                        <input className='form-control' placeholder='Description...' value={input.description} name='description' type="text" onChange={inputHandaler} />
                        <span className='err_msg'>{errors.description}</span>
                    </div>
                    <div className='input_fld'>
                        <label>Product Image</label>
                        <input className='form-control' type="file" name='image*' onChange={(e)=> setImage(e.target.files[0])} />
                    </div>
                    <div className='btn_fld'>
                        <button onClick={subHandaler} className='cmn-btn'>Confirm</button>
                    </div>
                </form>

                <div className='btm_block'>
                    <p>Quick Move All Product Page <Link to="/productshow">Click Me</Link></p>
                </div>
            </div>
        </div>
        <img className='product_bg_shape' src={ProductAddShape} alt="" />
    </div>
    </>
  )
}
