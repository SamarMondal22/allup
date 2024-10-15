import React, { useEffect, useState } from 'react';
import CmnBanner from '../../CmnBanner/CmnBanner';
import ProductShowBnr from "../../../../assets/images/product_show_bnr.png";
import axiosIntance from '../../../Auth/Helper';
import { upload_pic } from '../../../Auth/Helper';
import Solution from '../../About/Solution';

import "./ProductShow.css";

export default function ProductShow() {
    const[prdctItem, setPrdctItem] = useState(null);

    const [deletr_id, setDelete_id] = useState("");
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        const Api = async () =>{
            try{
                let res = await axiosIntance.post("/product/list");
                setPrdctItem(res.data.data);
                // console.log(res.data.data,"samar")
            }catch(err){
                console.log(err);
            }
        }

        Api();
    },[]);

    const popupDelate = async () => {
        const formData = new FormData();
        formData.append("id",deletr_id);
        
        try{
            await axiosIntance.post(
                "/product/remove",
                formData,
                {
                    headers:{"Content-Type":"multipart/form-data"}
                }
            )
             
            let res = await axiosIntance.post("/product/list");
            setPrdctItem(res.data.data);
            setPopup(false);
        }catch(err){
            console.log(err);
        }

    }
    

  return (
    <>
    <CmnBanner Img={ProductShowBnr} Text={"All Products"} />

    {/* ===== Product Info ===*/}
    <div className='all_product_sec'>
        <div className='container'>
            <div className='title'>
                <h2>Let's Find Your Perfect Product</h2>
                <p>dware packages include 15” Android POS System, Pin pad, Receipt Printer, Cash Drawer, Keyboard and mouse, Backup Battery</p>
            </div>
            <div className='inr'>
                <div className='row'>
                    {
                       prdctItem?.map((item,index) =>(
                        <div key={index} className='col-lg-3 col-md-6 col-12'>
                            <Solution SolutionImg1={upload_pic(item?.image)} subTitle={item?.title} Para={"Includes bluu Restaurant Pro, Reciept Printer and etc..."} Price={item?.description} Condition={false} deleteHandaler={()=> {setDelete_id(item._id); setPopup(true)}} detailsLink={`/productdetails/${item._id}`} />
                        </div>
                       )) 
                    }
                </div>
            </div>
        </div>
    </div>
    


    {
        popup && 
        <div className='delete_popup'>
            <div className='inr'>
                <h4>Are you sure?</h4>
                <div className='delete_icon'>
                    <i class="fa-solid fa-trash"></i>   
                </div>
                <p>You will not be able to recover!</p>
                <div className='btn_info'>
                    <button className='delete_btn cancel' onClick={()=> setPopup(false)}>Cancel</button>
                    <button className='delete_btn ok' onClick={popupDelate}>OK</button>
                </div>
            </div>
        </div>
    }

    </>
  )
}
