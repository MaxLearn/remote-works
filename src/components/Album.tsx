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
import SearchBanner from './SearchBanner';



export default function Album() {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const theme = createTheme();

  const [currentPosting, setCurrentPosting] = useState<Posting>({
    job_title: 'Full Stack dev',
    timezone: '',
    field: 'Software Devlopment',
    country: 'Canada',
    created_date: new Date(),
    description: 'You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming',
    salary: '$55,000 - $120,000 a year',
    start_date: new Date(),
    isContract: true,
    contract_length_in_months: 12,
    isRenewable: true,
    isPromoted: false,
    requirement: 'Deep working knowledge of Shopify platforms'
})
  const [postingArray, setPostingArray] = useState<Posting[]>();

  const [show, setShow] = useState(false);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <SearchBanner />

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
{/*                             <CardContent sx={{ flexGrow: 1 }}>
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
                            </CardContent> */}
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
      <PostingBox {...currentPosting}/>
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