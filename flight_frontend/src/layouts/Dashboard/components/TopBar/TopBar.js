/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Input,
  colors,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import axios from 'utils/axios';
import useRouter from 'utils/useRouter';
import { PricingModal, NotificationsPopover } from 'components';
import { logout } from 'actions';
import { COLORS } from 'utils/COLORS.';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    backgroundColor:"white",
    color:"black",
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit'
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit',
      
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: COLORS.orange,
   
  },
  trialIcon: {
    marginRight: theme.spacing(1),
    
    
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TopBar = props => {
  const { onOpenNavBarMobile, className, ...rest } = props;

  const classes = useStyles();
  const { history } = useRouter();
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const notificationsRef = useRef(null);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [openNotifications, setOpenNotifications] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchNotifications = () => {
      axios.get('/api/account/notifications').then(response => {
        if (mounted) {
          setNotifications(response.data.notifications);
        }
      });
    };

    fetchNotifications();

    return () => {
      mounted = false;
    };
  }, []);
const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
  const handleLogout = () => {
   
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('navbarcountry');

      
      window.location.replace('/');


 
    // dispatch(logout());
  };

  const handlePricingOpen = () => {
    setPricingModalOpen(true);
  };

  const handlePricingClose = () => {
    setPricingModalOpen(false);
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  const handleSearchChange = event => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };

  const popularSearches = [
    'Devias React Dashboard',
    'Devias',
    'Admin Pannel',
    'Project',
    'Pages'
  ];

  const userLogin =JSON.parse(localStorage.getItem('user')) ;

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
    >
      <Toolbar style={{backgroundColor:COLORS.purple}}>
        <RouterLink to="/">
          <img
          style={{height:"110px",width:"170px"}}
            alt="Logo"
            src="/images/logos/orange.png"
          />
        </RouterLink>
        <div className='d-flex justify-content-center align-items-center' style={{marginLeft:"100px"}}>
        <img 
           style={{height:"50px",width:"50px",objectFit: "cover",borderRadius:"50%"}}
          src='/images/logos/PLANE.jpg'/>
          <div style={{marginLeft:"20px"}}>
            <p style={{marginBottom:0,fontSize:"22px"}}>{userLogin?.username}</p>
            <p style={{width:"150px",fontSize:"13px"}}>us-cairo,egypt</p>
          </div>
          
        </div>
        {/* <Button
          style={{backgroundColor:"white",marginLeft:"100px",widows:"100px"}}
          color="black"
            variant="contained"
          >
          {userLogin?.username}
          </Button> */}
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <div
            className={classes.search}
            ref={searchRef}
          >
            <SearchIcon className={classes.searchIcon} />
            <Input
              className={classes.searchInput}
              disableUnderline
              onChange={handleSearchChange}
              placeholder="Search people &amp; places"
              value={searchValue}
            />
          </div>
          <Popper
            anchorEl={searchRef.current}
            className={classes.searchPopper}
            open={openSearchPopover}
            transition
          >
            <ClickAwayListener onClickAway={handleSearchPopverClose}>
              <Paper
                className={classes.searchPopperContent}
                elevation={3}
              >
                <List>
                  {popularSearches.map(search => (
                    <ListItem
                      button
                      key={search}
                      onClick={handleSearchPopverClose}
                    >
                      <ListItemIcon>
                        <SearchIcon />
                      </ListItemIcon>
                      <ListItemText primary={search} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </ClickAwayListener>
          </Popper>
          {/* <Button
            className={classes.trialButton}
            onClick={handlePricingOpen}
            variant="contained"
          >
            <LockIcon className={classes.trialIcon} />
            Trial expired
          </Button> */}
        </Hidden>
        <Hidden mdDown>
          <IconButton
            className={classes.notificationsButton}
            color="inherit"
            onClick={handleNotificationsOpen}
            ref={notificationsRef}
          >
            <Badge
              badgeContent={notifications.length}
              classes={{ badge: classes.notificationsBadge }}
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
            Sign out
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <PricingModal
        onClose={handlePricingClose}
        open={pricingModalOpen}
      />
      <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default TopBar;
