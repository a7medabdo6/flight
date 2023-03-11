import React from 'react'
import { useState } from 'react'
import { COLORS } from 'utils/COLORS.'

const Edite = ({handelHide}) => {
  const [count,setcount]=useState(0)
  const increase = ()=>{
setcount(count + 1)
  }
  const Descrease = ()=>{
    setcount(count - 1)
      }
  return (
    <div>
     <div className='d-flex justify-content-between align-items-center'>
      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center ' style={{marginRight:"14px"}}>
          <h5>AMM-IST</h5>
          <h5>Price</h5>
        </div>
        <div className='d-flex justify-content-between align-items-center' >
        <input style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Flight No." aria-label="default input example"/>
         <h6 className='m-3 rounded  d-flex justify-content-center align-items-center ' style={{backgroundColor:"#D6DCE5",color:"white",width:'65px',height:"30px"}}>120</h6>
        </div>

      </div>


      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center ' style={{marginRight:"14px"}}>
          <h5>IST-AMM</h5>
          <h5>Price</h5>
        </div>
        <div className='d-flex justify-content-between align-items-center' >
        <input style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Flight No." aria-label="default input example"/>
         <h6 className='m-3 rounded d-flex justify-content-center align-items-center' style={{backgroundColor:"#D6DCE5",color:"white",width:'65px',height:"30px"}}>120</h6>
        </div>

      </div>
     </div>
     <div className='my-5'>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h5>Increase / descrease Price</h5>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
      <button onClick={increase} type="button" className="btn btn-secondary">+</button>
        <h5 className='d-flex justify-content-center align-items-center rounded ' style={{padding:20,backgroundColor:COLORS.blue,margin:0,height:"35px"}}>{count}</h5>
        <button onClick={Descrease} type="button" className="btn btn-secondary">-</button>  
      </div>
     </div>

     <div className='d-flex justify-content-center align-items-center flex-column mb-5 '>
      <h5 className='me-1'>Total Price</h5>
      <h5 className='d-flex justify-content-center align-items-center px-5 rounded ' style={{backgroundColor:COLORS.blue,height:'30px'}}>250 JOD</h5>
     </div>

     <div>
     <div className='  d-flex justify-content-center align-items-center' style={{margin:25}}>
      <button style={{marginRight:40,backgroundColor:COLORS.purple}}  type="button" className="btn btn-secondary">Add</button>
        <button onClick={handelHide} style={{marginLeft:40,backgroundColor:COLORS.purple}}  type="button" className="btn btn-secondary">Cancel</button>  
      </div>
     </div>
    </div>
  )
}

export default Edite
