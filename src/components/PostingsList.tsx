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



export default function PostingsList() {

  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const theme = createTheme();

const [currentPosting, setCurrentPosting] = useState<Posting>()

const [postingArray, setPostingArray] = useState<Posting[]>([{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
},{
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
}]);

  const [show, setShow] = useState(false);


  return (
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
        {postingArray && cards.map((card) => (
          <Grid item key={card} xs={12} sm={12}>
            <CardActionArea onClick={() => setCurrentPosting(postingArray[card])}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                 <CardContent sx={{ flexGrow: 1 }}>
                    <>
                      <h1>{postingArray[card].job_title}</h1>
                      <p>{postingArray[card].country}</p>
                      <p>{postingArray[card].salary}</p>
                      <p>{postingArray[card].description}</p>
                    </>
                  <Button>more detail...</Button>
                </CardContent> 
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Grid>
  );
}