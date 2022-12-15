import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardMedia, CardContent,Divider } from '@mui/material';
import { getUserId } from '../hooks/getUserId.ts';
import { updateUser } from '../hooks/updateUser.ts';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom"

const theme = createTheme();


export default function ProfileUser() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newItem1 = {
            first_name: inputFirstName,
            last_name: inputLastName,
            timezone: inputtimeZone,
            country: inputCountry,
            website: inputWebsite,
            git_url: inputGit
        };

        updateUser(getUserId(), newItem1);
        handleUpdateProfile();


    };

    // const [file, setFile] = useState();
    // function handleChange(e) {

    //     setFile(URL.createObjectURL(e.target.files[0]));
    // };

    // const imageStyles = {
    //     flex: 1,
    //     width: 250,
    //     height: 250,
    // }

    const [items, setItems] = useState([
        {
            itemJob: 'Full Stack dev',
            itemCie: 'UbiSoft',
            itemYear: '2002-2008',
        },
    ]);


    const [items1, setItems1] = useState([
        {
            firstName: 'George',
            lastName: 'Lord',
            timezone: 'UTC -3:30',
            country: 'Canada',
            website: 'www.Remoteworks.com',
            gitUrl: 'github.com/GeorgeLord/'
        },
    ]);


    const [inputFirstName, setInputFirstName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputtimeZone, setInputtimeZone] = useState('');
    const [inputCountry, setInputCountry] = useState('');
    const [inputWebsite, setInputWebsite] = useState('');
    const [inputGit, setInputGit] = useState('');
  

    const handleUpdateProfile = () => {
        const newItem1 = {
            firstName: inputFirstName,
            lastName: inputLastName,
            timezone: inputtimeZone,
            country: inputCountry,
            website: inputWebsite,
            gitUrl: inputGit
        };

        const newItems1 = [newItem1];

        setItems1(newItems1);
        setInputFirstName('');
        setInputLastName('');
        setInputtimeZone('');
        setInputCountry('');
        setInputWebsite('');
        setInputGit('');
    };


    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    mt: 12,
                }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Box
                            sx={{
                                margin: 'auto',
                  
                                flexDirection: 'column',
                                alignItems: 'center',
                                borderRadius: 2,
                                mt: 10,
                                bgcolor: "rgb(16, 70, 123)",
                                maxWidth: 'sm',
                                height:500,
                            }}>
                                <Box sx={{ml:55}}>
                                <Button onClick={(e) => navigate("/EditProfile")}>
                                    <Typography sx={{mr:1}}>Edit Profile</Typography><EditIcon/>
                                </Button>
                                </Box>
                                 <Card>
                                    <CardMedia
                                        component='img'
                                        sx={{
                                            position: 'absolute',
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '50%',
                                            ml:25,
                                            mt:7
                                        }}
                                        image="https://source.unsplash.com/random" />
                                    </Card>
                            <Box
                                sx={{
                                    mt: 20,
                                    ml: 10,
                                    mr: 10,
                                    mb: 3,
                                }}>
                                   
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                    


                                    <CardContent sx={{ flexGrow: 1, width: '450px', textAlign: 'center', mt:15 }}>
                                        {items1.map((item) => (
                                            <span>
                                                {item.firstName}  {item.lastName}<br></br>
                                                {item.timezone}<br></br>
                                                {item.country}<br></br>
                                                {item.website}<br></br>
                                                {item.gitUrl}<br></br>
                                            </span>
                                        ))}
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    
                        <Box
                            sx={{
                                margin: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                borderRadius: 2,
                                mt: 2,
                                bgcolor: "rgb(16, 70, 123)",
                                maxWidth: 'sm'
                            }}>

                            <Box
                                sx={{
                                    mt: 3,
                                    ml: 10,
                                    mr: 10,
                                    mb: 3,
                                }}>

                                <Typography
                                    component="h1"
                                    variant="h5"
                                    sx={{ mb: 2, color: 'white', textAlign: 'center' }}>
                                    Experience
                                </Typography>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <Card
                                            sx={{
                                                alignContent: 'center',
                                                display: 'flex',
                                                flexDirection: 'column'
                                            }}>
                                            <CardContent sx={{ flexGrow: 1, width: '450px', }}>
                                                {items.map((item) => (
                                                    <span>
                                                        <p>Job Title: {item.itemJob}</p>
                                                        <p>Company: {item.itemCie} </p>
                                                        <p>Year: {item.itemYear}</p>
                                                        <Divider />
                                                    </span>
                                                ))}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
