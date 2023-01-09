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
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputBase, Menu, MenuItem, Paper, TextField } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom"
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAccountType } from "../hooks/global/accountType";
import ArticleIcon from '@mui/icons-material/Article';



function Header() {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);

  };

  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);
  const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };

  const navigateProfile = () => {
    let accountType = getAccountType();
    if (!accountType){
        alert("Please sign in to access your profile")
        return navigate("/signin")
    } 
    else if (accountType === "employee") {return navigate("/ProfileUser")}
    else if (accountType === "company"){ return navigate("/ProfileBusiness")}
  }
  const navigateEditProfile = () => {
      let accountType = getAccountType();
      if (!accountType){
          alert("Please sign in to edit your profile")
          return navigate("/signin")
      } 
      else if (accountType === "employee") return navigate("/EditProfile")
      else if (accountType === "company") return navigate("/EditProfileBusiness")
      else return "" ;
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
          <Dialog open={subscribe} onClose={handleClicSubscribe}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to our newlsetter, please enter your email address here. We
                will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard" />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseSubscribe}>Cancel</Button>
              <Button onClick={handleCloseSubscribe}>Subscribe</Button>
            </DialogActions>
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
            <MenuItem onClick={() => navigate("/Favorites")}><FavoriteIcon /> Favorites </MenuItem>
            <MenuItem onClick={handleClose}><LogoutIcon /> Logout </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;