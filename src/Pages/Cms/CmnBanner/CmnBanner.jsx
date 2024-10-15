import React from 'react';

export default function CmnBanner({Img,Text}) {
  return (
    <>
        <div className='cmn_bnr'>
            <div className='container'>
                <div className='inr'>
                    <h1>{Text}</h1>
                </div>
            </div>
            <img src={Img} alt="" />
        </div> 
    </>
  )
};
