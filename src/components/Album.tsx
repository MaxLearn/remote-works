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



export default function Album() {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  const theme = createTheme();

  const [items] = useState([
    {
      itemJobTitle: 'Full Stack dev',
      itemDate: '2022-12-15',
      itemCie: 'National Bank',
      itemCountry: 'CA',
      itemCity: 'Montréal,Qc',
      itemSalary: '$55,000 - $120,000 a year',
      itemJobType: 'Part time job',
      itemRequirement: 'Deep working knowledge of Shopify platforms',
      itemShortDesc: 'You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming[...]',
      itemLongDesc: 'You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming'
    },
  ]);

  const [show, setShow] = useState(false);

  const [subscribe, setSubscribe] = React.useState(false);

  const handleClicSubscribe = () => {
    setSubscribe(true);
  };

  const handleCloseSubscribe = () => {
    setSubscribe(false);
  };

  const [inputtimeZone, setInputtimeZone] = useState('');
  const [inputSalary, setInputSalary] = useState('');


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
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

        <Container
          sx={{
            py: 2,
            borderRadius: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            overflowY: 'scroll',
            height: 700,
          }} maxWidth="lg">
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4}>

                <Typography
                  component="h1"
                  variant="h4"
                  align="left"
                  color="text.primary"
                  gutterBottom>
                  Lastest announcements
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Grid container spacing={4} >
                    {cards.map((card) => (
                      <Grid item key={card} xs={12} sm={12}>
                        <CardActionArea onClick={() => setShow(prev => !prev)}>
                          <Card
                            sx={{
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column'
                            }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                              {items.map((item) => (
                                <span>
                                  <h1>{item.itemJobTitle}</h1>
                                  <p>{item.itemCie}</p>
                                  <p>{item.itemCity}</p>
                                  <p>{item.itemShortDesc}</p>
                                  <Divider />
                                </span>
                              ))}
                              <Button>more detail...</Button>
                            </CardContent>
                          </Card>
                        </CardActionArea>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Box
                  sx={{
                    bgcolor: 'white',
                    height: '100%',
                    borderRadius: 2,
                    pl: 5,
                    pr: 5,
                    pt: 1
                  }}>
                  <Box
                    id='test'
                    sx={{
                      mt: 7,
                      bgcolor: 'white'
                    }}>
                    {show && <Box>
                      {items.map((item) => (
                        <span>
                          <h1>{item.itemJobTitle}</h1>
                          <p>{item.itemCie}<br></br>
                            {item.itemCity}<br></br>
                            {item.itemCountry}<br></br>
                            <Button>Apply now</Button><IconButton><FavoriteIcon fontSize='large' /></IconButton>
                          </p>
                          <Divider />
                          <p>Created date<br></br>{item.itemDate}</p>
                          <p>Salary<br></br>{item.itemSalary}</p>
                          <p>Job Type<br></br>{item.itemJobType}</p>
                          <p>Full job Description:<br></br>{item.itemLongDesc}</p>
                          <p>What you'll need<br></br><li>{item.itemRequirement}</li></p>
                          <Divider />
                        </span>
                      ))}
                    </Box>}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </ThemeProvider >
  );
}