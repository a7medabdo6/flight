import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
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
import { DeletFlightApi } from 'Hook/Flight/Delet-Flight-Hook';
import { useSelector } from 'react-redux';
import EditeFlight from 'views/Flights/EditeFlight/EditeFlight';
import { useEffect } from 'react';

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

const Results = props => {
  const { className,GetFlightData, customers, ...rest } = props;

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
  const {isLoading,mutate:SubmitDeletFlight,isError,error,data} =  DeletFlightApi()
  const {DeletFlightData} = useSelector(state => state.DeletFlightRedux)
const HandelDelet=(id)=>{
  SubmitDeletFlight(id)
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

const [itemData,setitemData]=useState()


  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

<Modal
        className=''
        size="lg"
        show={showEdite}
        onHide={handleCloseEdite}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header style={{padding:"0px"}} >
          <Modal.Title id="example-modal-sizes-title-lg" className='rounded-top ' style={{backgroundColor:COLORS.purple,width:"100%"}}>
         <h4 className='ps-5 py-2' style={{color:"white"}}>Edite Flight</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <EditeFlight id={id} handleCloseEdite={handleCloseEdite} customerData={customerData}/>
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
        <div className='d-flex justify-content-center align-items-center'>
        <button type="button" className="btn btn-secondary  px-5 " onClick={()=>HandelDelet(id)} style={{backgroundColor:COLORS.purple,color:"white"}} >Delete</button>

        <button type="button" className="btn btn-secondary  px-5" onClick={handleClose} style={{backgroundColor:COLORS.purple,color:"white"}}>Cancel</button>

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
            <h2 style={{marginTop:"0px",marginLeft:"0px"}}>Flight</h2>
          }
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar style={{overflow:"auto"}}>
            <div className={classes.inner}  >
              <Table >
                <TableHead style={{backgroundColor:COLORS.purple}}>
                  <TableRow className='shadowBox'>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomers.length === customers.length}
                        style={{color:"white"}}
                        indeterminate={
                          selectedCustomers.length > 0 &&
                          selectedCustomers.length < customers.length
                        }
                       
                      />
                    </TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className="text-center">Country</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>City</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>AirLines</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>Flight No.</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>Dep.APT</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>Arr.APT</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>Dep.Time</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>Arr.Time</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>Duration</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center'>Weight</TableCell>
                    <TableCell style={{fontSize:"15px",color:"white"}} className='text-center' align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {GetFlightData?.map(customer => (
                    <TableRow
                      hover
                      key={customer.id}
                      selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >
                      <TableCell className='text-center' padding="checkbox">

                        <Checkbox
                        
                          color="primary"
                          onChange={(e) => {return(setitemData(customer))}  }
                          value={itemData}
                        />
                      </TableCell>
                      <TableCell className='text-center'>
                      {customer?.country}
                      </TableCell>
                      <TableCell className='text-center'>{customer?.city}</TableCell>
                      <TableCell className='text-center'>
                      {customer?.airlines}
                      </TableCell>
                      <TableCell className='text-center'>{customer?.flight_number}</TableCell>
                      <TableCell className='text-center'>{customer?.departure_airport}</TableCell>
                      <TableCell className='text-center'>
                      {customer?.arrival_airport}
                      </TableCell>


                      <TableCell className='text-center'>{customer?.departure_time}</TableCell>
                      <TableCell className='text-center'>{customer?.arrival_time}</TableCell>
                      <TableCell className='text-center'>{customer?.duration}</TableCell>
                      <TableCell className='text-center'>{customer?.weight}</TableCell>
                      <TableCell className='text-center' align="right">
                        
                        <i onClick={()=>{return(setid(customer?.id),handleShow())}} className="fa-solid fa-trash-can m-1"></i>

                        
                        <i  onClick={()=>{return(setid(customer?.id),setCustomerData(customer),handleShowEdite())}} className="fa-solid fa-pen-to-square m-1"></i>

                        
                      </TableCell>
                    </TableRow>
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