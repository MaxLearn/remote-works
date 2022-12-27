import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, CardMedia, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select } from '@mui/material';
import { getBusinessId } from '../hooks/getBusinessId.ts';
import { updateBusiness } from '../hooks/updateBusiness.ts';
import { getBusinessProfile } from '../hooks/getBusinessProfile';
import ProfileBusiness from './ProfileBusiness';
import { Business } from "../models/Business";


const theme = createTheme();

export default function EditPosting() {

    const [businessInfo, setBusinessInfo] = useState<Business>();

    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');

    let [update, setUpdate] = useState(1);



    useEffect(() => {
        ((async () => {
            const businessInfo = await getBusinessProfile();
            console.log(businessInfo);
            setBusinessInfo(businessInfo);
        })()).catch(console.error);
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        window.location.reload();
        event.preventDefault();
        const newBusinessInfo = {
            name: inputName,
            description: inputDescription,
        };

        updateBusiness(getBusinessId(), newBusinessInfo);

        setUpdate(update++);


    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8} md={6}>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                ml: 3,
                                mt: 10,
                            }}>

                            <Box component="form" onSubmit={handleSubmit}
                                sx={{
                                    ml: 3,
                                    mr: 3
                                }}>

                                <Typography
                                    component="h1"
                                    variant="h5"
                                    sx={{ mt: 5, mb: 2 }}>
                                    Offer Informations
                                </Typography>
                                <Grid container>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="job_title"
                                                label="Job Title"
                                                name="job_title"
                                                autoComplete="Job Title"
                                                value={inputName}
                                                onChange={(event) => setInputName(event.target.value)}
                                            />
                                        </Grid>


                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="timezone"
                                                label="Timezone"
                                                name="timezone"
                                                autoComplete="Timezone"
                                                value={inputName}
                                                onChange={(event) => setInputName(event.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="country"
                                                label="Country"
                                                name="country"
                                                autoComplete="Country"
                                                value={inputName}
                                                onChange={(event) => setInputName(event.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="salary"
                                                label="Salary"
                                                name="salary"
                                                autoComplete="salary"
                                                value={inputName}
                                                onChange={(event) => setInputName(event.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="salary"
                                                label="Salary"
                                                name="salary"
                                                autoComplete="salary"
                                                value={inputName}
                                                onChange={(event) => setInputName(event.target.value)}
                                            />
                                        </Grid>


                                        <Grid item xs={12} sm={6}>


                                            <FormGroup sx={{ flexDirection: 'row' , ml:5 }}>
                                                <FormControlLabel control={<Checkbox />} label="Contract" />
                                                <FormControlLabel control={<Checkbox />} label="Full time" />
                                                <FormControlLabel control={<Checkbox />} label="Part time" />
                                            </FormGroup>


                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} mt={2}>
                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="description"
                                                label=" Company Description"
                                                multiline rows={10}
                                                name="description"
                                                autoComplete="description"
                                                value={inputDescription}
                                                onChange={(event) => setInputDescription(event.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={8} sm={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                //onClick={() => handleUpdateProfile()}
                                                sx={{ mt: 3, mb: 2 }}>
                                                Save changes
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} md={5} >

                        {/* <ProfileBusiness business={businessInfo!} /> */}

                        <Box
                            sx={{
                                alignItems: 'center',
                                flexDirection: 'colum',
                            }}>
                            <Box
                                sx={{
                                    margin: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderRadius: 2,
                                    mt: 20,
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
                                        Current Jobs
                                    </Typography>

                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        }}>

                                        <CardContent
                                            sx={{
                                                width: '450px',
                                                height: '450px',
                                                textAlign: 'justify',
                                                overflowY: 'scroll',
                                            }}>
                                            {businessInfo && (
                                                <span>
                                                    Jobs: {businessInfo.job_posting}
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
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
