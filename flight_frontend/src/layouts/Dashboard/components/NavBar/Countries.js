import { AssignmentReturnedRounded } from '@material-ui/icons'
import { GetcountryNavBarHook } from 'Hook/Country/Get-Country-NavBar-Hook'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Countries() {
  const id =JSON.parse(localStorage.getItem('user'))?.id ;
  const {data}= GetcountryNavBarHook(id)
   const {GetcountryNavBarData}= useSelector(state=>state.GetcountryNavBarRedux)
   
   const navCountry = GetcountryNavBarData?.country
   const [countryNavBar,setcountryNavBar]=useState()
useEffect(()=>{
  if(GetcountryNavBarData){
    localStorage.setItem("navbarcountry",JSON.stringify(navCountry))
    const navdata =JSON.parse(localStorage.getItem("navbarcountry"))
    setcountryNavBar(navdata)
  }
},[GetcountryNavBarData])


   const [Countries, setCountries] = useState([])
   var arr=[]
   var arrtwoway=[]

   useEffect(() => {
        if(countryNavBar?.length>0){
        for (let index = 0; index < countryNavBar?.length; index++) {
            if(countryNavBar[index]){
              let cityarr=[]

              for(let i = 0; i < countryNavBar[index].city?.length; i++){
                let arrival_airport=[]

                cityarr.push(
                  { title: countryNavBar[index].city[i]?.name,
                    children:arrival_airport,

                  href: `/seats/one-way/${countryNavBar[index].name}/${countryNavBar[index].city[i]?.name}`,
                 
                }
                )



                for(let id = 0; id < countryNavBar[index].city[i]?.flight?.length; id++){

                  arrival_airport.push(
                    { title: ` ${countryNavBar[index].city[i]?.flight[id]?.departure_airport?.name} - ${countryNavBar[index].city[i]?.flight[id]?.arrival_airport}`,
                    href: `/seats/one-way/${countryNavBar[index].name}/${countryNavBar[index].city[i]?.flight[id]?.arrival_airport}`,
                   
                  }
                  )
                }


              }
              arr.push({
                      title: countryNavBar[index].name,
                      href: `/seats/one-way/${countryNavBar[index].name}`,
                      children:cityarr,
                      label:"city"
                      
                    })
            // for(let i = 0; i < countryNavBar[i]?.city?.length; i++){
            //   let country =countryNavBar[index]?.name

            //   let city = countryNavBar[index]?.city[i]?.name
            //   arr.push({
            //       title: country,
            //       href: `/seats/one-way/${country}`,
            //       children: [
            //           { title: city,
            //          href: `/seats/one-way/${country}/${city}`,
                    
            //        }
            //          ]
                  
            //     })
            // }
           
            }
           
           

            
        }
        return arr
       
    }
   
     return () => {
       
     }
   }, [countryNavBar])
   
   useEffect(() => {
        if(countryNavBar?.length>0){
        for (let index = 0; index < countryNavBar?.length; index++) {
            if(countryNavBar[index]){
              let cityarr=[]

              for(let i = 0; i < countryNavBar[index].city?.length; i++){
                let arrival_airport=[]

                cityarr.push(
                  { title: countryNavBar[index].city[i]?.name,
                    children:arrival_airport,

                  href: `/TwoWay/${countryNavBar[index].name}/${countryNavBar[index].city[i]?.name}`,
                 
                }
                )



                for(let id = 0; id < countryNavBar[index].city[i]?.flight?.length; id++){

                  arrival_airport.push(
                    { title: `${countryNavBar[index].city[i]?.flight[id]?.arrival_airport} - ${countryNavBar[index].city[i]?.flight[id]?.departure_airport?.name}`,
                    href: `/TwoWay/${countryNavBar[index].name}/${countryNavBar[index].city[i]?.flight[id]?.arrival_airport}`,
                   
                  }
                  )
                }

              }
              arrtwoway.push({
                      title: countryNavBar[index].name,
                      href: `/TwoWay/${countryNavBar[index].name}`,
                      children:cityarr,
                      label:"city"
                      
                    })
            // for(let i = 0; i < countryNavBar[i]?.city?.length; i++){
            //   let country =countryNavBar[index]?.name

            //   let city = countryNavBar[index]?.city[i]?.name
            //   arr.push({
            //       title: country,
            //       href: `/seats/one-way/${country}`,
            //       children: [
            //           { title: city,
            //          href: `/seats/one-way/${country}/${city}`,
                    
            //        }
            //          ]
                  
            //     })
            // }
           
            }
           
           

            
        }
        return arrtwoway
       
    }
   
     return () => {
       
     }
   }, [countryNavBar])
  return (
    
       { arr,arrtwoway}
       
      
  )
}

export default Countries
