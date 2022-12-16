import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardMedia, CardContent,Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom"
import { getUserProfile } from '../hooks/getUserProfile';
import { User } from "../models/User";

const theme = createTheme();


export default function ProfileUser(props : {user: User}) {
    
    
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<User>(props.user!);
    
    useEffect(() => {
               ((async () => {
            const value = await getUserProfile();
            console.log(value);
            setUserInfo(value!);
        })()).catch(console.error); 
      },[]);
    const [items, setItems] = useState([
        {
            itemJob: '',
            itemCie: '',
            itemYear: '',
        },
    ]);
    if (!userInfo) return <div>Loading...</div>;

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
                                    {userInfo && (
                                            <span>
                                                {userInfo.first_name}  {userInfo.last_name}<br></br>
                                                {userInfo.timezone}<br></br>
                                                {userInfo.country}<br></br>
                                                {userInfo.website}<br></br>
                                                {userInfo.git_url}<br></br>
                                            </span>
                                            )}
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
                                                        <p>{item.itemJob}</p>
                                                        <p>{item.itemCie} </p>
                                                        <p>{item.itemYear}</p>
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
