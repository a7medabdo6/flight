import { GetFlightHook } from 'Hook/Flight/Get-Flight-Hook';
import { CreateSeatApi } from 'Hook/Seat/Create-Seat-Hook';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import DatePicker from "react-multi-date-picker";
import { useSelector } from 'react-redux';

const Calender = ({customersData,handelhidesm}) => {

console.log(customersData);

  const [SeatPrice,setSeatPrice]=useState(customersData?.seat_price)
  const [ArrivalDate,setArrivalDate]=useState()
  const [departureDate,setdepartureDate]=useState()
  const [Total,setTotal]=useState(customersData?.total_seat_number)
  const [AVAseates,setAVAseates]=useState(customersData?.available_seats)
  const [departure_airport,setdeparture_airport]=useState(customersData?.departure_airport)
  const [arrival_airport,setarrival_airport]=useState(customersData?.arrival_airport)
  const [departure_time,setdeparture_time]=useState(customersData?.departure_time)
  const [arrival_time,setarrival_time]=useState(customersData?.arrival_time)
  const [duration,setduration]=useState(customersData?.duration)
  const [weight,setweight]=useState(customersData?.weight)
  const [suppliers,setsuppliers]=useState(customersData?.suppliers)
  const [airlines,setairlines]=useState(customersData?.airlines)
  const [FlightNumber,setFlightNumber]=useState(customersData?.flight_number)
  const [id,setid]=useState(customersData?.id)
console.log(FlightNumber);
  const [FlightItem,setFlightItem]=useState()
    const today = new Date()
    const tomorrow = new Date()
  
    tomorrow.setDate(tomorrow.getDate() + 1)
  
    const [values, setValues] = useState([today])
    console.log(values.length);
    const datePickerRef = useRef()
    const shwCalnder= () => datePickerRef.current.openCalendar()
    useEffect(()=>{
        shwCalnder()
    },[])
    const {isLoading,mutate:SubmitCreateseat,isError,error,data:CreateSeatdata} =  CreateSeatApi()
    const {CreateSeatData} = useSelector(state => state.CreateSeatRedux)


    const {data}=GetFlightHook()
    const [flighId,setFlightId] =useState()
      const {GetFlightData} =useSelector(state => state.GetFlightRedux)
const [rusult,setrusult]=useState()
useEffect(()=>{
  if(GetFlightData){
    setrusult(GetFlightData?.filter(item => item?.flight_number === customersData?.flight_number))

  }
},[GetFlightData])
console.log(rusult);
      useEffect(()=>{
        if(rusult){
setFlightId(rusult[0]?.id)
        }

      },[rusult])
      console.log(flighId);
    const HandelSave =()=>{
      const data =[
       
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
          "flightId":flighId
    }
      ]
      values.map((item)=>{
        return(SubmitCreateseat(data))
      })
     

    }

    useEffect(()=>{
      if(CreateSeatdata){
        handelhidesm()
      }
    },[CreateSeatdata])
  return (
    <div className="w-100 d-flex justify-content-start align-items-center flex-column  " style={{height:"400px"}}>
 
    <DatePicker 
    multiple
   
    value={values} 
    onChange={setValues}
      ref={datePickerRef} 
      inputClass="custom-input"
      style={{
       paddingTop:"-60px",
        paddingRight: "65px"
      }}
      
    >
      
    </DatePicker>

    <div className='d-flex justify-content-center align-items-center'>
        <button onClick={HandelSave}  type="button" className="btn btn-secondary me-2" style={{marginTop:"300px"}} >Add</button>

        <button type="button" onClick={handelhidesm} className="btn btn-secondary  " style={{marginTop:"300px"}}>Cancel</button>

        </div>
   </div>
  )
}

export default Calender