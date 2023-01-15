import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoRemoteWorks from "../assets/images/LogoRemoteWorks.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import { Box, colors, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputBase, Menu, MenuItem, Paper, TextField } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { Form, useNavigate } from "react-router-dom"
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAccountType } from "../hooks/global/accountType";
import ArticleIcon from '@mui/icons-material/Article';
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import { useEffect, useState } from "react";



function Header() {

  const [businessAccount, setBusinessAccount] = useState(false);
  const [employeeAccount, setemployeeAccount] = useState(false);

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);

  };

  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };

  let accountType = getAccountType();

  useEffect(() => {
    if(accountType === 'employee'){
        setBusinessAccount(true);
    } else if (accountType === 'company') {setemployeeAccount(true)}
  
}, []);

  const navigateProfile = () => {
    let accountType = getAccountType();
    if (!accountType) {
      alert("Please sign in to access your profile")
      return navigate("/signin")
    }
    else if (accountType === "employee") { return navigate("/ProfileUser") }
    else if (accountType === "company") { return navigate("/ProfileBusiness") }
  }

  const navigateEditProfile = () => {
    let accountType = getAccountType();
    if (!accountType) {
      alert("Please sign in to edit your profile")
      return navigate("/signin")
    }
    else if (accountType === "employee") return navigate("/EditProfile")
    else if (accountType === "company") return navigate("/EditProfileBusiness")
  }

  const navigateFavorites = () => {
    let accountType = getAccountType();
    if (!accountType) {
      alert("Please sign in to access your favorite postings")
      return navigate("/signin")
    }
    else if (accountType === "company"){
      alert("Please sign in as a employee account to access favorites")
     return navigate("/signin")
    }
    else if (accountType === "employee") return navigate("/Favorites")
  }

  const navigateMyPostings = () => {
    let accountType = getAccountType();
    if (!accountType) {
      alert("Please sign in to access your postings")
      return navigate("/signin")
    }
    else if (accountType === "employee"){
      alert("Please sign in as a business account to access favorites")
     return navigate("/signin")
    }
    else if (accountType === "company") return navigate("/MyPostings")
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const [subscribe, setSubscribe] = React.useState(false);

  const handleClicSubscribe = () => {
    setSubscribe(true);
  };

  const handleCloseSubscribe = () => {
    setSubscribe(false);
  };


  const url = "https://github.us21.list-manage.com/subscribe/post?u=483285ea997522b2afba9707c&amp;id=6c328d5f23&amp;f_id=00aed9e1f0";
  const {loading,error,success,message,handleSubmit} = useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({EMAIL: "",});

  return (
    <AppBar position="fixed">

      <Toolbar sx={{ bgcolor: " rgba(0, 0, 0, 0.5) " }}>
        <img width={80} src={LogoRemoteWorks} alt="" />
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'none', md: 'flex' } }}>
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button onClick={(e) => navigate("/remote-works")} color="inherit">Home</Button>
          <Button color="inherit" onClick={handleClicSubscribe}>
            Subscribe
          </Button>
         
          <Dialog open={subscribe}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to our newlsetter, please enter your email address here. We
                will send updates occasionally.
              </DialogContentText>
              <div>
                <br></br>
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    handleSubmit(fields);
                  }}
                >
                  <input
                    id="EMAIL"
                    autoFocus
                    placeholder="Email Address"
                    type="email"
                    value={fields.EMAIL}
                    onChange={handleFieldChange}
                  />
                  <br></br>
                  <br></br>
                  <button>Submit</button>
                  <button onClick={handleCloseSubscribe}>Cancel</button>
                </form>
                {loading && "submitting"}
                {error && message}
                {success && message}
              </div>
            </DialogContent>
          </Dialog>
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar1"
            aria-haspopup="true"
            onClick={handleMenu2}
            color="inherit">
            <MenuIcon />
          </IconButton>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar1"
            anchorEl={anchorE2}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorE2)}
            onClick={handleClose2}>

            <MenuItem onClick={(e) => navigate("/remote-works")}><HomeIcon /> Home </MenuItem>
            <MenuItem onClick={handleClicSubscribe}><EmailIcon /> Subscribe </MenuItem>
          </Menu>
        </Box>

        <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 300, borderRadius: 5 }}>
          <InputBase sx={{ ml: 1, flex: 1 }} inputProps={{ 'aria-label': 'search' }} />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Button onClick={(e) => navigate("/signup")} color="primary">Sign Up</Button>
        <Button onClick={(e) => navigate("/signin")} color="inherit">Login</Button>

        <Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            <AccountCircleIcon fontSize="large" />
          </IconButton>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClick={handleClose}>
            <MenuItem onClick={(e) => navigateProfile()}><AccountCircleIcon /> Profile </MenuItem>
            <MenuItem onClick={(e) => navigateEditProfile()}><SettingsIcon /> Edit Profile </MenuItem>
            <MenuItem onClick={(e) => navigate("/EditPostingBusiness")}><ArticleIcon /> Edit Postings </MenuItem>
            <MenuItem onClick={() => navigateFavorites()}><FavoriteIcon /> Favorites </MenuItem>
            <MenuItem onClick={handleClose}><LogoutIcon /> Logout </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;