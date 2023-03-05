import { AssignmentReturnedRounded } from '@material-ui/icons'
import { GetcountryNavBarHook } from 'Hook/Country/Get-Country-NavBar-Hook'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Countries() {
  const id =JSON.parse(localStorage.getItem('user'))?.id ;
  console.log(id);
  const {data}= GetcountryNavBarHook(id)
console.log(data,"55555");
   const {GetcountryNavBarData}= useSelector(state=>state.GetcountryNavBarRedux)
   
   const navCountry = GetcountryNavBarData?.country
   const [countryNavBar,setcountryNavBar]=useState()
useEffect(()=>{
  if(GetcountryNavBarData){
    localStorage.setItem("navbarcountry",JSON.stringify(navCountry))
    const navdata =JSON.parse(localStorage.getItem("navbarcountry"))
    setcountryNavBar(navdata)
       console.log(countryNavBar);
  }
},[GetcountryNavBarData])


   const [Countries, setCountries] = useState([])
   var arr=[]
   useEffect(() => {
    console.log(GetcountryNavBarData,"GetCountriesData")
        if(countryNavBar?.length>0){
        for (let index = 0; index < countryNavBar?.length; index++) {
            if(countryNavBar[index]){
            for(let i = 0; i < countryNavBar[i]?.city?.length; i++){
              let country =countryNavBar[index]?.name

              let city = countryNavBar[index]?.city[i]?.name
              arr.push({
                  title: country,
                  href: '/Seats',
                  children: [
                      { title: city,
                     href: '/Seats',
                    
                   }
                     ]
                  
                })
            }
           
            }
           
           

            
        }
        console.log(arr,"countriessssssssss")
        return arr
       
    }
   
     return () => {
       
     }
   }, [countryNavBar])
   
  return (
    
        arr
       
      
  )
}

export default Countries
