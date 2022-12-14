import * as React from 'react';
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
import { CardActionArea, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import banner from "../assets/images/banner.jpg";



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();


export default function Album() {
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

        <Container
          sx={{
            py: 2,
            borderRadius: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            overflowY: 'scroll',
            height: 500
          }} maxWidth="lg">
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>

                <Typography
                  component="h1"
                  variant="h5"
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



              {/* <Grid item xs={12} sm={8}>
                <Box >
                  <Card>
                    <CardContent>
                      <Typography>test</Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid> */}
            </Grid>
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
}