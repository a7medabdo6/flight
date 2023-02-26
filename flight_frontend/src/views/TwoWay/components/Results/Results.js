import React, { useEffect, useRef, useState } from 'react';
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
import DatePicker from "react-multi-date-picker";

import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';
import Calender from 'views/Seats/AddSeats/Calender';
import { COLORS } from 'utils/COLORS.';
import Edite from 'views/TwoWay/Edite/Edite';
import color from '@material-ui/core/colors/amber';
import AddRoundTrip from 'views/TwoWay/Add-RoundTrip/AddRoundTrip';


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


 


  const [open, setOpen] = useState(false)

  const { className, customers, ...rest } = props;

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
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow])
  const datePickerRef = useRef()
  const [smShow, setSmShow] = useState(false);
  
  const handelshow =() => setSmShow(true)

  const [smShowaDD, setsmShowaDD] = useState(false);
  const handelshowADD =() => setsmShowaDD(true)

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
   
    
<Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{margin:0,padding:0}} >
          <Modal.Title id="example-modal-sizes-title-sm" className='w-100 rounded' style={{margin:"0",backgroundColor:COLORS.purple}}>
            <h5 style={{color:"white"}} className='p-2'>Edite</h5>
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:0}}>
          <Edite />
        </Modal.Body>
      </Modal>


   
    
      <Modal
        size="lg"
        show={smShowaDD}
        onHide={() => setsmShowaDD(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{margin:0,padding:0}} >
          <Modal.Title id="example-modal-sizes-title-sm" className='w-100 rounded' style={{margin:"0",backgroundColor:COLORS.purple}}>
            <h5 style={{color:"white"}} className='p-2'>Add Round</h5>
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:0}}>
          <AddRoundTrip />
        </Modal.Body>
      </Modal>

{/* <DatePicker multiple  value={value} onChange={setValue} autofocus/> */}

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
            <div className='d-flex justify-content-start  flex-column'>
            <h2 style={{marginTop:"0px",marginLeft:"0px"}}>Seats</h2>
            <div className='d-flex justify-content-start align-items-center'>
            <Checkbox color={COLORS.purple}
                      
                       
                      />
              <h5 style={{marginBottom:0 ,marginRight:20}}>Default price = OutBound Flight Price + Return Flight Price</h5>
              <Button
           style={{backgroundColor:COLORS.orange}}
            color="primary"
            variant="contained"
            onClick={handelshow}
          >
          Edite
          </Button>
            </div>
            </div>
           
          }
        />
        <Divider />
        <CardContent className={classes.content} style={{overflow:"auto"}}>
          <PerfectScrollbar style={{overflow:"auto"}} >
            <div className={classes.inner}  >
       

              <Table >
                
                <TableHead style={{backgroundColor:COLORS.purple}}>
                  <TableRow className='shadowBox'>
                   
                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center'>Flight Two Way</TableCell>
                    <TableCell style={{fontSize:"13px",marginRight:"5px",color:"white"}} className='text-center'>AirLines</TableCell>
                    <TableCell style={{fontSize:"13px",marginRight:"5px",color:"white"}} className='text-center'>Flight No.</TableCell>



                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center'>Dep.APT</TableCell>
                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center'>Arr.APT</TableCell>
                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center'>Dep.Time</TableCell>
                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center'>Arr.Time</TableCell>
                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center'>Duration</TableCell>
                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center'>Weight</TableCell>

                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center'>Suppliers</TableCell>
                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center'>No Of Dayes</TableCell>

                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center'>S.price</TableCell>

                    <TableCell style={{fontSize:"13px",color:"white"}} className='text-center' align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.slice(0, rowsPerPage).map(customer => (
                    <TableRow
                      hover
                      key={customer.id}
                      selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >
                     
                      
                      <TableCell className='text-center'>
                        RJ
                      </TableCell>
                      <TableCell className='text-center '>AMM-IST-AMM</TableCell>
                      <TableCell className='text-center'>jav</TableCell>
                      <TableCell className='text-center px-0'><div>
                        <p>R4515</p> 
                        <hr/>
                        <p>R7845</p>
                        </div></TableCell>
                      <TableCell className='text-center px-0'>
                        <div>
                        <p>AMM</p> 
                        <hr/>
                        <p>IST</p>
                        </div>
                        </TableCell>

                      <TableCell className='text-center px-0'>
                      <div>
                        <p>IST</p> 
                        <hr/>
                        <p>AMM</p>
                        </div>
                      </TableCell>


                      <TableCell className='text-center px-0'>
                      <div>
                        <p>17:00</p> 
                        <hr/>
                        <p>19:00</p>
                        </div>
                      </TableCell>
                      <TableCell className='text-center px-0'>
                      <div>
                        <p>19:35</p> 
                        <hr/>
                        <p>12:52</p>
                        </div>
                      </TableCell>
                      <TableCell className='text-center px-0'>
                      <div>
                        <p>46</p> 
                        <hr/>
                        <p>46</p>
                        </div>
                      </TableCell>
                      <TableCell className='text-center px-0'>
                      <div>
                        <p>Sunday</p> 
                        <hr/>
                        <p>Sunday</p>
                        </div>
                      </TableCell>
                      <TableCell className='text-center'>Dayes=10</TableCell>
                      <TableCell className='text-center'>130</TableCell>
                     
                      <TableCell className='text-center' align="right">
                        <div className='d-flex '>
                        <i className="fa-solid fa-trash-can m-1"></i>

                       
                      <i  className="fa-solid fa-pen-to-square m-1"></i>
                     
                        </div>
                        
                        
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        {/* <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={customers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions> */}
      </Card>
      {/* <TableEditBar selected={selectedCustomers} /> */}
      <Button
           style={{backgroundColor:COLORS.orange,marginTop:20}}
            color="primary"
            variant="contained"
            onClick={handelshowADD}
          >
          Add Round Trip
          </Button>
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
