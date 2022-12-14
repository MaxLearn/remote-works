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
import { CardActionArea, FormControl, IconButton, InputBase, InputLabel, MenuItem, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import banner from "../assets/images/banner.jpg";
import Select, { SelectChangeEvent } from '@mui/material/Select';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Search() {
  const [jobTitle, setJobTitle] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setJobTitle(event.target.value as string);
  };



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
                      <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 300, borderRadius: 5, border: 1 }}>
                        <InputBase sx={{ ml: 1, flex: 1 }} inputProps={{ 'aria-label': 'search' }} />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                          <SearchIcon />
                        </IconButton>
                      </Paper>
                    </Stack>
                  </div>
                </div>
              </Card>
            </Typography>
          </Container>
        </Box>

        <Container maxWidth='lg'>
          <Box
          component={"form"}
          sx={{ mt: 2, mb: 2, }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Job Title</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jobTitle}
                    label="Job Title"
                    onChange={handleChange}>
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Time Zone</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jobTitle}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Salary</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jobTitle}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Contract type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jobTitle}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Created date</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jobTitle}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Requirement</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jobTitle}
                    label="Age"
                    onChange={handleChange}>
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Container
          sx={{
            py: 2,
            borderRadius: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }} maxWidth="lg">
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>

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

                        <CardActionArea href='#'>
                          <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                              <Typography gutterBottom variant="h5" component="h2">
                                Full Stack Developer</Typography>
                              <Typography gutterBottom>National Bank</Typography>
                              <Typography gutterBottom>Montreal, Qc</Typography>
                              <Typography gutterBottom>You are passionate about technology issues. You have an interest in creating
                                and developing new applications and you are familiar with Java programming[...]
                              </Typography>
                              <Button>more detail...</Button>
                            </CardContent>
                          </Card>
                        </CardActionArea>

                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box
                  id='test'
                  sx={{
                    mt: 7,
                    border: 1
                  }}
                >
                  <Card>
                    <CardContent>
                      <Typography>test</Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
}