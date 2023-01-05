import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardMedia, CardContent, Divider, autocompleteClasses } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom"
import { getBusinessProfile } from '../hooks/business/account/getBusinessProfile';
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
                                mt: 5,
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
                                            ml: 5

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
                                flexDirection: 'column',
                                alignItems: 'center',
                                borderRadius: 2,
                                mt: 5,
                                bgcolor: "rgb(16, 70, 123)",
                                maxWidth: 'lg',
                                height: 800,
                                width: '100%',
                            }}>
                            <Box>
                                <Button onClick={(e) => navigate("/EditPostingBusiness")}>
                                    <Typography sx={{ mr: 1 }}>Post a job offer </Typography><EditIcon />
                                </Button>
                            </Box>

                            <Box
                                sx={{
                                    width: '95%',
                                    height: '90%',
                                    ml: 2,
                                    mt: 2,
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
                                            mt: 5,
                                        }}>
                                        {businessInfo && (
                                            <span>
                                                Job: {businessInfo.job_posting}
                                            </span>
                                        )}
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>


                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
