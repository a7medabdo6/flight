import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { COLORS } from 'utils/COLORS.';
import { GetFlightHook } from 'Hook/Flight/Get-Flight-Hook';
import { useSelector } from 'react-redux';
import { GetsupplierHook } from 'Hook/Suppliers/Get-Supplier-Hook';
import notify from 'utils/useNotifaction';
import { CreatesupplierApi } from 'Hook/Suppliers/Create-Supplier-Hook';
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
 
  const {data:GetData}=GetsupplierHook()

  const {GetsupplierData} =useSelector(state => state.GetsupplierRedux)
  console.log(GetsupplierData);

  const [name,setname]=useState()
  const Hanadelname =(e)=>{     setname(e.target.value.toUpperCase()) }
  
  const {isLoading,mutate:SubmitCreateSupplier,isError,error:handelerror,data} =  CreatesupplierApi()
  const {CreatesupplierData,error} = useSelector(state => state.CreatesupplierRedux)
  console.log(CreatesupplierData);


  const HandelSave =()=>{

      
      const data ={
          "name": name,
          
        }
        SubmitCreateSupplier(data)

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
         <h4 className='ps-5 py-2' style={{color:"white"}}>Add New Supplier</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <input onChange={Hanadelname} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%"}} className="form-control" type="text" placeholder="Name" aria-label="default input example"/>
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
          GetsupplierData={GetsupplierData}
        />
      )}
    </Page>
  );
};

export default CustomerManagementList;
