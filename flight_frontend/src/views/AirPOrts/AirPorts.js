import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { COLORS } from 'utils/COLORS.';
import { GetFlightHook } from 'Hook/Flight/Get-Countries-Hook';
import { useSelector } from 'react-redux';
import notify from 'utils/useNotifaction';
import { GetdapartureHook } from 'Hook/daparture-airport/Get-daparture-Hook';
import { CreatedapartureApi } from 'Hook/daparture-airport/Create-daparture-Hook';
import { GetCityHook } from 'Hook/City/Get-City-Hook';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementList = () => {


  const classes = useStyles();

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchCustomers = () => {
      axios.get('/api/management/customers').then(response => {
        if (mounted) {
          setCustomers(response.data.customers);
        }
      });
    };

    fetchCustomers();

    return () => {
      mounted = false;
    };
  }, []);

  const handleFilter = () => {};
  const handleSearch = () => {};
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

console.log(show);
 
  const {data:GetData}=GetdapartureHook()

  const {GetdapartureData} =useSelector(state => state.GetdapartureRedux)
  console.log(GetdapartureData);

  const [name,setname]=useState()
  const Hanadelname =(e)=>{     setname(e.target.value.toUpperCase()) }
  
  const {isLoading,mutate:SubmitCreatedaparture,isError,error:handelerror,data} =  CreatedapartureApi()
  const {CreatedapartureData,error} = useSelector(state => state.CreatedapartureRedux)
  console.log(CreatedapartureData);
  const [city,setcity]=useState()
console.log(city);

  const HandelSave =()=>{

      
      const data ={
          "name": name,
          "city_id":+city

        }
        SubmitCreatedaparture(data)

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

const HanadelCity =(e)=>{  setcity(e.target.value.toUpperCase())  }


const {data:GetDataa}=GetCityHook()

const {GetCityData} =useSelector(state => state.GetCityRedux)
console.log(GetCityData);
 
  return (
    <Page
      className={classes.root}
      title="Customer Management List"
    >

<Modal
        className=''
        size="sm"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Add New AirPort</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column'>

        <input onChange={Hanadelname} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Name" aria-label="default input example"/>

        <select onChange={HanadelCity} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%",marginTop:"20px" }} className="form-select border" aria-label="Default select example">
        <option selected disabled>Open this select menu</option>

            {
                GetCityData?.map((item,index)=>{return(
                 <option value={item?.id}>{item?.name}</option>

                )})
            }


</select>
        <div className='d-flex justify-content-center align-items-center mt-3 '>
        <button type="button" className="btn btn-secondary  px-5 " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}} >Add</button>

        <button type="button" className="btn btn-secondary  px-5" onClick={handleClose}  style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>
        </div>
       

        </div>
        </Modal.Body>
      </Modal>


    
       
      <Header handleShow={handleShow} handleClose={handleClose} />
      {/* <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      /> */}
      {customers && (
        <Results
          className={classes.results}
          customers={customers}
          GetdapartureData={GetdapartureData}
        />
      )}
    </Page>
  );
};

export default CustomerManagementList;
