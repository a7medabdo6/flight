import React, { useEffect } from 'react'
import { useState } from 'react'
import { COLORS } from 'utils/COLORS.'
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    Button,
    Link,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
  } from '@material-ui/core';
const AddRoundTrip = () => {
  const [NoDayes,setNoDayes]=useState()
const [check,setcheck]=useState(false)
  const handelNoDayes=(e)=>{
    setNoDayes(e.target.value)
  }

  useEffect(()=>{
    if(NoDayes === "FromTo"){
      setcheck(true)
    }else{
      setcheck(false)

    }
  },[NoDayes])
    const [count,setcount]=useState(0)
    const increase = ()=>{
  setcount(count + 1)
    }
    const Descrease = ()=>{
      setcount(count - 1)
        }
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center '>
      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center '>
          <h4>AMM-IST</h4>
          <h4>Price</h4>
        </div>
        <div className='d-flex justify-content-between align-items-center' >
        <input style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Flight No." aria-label="default input example"/>
         <h6 className='ms-3 rounded p-2' style={{backgroundColor:"grey",color:"white"}}>120</h6>
        </div>

      </div>


      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center '>
          <h4>IST-AMM</h4>
          <h4>Price</h4>
        </div>
        <div className='d-flex justify-content-between align-items-center' >
        <input style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Flight No." aria-label="default input example"/>
         <h6 className='ms-3 rounded p-2' style={{backgroundColor:"grey",color:"white"}}>120</h6>
        </div>

      </div>
     </div>
<div className='d-flex justify-content-center align-items-center flex-column my-5'>
    <div className='d-flex justify-content-around align-items-center flex-row-reverse w-100'>
    <div className='' >
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <p className='text-nowrap'>Increase / descrease Price</p>
      </div>
      <div className='d-flex justify-content-end align-items-center mb-2 '>
      <button onClick={increase} type="button" className="btn btn-secondary">+</button>
        <p className='d-flex justify-content-center align-items-center rounded ' style={{padding:20,backgroundColor:COLORS.blue,margin:0,height:"35px"}}>{count}</p>
        <button onClick={Descrease} type="button" className="btn btn-secondary">-</button>  
      </div>
     </div>
     <div style={{marginBottom:"10px"}} className=' d-flex justify-content-center align-items-center flex-column'>
        <p className='text-nowrap'>Enter Dayes:</p>
        <div className=' d-flex justify-content-center align-items-center '>
        <input className='text-center rounded' style={{width:"30px",height:"30px",backgroundColor:COLORS.blue}} type="number" />
        {
          check === true ? (
            <div className=' d-flex justify-content-center align-items-center '>
            <p style={{margin:15}}>To</p>
            <input className='text-center rounded' style={{width:"30px",height:"30px",backgroundColor:COLORS.blue}} type="number" />
            </div>
          ):null
        }
      
        </div>
       

     </div>

     <div style={{marginBottom:"10px"}} className=' d-flex justify-content-center align-items-center flex-column'>
        <p>No Of Dayes:</p>
        <select style={{backgroundColor:COLORS.blue}} onChange={handelNoDayes} className="form-select" aria-label="Default select example">
          <option selected value="Less">Less Or Equal</option>
          <option value="FromTo">From - To</option>
          <option value="Gerater">Gerater Or Equal</option>
          
        </select>
     </div>
    </div>
    <button style={{backgroundColor:COLORS.purple,marginBottom:"10px"}}  type="button" className="btn btn-secondary">Calculate</button>  


</div>
   
<div>
  <p style={{backgroundColor:"grey",padding:10,border:"1px solid ",borderRadius:"20px 20px 0px 0px",width:150,marginBottom:0,marginLeft:"25px"}}>Flight Details</p>
 <div style={{border:`1px solid grey`,marginTop:0,marginBottom:10,marginLeft:5,marginRight:5,borderRadius:"20px"}}>
    <table class="table">
  <thead>
    <tr style={{backgroundColor:"grey"}}>
      <th scope="col" className='tableAddRoundTripFontSize'>Flight Two way</th>
      <th scope="col" className='tableAddRoundTripFontSize'>Airlines</th>
      <th scope="col" className='tableAddRoundTripFontSize'>Flight No.</th>
      <th scope="col" className='tableAddRoundTripFontSize'>Dep.APT</th>
      <th scope="col" className='tableAddRoundTripFontSize'>Arr.APT</th>
      <th scope="col" className='tableAddRoundTripFontSize'>Dep.Time</th>
      <th scope="col" className='tableAddRoundTripFontSize'>Dep.Time</th>
      <th scope="col" className='tableAddRoundTripFontSize'>Duration</th>
      <th scope="col" className='tableAddRoundTripFontSize'>Weight</th>
      <th scope="col" className='tableAddRoundTripFontSize'>Supplires</th>
      <th scope="col" className='tableAddRoundTripFontSize'>NO Of Dayes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='tableAddRoundTripFontSize' >AMM-IST-AMM</td>
      <td className='tableAddRoundTripFontSize'>jAV</td>
      <td>
        <div>
          <p className='tableAddRoundTripFontSize'>R12451</p>
          <hr/>
          <p className='tableAddRoundTripFontSize'>R12451</p>
        </div>
        </td>
        <td>
        <div>
          <p className='tableAddRoundTripFontSize'>AMM</p>
          <hr/>
          <p className='tableAddRoundTripFontSize'>IST</p>
        </div>
        </td>
        <td>
        <div>
          <p className='tableAddRoundTripFontSize'>IST</p>
          <hr/>
          <p className='tableAddRoundTripFontSize'>AMM</p>
        </div>
        </td>
        <td>
        <div>
          <p className='tableAddRoundTripFontSize'>15:17</p>
          <hr/>
          <p className='tableAddRoundTripFontSize'>15:17</p>
        </div>
        </td>
        <td>
        <div>
          <p className='tableAddRoundTripFontSize'>19:35</p>
          <hr/>
          <p className='tableAddRoundTripFontSize'>19:35</p>
        </div>
        </td>
        <td>
        <div>
          <p className='tableAddRoundTripFontSize'>2:35</p>
          <hr/>
          <p className='tableAddRoundTripFontSize'>2:35</p>
        </div>
        </td>
        <td>
        <div>
          <p className='tableAddRoundTripFontSize' >45</p>
          <hr/>
          <p className='tableAddRoundTripFontSize'>45</p>
        </div>
        </td>
        <td>
        <div>
          <p className='tableAddRoundTripFontSize'>Sundays</p>
          <hr/>
          <p className='tableAddRoundTripFontSize'>Sundays</p>
        </div>
        </td>

        <td className='tableAddRoundTripFontSize'>
     Dayes= 5
        </td>
    </tr>
    
   
  </tbody>
</table>
   </div>
</div>

<div className='d-flex justify-content-center align-items-center'>
  <h4>Total Price :</h4>
  <input className='text-center rounded ms-3' style={{width:"60px",height:"30px",backgroundColor:COLORS.blue}} type="number" />

</div>
  

<div className='  d-flex justify-content-center align-items-center' style={{margin:25}}>
      <button style={{marginRight:40,backgroundColor:COLORS.purple}}  type="button" className="btn btn-secondary">Add</button>
        <button style={{marginLeft:40,backgroundColor:COLORS.purple}}  type="button" className="btn btn-secondary">Cancel</button>  
      </div>


    </div>
  )
}

export default AddRoundTrip
