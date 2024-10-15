import React from 'react'
import { Link } from 'react-router-dom';

export default function Solution({SolutionImg1 , subTitle, Para , Price, Condition,deleteHandaler,detailsLink}) {

   
  return (
    <>
      <div className='solution_box'>
        <figure>
            <img src={SolutionImg1} alt="" />
        </figure>
        <div className='solution_info'>
            <h6>{subTitle}</h6>
            <p>{Para}</p>
            <span className='price'>{Price}</span>
            
            {
              Condition ? <Link>Add to cart</Link> : <div className='user_btn'><Link>Add to cart</Link><Link to={detailsLink} className='edit'>Edit</Link><Link className='delete' onClick={()=>deleteHandaler()}>Delete</Link></div>
            }
        </div>
      </div>
    
    </>
  )
}
