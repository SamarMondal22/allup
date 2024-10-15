import React, { useEffect, useState } from 'react';
import axiosIntance from '../../Auth/Helper';
import { Profile_pic } from '../../Auth/Helper';
import "./Profile.css";

export default function Profile() {

    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const Api = async () => {
            try{
                let res = await axiosIntance.get("/user/profile-details");
                setProfileData(res.data.data);
                console.log("samar",res.data.data);
            }catch(err){
                console.log(err);
            }
        }
        Api();
    },[]);


  return (
    <>
        <div className='profile_sec'>
            <div className='container'>
                <div className='inr'>
                   <h4>Profile Details</h4>
                   <div className='profile_detls'>
                        <figure>
                            <img src={Profile_pic(profileData?.profile_pic)} alt="" />
                        </figure>
                        <div className='text_detls'>
                            <div className='box'>
                                <p>First Name</p>
                                <p>{profileData?.first_name}</p>
                            </div>
                            <div className='box'>
                                <p>Last Name</p>
                                <p>{profileData?.last_name}</p>
                            </div>
                            <div className='box'>
                                <p>Email Address</p>
                                <p>{profileData?.email}</p>
                            </div>
                            <div className='box'>
                                <p>Register Type</p>
                                <p>{profileData?.register_type}</p>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
};
