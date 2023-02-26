import { CreateFlightApi } from 'Hook/Flight/Create-Flight-Hook'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { COLORS } from 'utils/COLORS.'
import notify from 'utils/useNotifaction'
import AddFlightCard from './AddFlightCard'
import { ToastContainer } from 'react-toastify'

const AddFlight = ({handleClose,isSuccses,setisSuccses}) => {
    const [country,setcountry]=useState()
    const [city,setcity]=useState()
    const [airlines,setairlines]=useState()
    const [flight_number,setflight_number]=useState()
    const [departure_airport,setdeparture_airport]=useState()
    const [arrival_airport,setarrival_airport]=useState()
    const [departure_time,setdeparture_time]=useState()
    const [arrival_time,setarrival_time]=useState()
    const [duration,setduration]=useState()
    const [weight,setweight]=useState()
console.log(country);

    const HanadelCountry =(e)=>{     setcountry(e.target.value.toUpperCase()) }
    const HanadelCity =(e)=>{  setcity(e.target.value.toUpperCase())  }
    const Hanadelairlines =(e)=>{    setairlines(e.target.value.toUpperCase())    }
    const Hanadelflight_number =(e)=>{     setflight_number(e.target.value.toUpperCase())  }
    const Hanadeldeparture_airport =(e)=>{   setdeparture_airport(e.target.value.toUpperCase()) }
    const Hanadelarrival_airport =(e)=>{    setarrival_airport(e.target.value.toUpperCase())  }
    const Hanadeldeparture_time =(e)=>{    setdeparture_time(e.target.value) }
    const Hanadelarrival_time =(e)=>{  setarrival_time(e.target.value)  }
    const Hanadelduration =(e)=>{setduration(e.target.value)}     
    const Hanadelweight =(e)=>{   setweight(e.target.value)  }


    const {isLoading,mutate:SubmitCreateFlight,isError,error:handelerror,data} =  CreateFlightApi()
    const {CreateFlightData,error} = useSelector(state => state.CreateFlightRedux)
    console.log(CreateFlightData);


    const HandelSave =()=>{

        
        const data ={
            "country": country,
            "city": city,
            "airlines": airlines,
            "flight_number": flight_number,
            "departure_airport": departure_airport,
            "arrival_airport": arrival_airport,
            "departure_time": departure_time,
            "arrival_time": arrival_time,
            "duration": duration,
            "weight": weight
          }
          SubmitCreateFlight(data)

    }

console.log(data);
    useEffect(()=>{
        if(error){
            if(error !== [] )
        error.map((item)=>{return(
            notify(item,"error")
        )})
    
        }
    },[error])

useEffect(()=>{
    if(data){
        handleClose() 
    }
},[data])
    const items = {
        itemsCountry:( <>
            <select style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%" }} className="form-select border" aria-label="Default select example">

            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </>)
           
        
    }
    const Inputs={
        InputCity:( <>
            <input onChange={HanadelCity}  style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="City" aria-label="default input example"/>

        </>),
       
        InputAirlines:( <>
            <input onChange={Hanadelairlines} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Airlines" aria-label="default input example"/>

        </>),
        InputDeparture_Airport:( <>
            <input onChange={Hanadeldeparture_airport} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Departure Airport" aria-label="default input example"/>

        </>),
        InputArrival_Airport:( <>
            <input onChange={Hanadelarrival_airport} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Arrival_Airport" aria-label="default input example"/>

        </>),
        InputCountry:( <>
            <input onChange={HanadelCountry} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Country" aria-label="default input example"/>

        </>),
        InputWight:( <>
            <input onChange={Hanadelweight} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="number" placeholder="Wight" aria-label="default input example"/>

        </>),
         InputFightNumber:( <>
            <input onChange={Hanadelflight_number} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Fight No." aria-label="default input example"/>

        </>),
        InputArrivalTime:( <>
            <input onChange={Hanadelarrival_time} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Arrival Time" aria-label="default input example"/>

        </>),
        InputDepatureTime:( <>
            <input onChange={Hanadeldeparture_time} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Depature Time" aria-label="default input example"/>

        </>),
        InputDurationTime:( <>
            <input onChange={Hanadelduration} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="time" placeholder="Duration" aria-label="default input example"/>

        </>),
    }
  return (
    <div >
        <div className='d-flex justify-content-around align-items-center'>
        <div>
           <AddFlightCard title="Country" Chosing={Inputs.InputCountry} />
           <AddFlightCard title="Airlines" Chosing={Inputs.InputAirlines}/>
           <AddFlightCard title="Departure Airport" Chosing={Inputs.InputDeparture_Airport}/>
           <AddFlightCard title="Departure Time" Chosing={Inputs.InputDepatureTime}/>
           <AddFlightCard title="Duration" Chosing={Inputs.InputDurationTime}/>
        </div>

        <div>
           <AddFlightCard title="City" Chosing={Inputs.InputCity}/>
           <AddFlightCard title="Flight Number" Chosing={Inputs.InputFightNumber}/>
           <AddFlightCard title="Arrival Airport" Chosing={Inputs.InputArrival_Airport}/>
           <AddFlightCard title="Arrival Time" Chosing={Inputs.InputArrivalTime}/>
           <AddFlightCard title="Wight" Chosing={Inputs.InputWight}/>
        </div>
        </div>
       

        <div className='d-flex justify-content-center align-items-center'>
        <button type="button" className="btn btn-secondary m-5 px-5 " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}} >Add</button>

        <button type="button" className="btn btn-secondary m-5 px-5" onClick={handleClose} style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>

        </div>
        <ToastContainer></ToastContainer>

    </div>
  )
}

export default AddFlight
