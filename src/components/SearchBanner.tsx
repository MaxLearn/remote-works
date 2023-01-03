import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, CardActionArea, Checkbox, Dialog, DialogActions, DialogContent,DialogTitle, Divider, FormControl, FormControlLabel, FormGroup, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import banner from "../assets/images/banner.jpg";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Posting } from '../models/Posting';
import PostingBox from './PostingBox';


function SearchBanner() {
    const [subscribe, setSubscribe] = React.useState(false);

    const [inputtimeZone, setInputtimeZone] = useState('');
    const [inputSalary, setInputSalary] = useState('');

    const handleClicSubscribe = () => {
        setSubscribe(true);
      };
    
      const handleCloseSubscribe = () => {
        setSubscribe(false);
      };
  return (
    <div>    
      <Box
        sx={{
          pt: 8,
          mt: 10,
        }}>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom>

            <Card>
              <div style={{ width: '100%', position: "relative" }}>
                <CardMedia component="img" image={banner} title="Pancakes" alt="" />
                <div
                  style={{
                    position: "absolute",
                    color: "black",
                    top: "30%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}>
                  Remote Works
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center">
                    <Paper
                      component="form"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 300,
                        borderRadius: 5,
                        border: 1
                      }}>
                      <InputBase sx={{ ml: 1, flex: 1 }} inputProps={{ 'aria-label': 'search' }} />
                      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                    <Avatar sx={{ m: 1, bgcolor: "rgb(255, 255, 255)" }}>
                      <IconButton>
                        <FilterAltIcon onClick={handleClicSubscribe} color='info' fontSize='large' sx={{ pt: 1 }} />
                      </IconButton>
                    </Avatar>
                  </Stack>
                  <Box >
                    <Dialog sx={{ flex: 1 }} open={subscribe} onClose={handleClicSubscribe}>
                      <DialogTitle sx={{
                        width: 600,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                      }}>
                        Filter
                      </DialogTitle>
                      <DialogContent sx={{ width: 600, }}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={12} md={6}>
                            <FormControl sx={{ mt: 2 }} fullWidth>
                              <InputLabel>Time Zone</InputLabel>
                              <Select
                                required
                                id="timezone"
                                value={inputtimeZone}
                                label="timezone"
                                onChange={(event) => setInputtimeZone(event.target.value)}>
                                <MenuItem value={'UTC -12:00'}>UTC -12:00 </MenuItem>
                                <MenuItem value={'UTC -11:00'}>UTC -11:00</MenuItem>
                                <MenuItem value={'UTC -10:00'}>UTC -10:00</MenuItem>
                                <MenuItem value={'UTC -09:30'}>UTC -09:30</MenuItem>
                                <MenuItem value={'UTC -09:00'}>UTC -09:00</MenuItem>
                                <MenuItem value={'UTC -08:00'}>UTC -08:00</MenuItem>
                                <MenuItem value={'UTC -07:00'}>UTC -07:00</MenuItem>
                                <MenuItem value={'UTC -06:00'}>UTC -06:00</MenuItem>
                                <MenuItem value={'UTC -05:00'}>UTC -05:00</MenuItem>
                                <MenuItem value={'UTC -04:00'}>UTC -04:00</MenuItem>
                                <MenuItem value={'UTC -03:30'}>UTC -03:30</MenuItem>
                                <MenuItem value={'UTC -03:00'}>UTC -03:00</MenuItem>
                                <MenuItem value={'UTC -02:00'}>UTC -02:00</MenuItem>
                                <MenuItem value={'UTC -01:00'}>UTC -01:00</MenuItem>
                                <MenuItem value={'UTC  00:00'}>UTC  00:00</MenuItem>
                                <MenuItem value={'UTC +01:00'}>UTC +01:00</MenuItem>
                                <MenuItem value={'UTC +02:00'}>UTC +02:00</MenuItem>
                                <MenuItem value={'UTC +03:00'}>UTC +03:00</MenuItem>
                                <MenuItem value={'UTC +03:30'}>UTC +03:30</MenuItem>
                                <MenuItem value={'UTC +04:00'}>UTC +04:00</MenuItem>
                                <MenuItem value={'UTC +04:30'}>UTC +04:30</MenuItem>
                                <MenuItem value={'UTC +05:00'}>UTC +05:00</MenuItem>
                                <MenuItem value={'UTC +05:30'}>UTC +05:30</MenuItem>
                                <MenuItem value={'UTC +05:45'}>UTC +05:45</MenuItem>
                                <MenuItem value={'UTC +06:00'}>UTC +06:00</MenuItem>
                                <MenuItem value={'UTC +06:30'}>UTC +06:30</MenuItem>
                                <MenuItem value={'UTC +07:00'}>UTC +07:00</MenuItem>
                                <MenuItem value={'UTC +08:00'}>UTC +08:00</MenuItem>
                                <MenuItem value={'UTC +08:45'}>UTC +08:45</MenuItem>
                                <MenuItem value={'UTC +09:00'}>UTC +09:00</MenuItem>
                                <MenuItem value={'UTC +09:30'}>UTC +09:30</MenuItem>
                                <MenuItem value={'UTC +10:00'}>UTC +10:00</MenuItem>
                                <MenuItem value={'UTC +10:30'}>UTC +10:30</MenuItem>
                                <MenuItem value={'UTC +11:00'}>UTC +11:00</MenuItem>
                                <MenuItem value={'UTC +12:00'}>UTC +12:00</MenuItem>
                                <MenuItem value={'UTC +12:45'}>UTC +12:45</MenuItem>
                                <MenuItem value={'UTC +13:00'}>UTC +13:00</MenuItem>
                                <MenuItem value={'UTC +14:00'}>UTC +14:00</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>

                          <Grid item xs={12} sm={12} md={6}>
                            <FormControl sx={{ mt: 2 }} fullWidth>
                              <InputLabel>Salary</InputLabel>
                              <Select
                                required
                                id="salary"
                                value={inputSalary}
                                label="Salary"
                                onChange={(event) => setInputSalary(event.target.value)}>
                                <MenuItem value={'+ de 40 000 CAD'}>+ de 40 000 CAD </MenuItem>
                                <MenuItem value={'+ de 60 000 CAD'}>+ de 60 000 CAD</MenuItem>
                                <MenuItem value={'+ de 80 000 CAD'}>+ de 80 000 CAD</MenuItem>
                                <MenuItem value={'+ de 100 000 CAD'}>+ de 100 000 CAD</MenuItem>
                                <MenuItem value={'+ de 120 000 CAD'}>+ de 120 000 CAD</MenuItem>
                                <MenuItem value={'+ de 140 000 CAD'}>+ de 140 000 CAD</MenuItem>
                                <MenuItem value={'+ de 160 000 CAD'}>+ de 160 000 CAD</MenuItem>
                                <MenuItem value={'+ de 180 000 CAD'}>+ de 180 000 CAD</MenuItem>
                                <MenuItem value={'+ de 200 000 CAD'}>+ de 200 000 CAD</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="job_title"
                          label="Job Title"
                          type="string"
                          fullWidth
                          variant="standard" />

                        <TextField
                          autoFocus
                          margin="dense"
                          id="country"
                          label="Country"
                          type="string"
                          fullWidth
                          variant="standard" />

                        <FormGroup sx={{flexDirection:'row'}}>
                          <FormControlLabel control={<Checkbox  />} label="Contract" />
                          <FormControlLabel control={<Checkbox />} label="Full time" />
                          <FormControlLabel control={<Checkbox />} label="Part time" />
                        </FormGroup>


                      </DialogContent>
                      <DialogActions
                        sx={{
                          width: 600,
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                              ? theme.palette.grey[200]
                              : theme.palette.grey[800],
                        }}>
                        <Button onClick={handleCloseSubscribe}>Cancel</Button>
                        <Button onClick={handleCloseSubscribe}>Save</Button>
                      </DialogActions>
                    </Dialog>
                  </Box>
                </div>
              </div>
            </Card>
          </Typography>
        </Container>
      </Box>
</div>
  )
}

export default SearchBanner