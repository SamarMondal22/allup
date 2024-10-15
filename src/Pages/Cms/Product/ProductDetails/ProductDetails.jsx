import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CmnBanner from '../../CmnBanner/CmnBanner';

import ProductAddShape from "../../../../assets/images/contact_inr_shape.png";
import EditBnrImg from "../../../../assets/images/edit_bnr_img.png";
import axiosIntance from '../../../Auth/Helper';
import { toast } from 'react-toastify';

export default function ProductDetails() {
    const navigate = useNavigate();
const {id} = useParams();

const [input, setInput] = useState({
    title:"",
    description:"",
});
const [showData , setShowData] = useState();
const [image,setImage] = useState();
const [errors, setErrors] = useState({});

const validation = () => {
    let errors = {};
    if(!input.title){
        errors.title = "Title is Required..."
    }
    if(!input.description){
        errors.title = "Description is Required..."
    }
    return errors;
}

let name , value;
const inputHandaler = (e) =>{
    name = e.target.name;
    value = e.target.value;
    if(name === "title"){
        if(value.length === 0){
            setInput({...input, title:""});
            setErrors({...errors, title:"Title is Required.."})
        }else{
            setInput({...input, title:value});
            setErrors({...errors, title:""})
        }
    }
    if(name === "description"){
        if(value.length === 0){
            setInput({...input, description:""});
            setErrors({...errors, description:"Description is Required..."});
        }else{
            setInput({...input, description:value});
            setErrors({...errors, description:""});
        }
    }
}
const subHandaler =  async (e) =>{
    e.preventDefault();
    setErrors(validation);

    const formData = new FormData();
    formData.append("title",input.title);
    formData.append("description", input.description);
    formData.append("id",id);
    if(image){
        formData.append("image",image)
    }else{
        formData.append("image",showData.image)
    }
    try{
        const res = await axiosIntance.post(
            "/product/update",
            formData,
            {
                headers:{"Content-Type":"multipart/form-data"}
            }
        )
        if(res.data.status === 200){
            toast(res.data.message);
            navigate("/productshow");
        }else if(res.data.status === 201){
            toast(res.data.message);
        }
    }catch(err){
        console.log(err);
    }
}

useEffect(() => {
    axiosIntance.get(`/product/detail/${id}`)
    .then((res) => {
        setShowData(res.data.data);
        console.log("samar",res.data.data);
    }).catch((err) => {
        console.log(err);
    })   
},[]);

useEffect(() => {
    if(showData){
        setInput({
            title:showData.title,
            description: showData.description,
        })
    }
},[showData])

  return (
    <>
    <CmnBanner Img={EditBnrImg} Text={"Help Center"}  />   
    
    <div className='productsAdd_form_sec'>
        <div className='container'>
            <div className='inr'>
                <h2>Ready to Your Edit Products Details</h2>
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
            </div>
        </div>
        <img className='product_bg_shape' src={ProductAddShape} alt="" />
    </div>
    </>
  )
};
