import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardMedia, CardContent, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom"
import { getUserProfile } from '../hooks/user/account/getUserProfile';
import { User } from "../models/User";


export default function ProfileUser(props: { user: User }) {

    const theme = createTheme();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<User>(props.user!);

    useEffect(() => {
        ((async () => {
            const value = await getUserProfile();
            console.log(value);
            setUserInfo(value!);
        })()).catch(console.error);
    }, []);

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
                                height: 500,
                                width: '100%',
                            }}>
                            <Box>
                                <Button onClick={(e) => navigate("/EditProfile")}>
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
                                    mb: 2,
                                    height: '55%',
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
                                            width: '450px',
                                            textAlign: 'center',
                                            mt: 15
                                        }}>
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
                                    width: '90%',
                                    mb: 2,
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
