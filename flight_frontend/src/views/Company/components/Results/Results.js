import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, withStyles } from '@material-ui/styles';
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
import Modal from 'react-bootstrap/Modal';
import { ToastContainer } from 'react-toastify'


import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';
import { COLORS } from 'utils/COLORS.';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DeletsupplierApi } from 'Hook/Suppliers/Delet-Supplier-Hook';
import { EditesupplierApi } from 'Hook/Suppliers/Edite-Supplier-Hook';
import notify from 'utils/useNotifaction';

import { GetcountryHook } from 'Hook/Country/Get-Country-Hook';
import { DeletflightCompanyApi } from 'Hook/Company/Delet-Company-Hook';
import { EditeflightCompanyApi } from 'Hook/Company/Edite-Company-Hook';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700,
    

  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "white",
    },
    '&:nth-of-type(even)': {
      backgroundColor: "#E3E3E3",
    },
  },
}))(TableRow);
const Results = props => {
  const { className,GetflightCompanyData,handleShowadd, customers, ...rest } = props;

  const classes = useStyles();

  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = event => {
    const selectedCustomers = event.target.checked
      ? customers.map(customer => customer.id)
      : [];

    setSelectedCustomers(selectedCustomers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomers.indexOf(id);
    let newSelectedCustomers = [];

    if (selectedIndex === -1) {
      newSelectedCustomers = newSelectedCustomers.concat(selectedCustomers, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(1)
      );
    } else if (selectedIndex === selectedCustomers.length - 1) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, selectedIndex),
        selectedCustomers.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomers(newSelectedCustomers);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [id,setid]=useState()
console.log(id);
  const {isLoading,mutate:SubmitDeletflightCompany,isError,error,data} =  DeletflightCompanyApi()
  const {DeletflightCompanyData} = useSelector(state => state.DeletflightCompanyRedux)
const HandelDelet=(id)=>{
  SubmitDeletflightCompany(id)
}
useEffect(()=>{
  if(data){
    handleClose()
  }
},[data])
const[customerData,setCustomerData] =useState()
const [showEdite, setShowEdite] = useState(false);
console.log(showEdite);
  const handleCloseEdite = () => setShowEdite(false);
  const handleShowEdite = () =>{ return (setShowEdite(true))}


  /**------------------------------------------------ */


  const [name,setname]=useState()
  const Hanadelname =(e)=>{     setname(e.target.value.toUpperCase()) }
  
  const {mutate:SubmitEditeflightCompany,data:DATAEDITE} =  EditeflightCompanyApi()
  const {EditeflightCompanyData,error:ERROR} = useSelector(state => state.EditeflightCompanyRedux)
  console.log(EditeflightCompanyData);

  const {data:GetData}=GetcountryHook()

  const {GetcountryData} =useSelector(state => state.GetcountryRedux)
  console.log(GetcountryData);
  
  const [logo,setlogo]=useState()
  const handelChangeLogo =(e)=>{
    if(e.target.files && e.target.files[0]){


    
      setlogo(e.target.files[0])
  }
}

const HandelSave =()=>{
  const formdata = new FormData();
  formdata.append("logo",logo)
  formdata.append("name",name)
  const ID =id

const FORMDATA = {
 data:formdata,
 id:id
}
    
  
SubmitEditeflightCompany(FORMDATA)

}

console.log(data);
  useEffect(()=>{
      if(ERROR){
          if(ERROR !== [] )
          ERROR.map((item)=>{return(
          notify(item,"error")
      )})
  
      }
  },[ERROR])

useEffect(()=>{
  if(DATAEDITE){
    handleCloseEdite() 
  }
},[DATAEDITE])



  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

<Modal
        className=''
        size="sm"
        show={showEdite}
        onHide={handleCloseEdite}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Edite Company</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column'>
        <input onChange={handelChangeLogo} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%",marginTop:"15px"}} className="form-control" type="file" placeholder="Name" aria-label="default input example"/>

        <input onChange={Hanadelname} style={{borderRadius:"10px", backgroundColor:COLORS.blue,width:"100%",marginTop:"15px"}} className="form-control" type="text" placeholder="Name" aria-label="default input example"/>
        <div className='d-flex justify-content-center align-items-center mt-3 '>
        <button type="button" className="btn btn-secondary  px-5 " onClick={HandelSave} style={{backgroundColor:COLORS.purple,color:"white"}} >Edite</button>

        <button type="button" className="btn btn-secondary  px-5" onClick={handleCloseEdite}  style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>
        </div>
       

        </div>
        </Modal.Body>
      </Modal>


<Modal
        className=''
        size="sm"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Alert</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-center align-items-center flex-column '>
          <h4 className='d-flex justify-content-center align-items-center'>Are you sure you want to delete the  Company ?</h4>
          <div className='d-flex justify-content-center align-items-center mt-3'>
        <button type="button" className="btn btn-secondary  m-2 " onClick={()=>HandelDelet(id)} style={{backgroundColor:COLORS.purple,color:"white"}} >Delete</button>

        <button type="button" className="btn btn-secondary  m-2" onClick={handleClose} style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>

        </div>
        </div>

        
        </Modal.Body>
      </Modal>
      {/* <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {customers.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(customers.length / rowsPerPage)}
      </Typography> */}
      <Card style={{fontSize:"50px"}}>
        
        <CardHeader
        
        // style={{margin:"0px",padding:0}}
        // avatar={
        //   <img 
        //   style={{height:"100px",width:"200px"}}
        // src='/images/logos/Dark.png'
        // />
        // }
          action={<GenericMoreButton />}
          title={
            <div className='d-flex justify-content-between align-items-center' >
                          <h2 style={{marginTop:"0px",marginLeft:"0px"}}>Flight Company</h2>

                <Button
          style={{backgroundColor:COLORS.orange}}
          onClick={handleShowadd}
          color="primary"
            variant="contained"
          >
          Add New Company
          </Button>
            </div>
          }
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar style={{overflow:"auto"}}>
            <div className={classes.inner}  >
              <Table >
                <TableHead style={{backgroundColor:COLORS.purple}}>
                  <TableRow className='shadowBox'>
                  <TableCell style={{fontSize:"15px",color:"white"}} className="text-center">lOGO</TableCell>

                    <TableCell style={{fontSize:"15px",color:"white"}} className="text-center">Name</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>Created At</TableCell>
                 
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center' align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {GetflightCompanyData?.map(customer => (
                    <StyledTableRow
                      hover
                      key={customer.id}
                      selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >
                       <TableCell className='text-center'>
                        <div>
                          <img style={{width:"50px",height:"50px"}} src="/images/logos/orange.png" alt="logo"/>
                        </div>
                      </TableCell>
                      <TableCell className='text-center'>
                      {customer?.name}
                      </TableCell>
                     
                      <TableCell className='text-center'>
                      {customer?.created_at}
                      </TableCell>
                      
                      <TableCell className='text-center' align="right">
                        
                        <i onClick={()=>{return(setid(customer?.id),handleShow())}} className="fa-solid fa-trash-can m-1"></i>

                        
                        <i  onClick={()=>{return(setid(customer?.id),setCustomerData(customer),handleShowEdite())}} className="fa-solid fa-pen-to-square m-1"></i>

                        
                      </TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={customers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedCustomers} />
      <ToastContainer></ToastContainer>

    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

Results.defaultProps = {
  customers: []
};

export default Results;
