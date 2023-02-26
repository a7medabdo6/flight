import { GetFlightHook } from 'Hook/Flight/Get-Flight-Hook'
import { GetOneFlightHook } from 'Hook/Flight/Get-One-Flight-Hook'
import { CreateSeatApi } from 'Hook/Seat/Create-Seat-Hook'
import { GetsupplierHook } from 'Hook/Suppliers/Get-Supplier-Hook'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BUTTONS } from 'utils/BUTTONS'
import { COLORS } from 'utils/COLORS.'
import AddSeatsCard from './AddSeatsCard'

const AddSeats = ({handleClose}) => {


    const {data:getFlight}=GetFlightHook()

    const {GetFlightData} =useSelector(state => state.GetFlightRedux)
    console.log(GetFlightData);
    const [FlightNum,setFlightNum]=useState()
    const handelchange=(e)=>{

    
        setFlightNum(GetFlightData?.filter((item)=>{return(
       item.airlines === e.target.value
)}))
    }
const [id,setid]=useState()
console.log(id);
    const handelChange=(e)=>{
      const item =GetFlightData?.filter((item)=>{return(
        item.flight_number === e.target.value
 )})
 console.log(item);
        setid(item[0].id);
    }

    const {data,refetch}=GetOneFlightHook(id)

    const {GetOneFlightData} =useSelector(state => state.GetOneFlightRedux)
   
   

    const [SeatPrice,setSeatPrice]=useState()
    const [ArrivalDate,setArrivalDate]=useState()
    const [departureDate,setdepartureDate]=useState()
    const [Total,setTotal]=useState()
    const [AVAseates,setAVAseates]=useState()
    const [departure_airport,setdeparture_airport]=useState(GetOneFlightData?.departure_airport)
    const [arrival_airport,setarrival_airport]=useState(GetOneFlightData?.arrival_airport)
    const [departure_time,setdeparture_time]=useState(GetOneFlightData?.departure_time)
    const [arrival_time,setarrival_time]=useState(GetOneFlightData?.arrival_time)
    const [duration,setduration]=useState(GetOneFlightData?.duration)
    const [weight,setweight]=useState(GetOneFlightData?.weight)
    const [suppliers,setsuppliers]=useState()
    const [airlines,setairlines]=useState()
    const [FlightNumber,setFlightNumber]=useState()
    const [FlightItem,setFlightItem]=useState()

    console.log(FlightItem);

    useEffect(()=>{
      if(FlightNumber){
        refetch()

      }

    },[FlightNumber])
    
    console.log(id);
    const HandelSeatPrice=(e)=>{
      setSeatPrice(e.target.value)

    }

    const HandelArrivalDate=(e)=>{
      setArrivalDate(e.target.value)

    }

    const HandeldepartureDate=(e)=>{
      setdepartureDate(e.target.value)

    }

    const HandelTotal=(e)=>{
      setTotal(e.target.value)

    }

    const HandelAVAseates=(e)=>{
      setAVAseates(e.target.value)

    }

    const HandelSupliers=(e)=>{
      setsuppliers(e.target.value)
    }

    const HandelAirlines=(e)=>{
      setairlines(e.target.value)
    }


    const HandelFlightNumber=(e)=>{
      setFlightNumber(e.target.value)
    }
    useEffect(()=>{
        if(GetOneFlightData){
            setweight(GetOneFlightData?.weight)
            setduration(GetOneFlightData?.duration)
            setarrival_time(GetOneFlightData?.arrival_time)
            setdeparture_time(GetOneFlightData?.departure_time)
            setarrival_airport(GetOneFlightData?.arrival_airport)
            setdeparture_airport(GetOneFlightData?.departure_airport)
        }
    },[GetOneFlightData])
 

const {data:GetData}=GetsupplierHook()

const {GetsupplierData} =useSelector(state => state.GetsupplierRedux)
    

const {isLoading,mutate:SubmitCreateseat,isError,error,data:CreateSeatdata} =  CreateSeatApi()
const {CreateSeatData} = useSelector(state => state.CreateSeatRedux)
const HandelSave=()=>{
  const data =[
    // {
    //   "airlines": "string 222",
    //   "flight_number": "string",
    //   "departure_airport": "string",
    //   "arrival_airport": "string",
    //   "departure_date": "string",
    //   "arrival_date": "string",
    //   "duration": "string",
    //   "weight": "string",
    //   "total_seat_number": "string",
    //   "available_seats": "string",
    //   "suppliers": "string",
    //   "seat_price": "string",
    //   "flightId":7
      
    // }
    {
    
      "airlines": airlines,
      "flight_number": FlightNumber,
      "departure_airport":departure_airport,
      "arrival_airport": arrival_airport,
      "departure_time": departure_time,
      "arrival_time": arrival_time,
      // "departure_date": departureDate,
      // "arrival_date": ArrivalDate,
      "duration": duration,
      "weight": weight,
      "total_seat_number": Total,
      "available_seats": AVAseates,
      "suppliers": suppliers,
      "seat_price": SeatPrice,
      "flightId":id
}
  ]
  SubmitCreateseat(data)

}

useEffect(()=>{
  if(CreateSeatdata){
    handleClose()
  }
},[CreateSeatdata])

const [item,setitem]=useState()
console.log(item)

    const items = {
        itemsAirLiens:( <>
            <select onChange={(e)=>{return(handelchange(e),HandelAirlines(e))}} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">

            <option selected>Open this select menu</option>
            {
                GetFlightData?.map((item,index)=>{return (
                    <option key={index} value={item.airlines}>{item.airlines}</option>

                )})
            }
            
            </select>
        </>),
     itemsDepartureAirport:( <>
     
     <input value={departure_airport} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="departure airport" aria-label="default input example"/>

               
            </>),
             itemsSuppliears:( <>
              <select onChange={HandelSupliers} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
              <option selected>Open this select menu</option>

               {
                GetsupplierData?.map((item,index)=>{return(
                    <option key={index} value={item?.name}>{item?.name}</option>

                )})
               }
           
              </select>
          </>),
           InputFightNumber:( <>
            <select onChange={(e)=>{return(handelChange(e),HandelFlightNumber(e))}} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">
  
  <option selected>Open this select menu</option>
  {
    FlightNum?.map((item,index)=>{
      
       
      
      return(
        
        <option   key={item.id} value={item.flight_number}>{item.flight_number}</option>

    )})
  }
  </select>

        </>),
        
    }
    const Inputs={
        InputWight:( <>
            <input value={weight} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Wight" aria-label="default input example"/>

        </>),
        
         InputSeatsPrice:( <>
          <input onChange={HandelSeatPrice} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="130" aria-label="default input example"/>

      </>),
         InputAvailableSeatsNumber:( <>
          <input onChange={HandelAVAseates} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="AVA Seats No." aria-label="default input example"/>

      </>),
         InputTotalSeatsNumber:( <>
          <input onChange={HandelTotal} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="10" aria-label="default input example"/>

      </>),
        InputArrivalTime:( <>
            <input value={arrival_time} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Arrival Time" aria-label="default input example"/>

        </>),
          InputArrivalDate:( <>
            <input onChange={HandelArrivalDate} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="date" placeholder="Arrival Date" aria-label="default input example"/>

        </>),
          InputArrivalAirPort:( <>
            <input value={arrival_airport} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Arrival AirPort" aria-label="default input example"/>

        </>),
        InputDepatureDate:( <>
            <input onChange={HandeldepartureDate} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="date" placeholder="Depature Time" aria-label="default input example"/>

        </>),
        
         InputDurationDate:( <>
          <input style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="date" placeholder="Duration" aria-label="default input example"/>

      </>),
        InputDurationTime:( <>
            <input value={duration} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Duration" aria-label="default input example"/>

        </>),
          InputDepatureTime:( <>
            <input value={departure_time} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Duration" aria-label="default input example"/>

        </>),
    }
  return (
    <div >
        <div className='d-flex justify-content-around align-items-center'>
        <div>

           <AddSeatsCard title="Airlines" Chosing={items.itemsAirLiens}/>
           <AddSeatsCard title="Departure Date" Chosing={Inputs.InputDurationDate}/>

           <AddSeatsCard title="Departure Airport" Chosing={items.itemsDepartureAirport}/>
           <AddSeatsCard title="Departure Time" Chosing={Inputs.InputDepatureTime}/>
           <AddSeatsCard title="Duration" Chosing={Inputs.InputDurationTime}/>
           <AddSeatsCard title="Total Seats No." Chosing={Inputs.InputTotalSeatsNumber}/>
           <AddSeatsCard title="Suppliears" Chosing={items.itemsSuppliears}/>
        </div>

        <div>
           <AddSeatsCard title="Flight Number" Chosing={items.InputFightNumber}/>
           <AddSeatsCard title="Arrival Date" Chosing={Inputs.InputArrivalDate}/>

           <AddSeatsCard title="Arrival Airport" Chosing={Inputs.InputArrivalAirPort}/>
           <AddSeatsCard title="Arrival Time" Chosing={Inputs.InputArrivalTime}/>
           <AddSeatsCard title="Wight" Chosing={Inputs.InputWight}/>
           <AddSeatsCard title="Available Seats" Chosing={Inputs.InputAvailableSeatsNumber}/>
           <AddSeatsCard title="Seat Price" Chosing={Inputs.InputSeatsPrice}/>

        </div>
        </div>
       

        <div className='d-flex justify-content-center align-items-center'>
        <button type="button" className="btn btn-secondary m-5 px-5 " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}}>Add</button>

        <button type="button" className="btn btn-secondary m-5 px-5" onClick={ handleClose}  style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>

        </div>
    </div>
  )
}

export default AddSeats