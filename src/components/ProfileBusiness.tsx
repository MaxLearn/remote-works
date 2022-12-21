import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardMedia, CardContent, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom"
import { getBusinessProfile } from '../hooks/getBusinessProfile';
import { Business } from "../models/Business";




export default function ProfileBusiness(props: { business: Business }) {

    const theme = createTheme();
    const navigate = useNavigate();
    const [businessInfo, setBusinessInfo] = useState<Business>(props.business!);

    useEffect(() => {
        ((async () => {
            const value = await getBusinessProfile();
            console.log(value);
            setBusinessInfo(value!);
        })()).catch(console.error);
    }, []);
    const [items, setItems] = useState([
        {
            itemJob: '',
            itemCie: '',
            itemYear: '',
        },
    ]);
    if (!businessInfo) return <div>nothing...</div>;

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
                                maxWidth: 'lg',
                                height: 800,
                                width: '100%',
                            }}>
                            <Box>
                                <Button onClick={(e) => navigate("/EditProfileBusiness")}>
                                    <Typography sx={{ mr: 1 }}>Edit Profile</Typography><EditIcon />
                                </Button>
                            </Box>
                            <Box>
                                <Card>
                                    <CardMedia
                                        component='img'
                                        sx={{
                                            position: 'absolute',
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '50%',
                                            mt: 7,
                                            ml: 25,
                                        }}
                                        image="https://source.unsplash.com/random" />
                                </Card>
                            </Box>
                           
                            <Box
                                sx={{
                                    width: '95%',
                                    height: '70%',
                                    ml: 2,
                                    mt: 20,
                                }}>
                            
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                        
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            width: '90%',
                                            textAlign: 'justify',
                                            mt: 15,
                                            overflowY: 'scroll',
                                        }}>
                                        {businessInfo && (
                                            <span>
                                                Company Name: {businessInfo.name} 
                                                <br></br>
                                                <br></br>
                                                Contact: {businessInfo.email}
                                                <br></br>
                                                <br></br>
                                                Description: {businessInfo.description}<br></br>
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
                                    width: '90%',
                                    mb: 2,
                                }}>
                                <Typography
                                    component="h1"
                                    variant="h5"
                                    sx={{ mb: 2, color: 'white', textAlign: 'center' }}>
                                    Jobs
                                </Typography>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <Card
                                            sx={{
                                                alignContent: 'center',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: '100%',

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
