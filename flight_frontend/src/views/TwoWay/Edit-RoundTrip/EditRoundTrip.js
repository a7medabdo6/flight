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
import { CreateTwoWayApi } from 'Hook/SeatTwoWay/Create-TwoWay-Hook';
import { useSelector } from 'react-redux';
import { GetSeatHook } from 'Hook/Seat/Get-Seat-Hook';
import { EditeTowWayApi } from 'Hook/SeatTwoWay/Edit-TowWay-Hook';
const EditRoundTrip = ({handelCloseEdit,customEditData}) => {
console.log(customEditData);
  
const {isLoading,mutate:SubmitEditeTowWay,isError,error,data:EditeTowWaydata} =  EditeTowWayApi()
const {EditeTowWayData} = useSelector(state => state.EditeTowWayRedux)
  const [NoDayes,setNoDayes]=useState()
const [check,setcheck]=useState(false)
const [DataFlightOne,setDataFlightOne]=useState(customEditData?.seat)
const [DataFlightTwo,setDataFlightTwo]=useState(customEditData?.secondseat)
console.log(DataFlightOne);
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
  const [ShowTable,setShowTable]=useState(false)
    const [count,setcount]=useState(0)
    const increase = ()=>{
  setcount(count + 1)
    }
    const Descrease = ()=>{
      setcount(count - 1)
        }
        const {data}=GetSeatHook()

        const {GetSeatData} =useSelector(state => state.GetSeatRedux)
        console.log(GetSeatData);


        const {mutate:SubmitCreateTwoWay,data:DataCreat} =  CreateTwoWayApi()
        const {CreateTwoWayData,error:ERROR} = useSelector(state => state.CreateTwoWayRedux)
const [Dayes,setDayes]=useState()
const [flietNumOne,setflietNumOne]=useState()
const [flietNumTwo,setflietNumTwo]=useState()
const [priceOne,setpriceOne]=useState(customEditData?.seat?.seat_price_enduser)
const [priceTwo,setpriceTwo]=useState(customEditData?.secondseat?.seat_price_enduser)
const [TotalPrice,setTotalPrice]=useState()
console.log(flietNumOne);

console.log(TotalPrice);

const HnadelChangeDayes =(e)=>{
  setDayes(e.target.value)
}
const HandelCalculate=()=>{
 let SupPrice = +priceOne + +priceTwo
 console.log(SupPrice);
 if(NoDayes === "Less"){
  if(Dayes <= 5){
    setTotalPrice(SupPrice - count)

  }
 }

 if(NoDayes === "Gerater"){
  if(Dayes > 5){
    setTotalPrice(SupPrice - count)

  }
 }
}
    
useEffect(()=>{
  if(TotalPrice){
    setShowTable(true)
  }
},[TotalPrice])
console.log(flietNumOne);
        const handelflietNumOne=(e)=>{
          const item =GetSeatData?.filter((item)=>{return(
            item.flight_number === e.target.value
     )})
     
          setflietNumOne(item[0].id)
          setpriceOne(item[0].seat_price_enduser)
          setDataFlightOne(item[0])

        }
        
        const handelflietNumTwo=(e)=>{
          const item =GetSeatData?.filter((item)=>{return(
            item.flight_number === e.target.value
     )})
     
     setflietNumTwo(item[0].id)
     setpriceTwo(item[0].seat_price_enduser)
     setDataFlightTwo(item[0])

        }
       
    const    handelSave=()=>{
      const formdata={
        
        data:{
          "price": TotalPrice.toString(),

        },
        idapi:customEditData?.id
          
        
      }
      SubmitEditeTowWay(formdata)

        }

        useEffect(()=>{
          if(EditeTowWaydata){
            handelCloseEdit()

          }
        },[EditeTowWaydata])
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center '>
      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center ' style={{marginRight:"14px"}}>
          <h5>AMM
- IST </h5>
          <h5>Price</h5>
        </div>
        <div className='d-flex justify-content-between align-items-center' >
        <input onChange={(e)=>{return(handelflietNumOne(e))}} value={customEditData?.seat?.flight_number} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="10" aria-label="default input example"/>

        {/* <select onChange={(e)=>{return(handelflietNumOne(e))}} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {
            GetSeatData?.map((item,index)=>{return(
              <option key={index}  value={item?.flight_number}>{item?.flight_number}</option>

            )})
          }
        </select> */}
        {/* <input style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Flight No." aria-label="default input example"/> */}
         <h6 className='m-3 rounded text-center d-flex justify-content-center align-items-center ' style={{backgroundColor:"#D6DCE5",color:"white",width:'65px',height:"30px"}}>{priceOne}</h6>
        </div>

      </div>


      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center ' style={{marginRight:"14px"}}>
          <h5>IST-AMM</h5>
          <h5>Price</h5>
        </div>
        <div className='d-flex justify-content-between align-items-center' >
        <input onChange={(e)=>{return(handelflietNumTwo(e))}} value={customEditData?.second?.flight_number} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="10" aria-label="default input example"/>

        {/* <select onChange={(e)=>{return(handelflietNumTwo(e))}} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {
            GetSeatData?.map((item,index)=>{return(
              <option key={index}   value={item?.flight_number}>{item?.flight_number}</option>

            )})
          }
        </select>    */}
              <h6 className='m-3 rounded text-center d-flex justify-content-center align-items-center ' style={{backgroundColor:"#D6DCE5",color:"white",width:'65px',height:"30px"}}>{priceTwo}</h6>
        </div>

      </div>
     </div>
<div className='d-flex justify-content-center align-items-center flex-column my-5'>
    <div className='d-flex justify-content-around align-items-center flex-row-reverse w-100'>
    <div className='' >
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <p className='text-nowrap'>Increase / descrease Price</p>
      </div>
      <div className='d-flex justify-content-end align-items-center mb-2 ' style={{marginRight:"32px"}}>
      <button onClick={increase} type="button" className="btn btn-secondary">+</button>
        <p className='d-flex justify-content-center align-items-center rounded ' style={{padding:20,backgroundColor:COLORS.blue,margin:0,height:"35px"}}>{count}</p>
        <button onClick={Descrease} type="button" className="btn btn-secondary">-</button>  
      </div>
     </div>
     <div style={{marginBottom:"10px"}} className=' d-flex justify-content-center align-items-center flex-column'>
        <p className='text-nowrap'>Enter Dayes:</p>
        <div className=' d-flex justify-content-center align-items-center '>
        <input className='text-center rounded textinputround' onChange={HnadelChangeDayes} style={{backgroundColor:"#D6DCE5"}} type="number" />
        {
          check === true ? (
            <div className=' d-flex justify-content-center align-items-center '>
            <p style={{margin:15}}>To</p>
            <input className='text-center rounded textinputround' style={{backgroundColor:"#D6DCE5"}} type="number" />
            </div>
          ):null
        }
      
        </div>
       

     </div>

     <div style={{marginBottom:"10px"}} className=' d-flex justify-content-center align-items-center flex-column'>
        <p>No Of Dayes:</p>
        <select style={{backgroundColor:COLORS.blue}} onChange={handelNoDayes} className="form-select" aria-label="Default select example">
        <option selected disabled value="1">select </option>

          <option  value="Less">Less Or Equal</option>
          <option value="FromTo">From - To</option>
          <option value="Gerater">Gerater Or Equal</option>
          
        </select>
     </div>
    </div>
    <div className='w-100 d-flex  align-items-center flex-row-reverse'>
    <button onClick={HandelCalculate} style={{backgroundColor:COLORS.purple,marginBottom:"10px",marginRight:"105px"}}  type="button" className="btn btn-secondary">Calculate</button>  

    </div>


</div>
   
   {
    ShowTable === true ? (<div>
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
          <th scope="col" className='tableAddRoundTripFontSize'>Arr.Time</th>
          <th scope="col" className='tableAddRoundTripFontSize'>Duration</th>
          <th scope="col" className='tableAddRoundTripFontSize'>Weight</th>
          <th scope="col" className='tableAddRoundTripFontSize'>Supplires</th>
          <th scope="col" className='tableAddRoundTripFontSize'>NO Of Dayes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='tableAddRoundTripFontSize' >AMM-IST-AMM</td>
          <td className='tableAddRoundTripFontSize'><div>
              <p className='tableAddRoundTripFontSize'>{DataFlightOne?.airlines}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize'>{DataFlightTwo?.airlines}</p>
            </div></td>
          <td>
            <div>
              <p className='tableAddRoundTripFontSize'>{DataFlightOne?.flight_number}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize'>{DataFlightTwo?.flight_number}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize'>{DataFlightOne?.departure_airport}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize'>{DataFlightTwo?.departure_airport}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize'>{DataFlightOne?.arrival_airport}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize'>{DataFlightTwo?.arrival_airport}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize'>{DataFlightOne?.departure_time}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize'>{DataFlightTwo?.departure_time}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize'>{DataFlightOne?.arrival_time}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize'>{DataFlightTwo?.arrival_time}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize'>{DataFlightOne?.duration}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize'>{DataFlightTwo?.duration}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize' >{DataFlightOne?.weight}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize'>{DataFlightTwo?.weight}</p>
            </div>
            </td>
            <td>
            <div>
              <p className='tableAddRoundTripFontSize'>{DataFlightOne?.suppliers}</p>
              <hr/>
              <p className='tableAddRoundTripFontSize'>{DataFlightTwo?.suppliers}</p>
            </div>
            </td>
    
            <td className='tableAddRoundTripFontSize'>
         Dayes= {Dayes}
            </td>
        </tr>
        
       
      </tbody>
    </table>
       </div>
    </div>):null
   }

{
  ShowTable === true ? (
    <div className='d-flex justify-content-center align-items-center'>
  <h4>Total Price :</h4>
  <input disabled value={TotalPrice} className='text-center rounded ms-3' style={{width:"60px",height:"30px",backgroundColor:COLORS.blue}} type="number" />

</div>
  ):null
}

  

<div className='  d-flex justify-content-center align-items-center' style={{margin:25}}>
      <button style={{marginRight:40,backgroundColor:COLORS.purple}} onClick={handelSave} type="button" className="btn btn-secondary">Edit</button>
        <button style={{marginLeft:40,backgroundColor:COLORS.purple}} onClick={handelCloseEdit}  type="button" className="btn btn-secondary">Cancel</button>  
      </div>


    </div>
  )
}

export default EditRoundTrip
