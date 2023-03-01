import { AssignmentReturnedRounded } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Countries() {
   const {GetCountriesData}= useSelector(state=>state.GetCountriesRedux)
   const [Countries, setCountries] = useState([])
   var arr=[]
   useEffect(() => {
    console.log(GetCountriesData,"GetCountriesData")

    if(GetCountriesData.length>0){
        for (let index = 0; index < GetCountriesData.length; index++) {
            if(GetCountriesData[index]?.country){
             return   arr.push({
                    title: GetCountriesData[index]?.country?.name,
                    href: '/Seats',
                    children: [
                        { title: 'Istanbul',
                       href: '/Seats',
                      
                       children: [
                         {
                           title: 'Jav', 
                           href: '/Seats',
             
                         },
                       ]
                     }
                       ]
                    
                  })
            }
           
           

            
        }
        console.log(arr,"countriessssssssss")

       
    }
   
     return () => {
       
     }
   }, [GetCountriesData])
   
  return (
    
        arr
       
      
  )
}

export default Countries