import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import { getUserId } from '../hooks/user/account/getUserId';
import { updateUser } from '../hooks/user/account/updateUser.ts';
import { getUserProfile } from '../hooks/user/account/getUserProfile';
import ProfileUser from './ProfileUser';
import { User } from "../models/User";
import { createExperience } from '../hooks/user/account/createExperience';


const theme = createTheme();

export default function Profile() {
    
    const [userInfo, setUserInfo] = useState<User>();
    const [inputFirstName, setInputFirstName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputtimeZone, setInputtimeZone] = useState('');
    const [inputCountry, setInputCountry] = useState('');
    const [inputWebsite, setInputWebsite] = useState('');
    const [inputGit, setInputGit] = useState('');
    const[inputExperiences, setInputExperiences] = useState ('');
    
    const [inputValJob, setInputValJob] = useState('');
    const [inputValCie, setInputValCie] = useState('');
    const [inputValStartDate, setInputValStartDate] = useState('');
    const [inputValEndDate, setInputValEndDate] = useState('');

    let [update, setUpdate] = useState(1);
        
    
    
    useEffect(() => {
               ((async () => {
            const userInfo = await getUserProfile();
            console.log(userInfo);
            setUserInfo(userInfo);
        })()).catch(console.error); 
      },[]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUserInfo = {
            first_name: inputFirstName,
            last_name: inputLastName,
            timezone: inputtimeZone,
            country: inputCountry,
            website: inputWebsite,
            git_url: inputGit,
        };
        
        updateUser(getUserId(), newUserInfo);
        setUpdate(update++);
    };
    
    const handleSaveExperiences = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newExperienceInfo = {
            jobTitle: inputValJob,
            company: inputValCie,
            startDate: inputValStartDate,
            endDate: inputValEndDate
        };


        createExperience(getUserId(), newExperienceInfo);
        setInputValJob('');
        setInputValCie('');
        setInputValStartDate('');
        setInputValEndDate('');
        setUpdate(update++);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    mt: 12
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
                                {/* <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                    <input
                                        type="file"
                                        style={{ display: 'none' }}
                                        id="profilePicture"
                                        name="profilePicture"
                                        onChange={handleChange} />

                                    <img style={imageStyles} src={file} width={250} height={250} alt="" />
                                    <br></br>
                                    <label htmlFor="profilePicture">
                                        <Button color="primary" variant="contained" component="span">
                                            Choose a photo
                                        </Button>
                                    </label>
                                </Box> */}

                                <Typography
                                    component="h1"
                                    variant="h5"
                                    sx={{ mt: 5, mb: 2 }}>
                                    General Informations
                                </Typography>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="first_name"
                                            label="First Name"
                                            name="first_name"
                                            autoComplete="First Name"
                                            value={inputFirstName}
                                            onChange={(event) => setInputFirstName(event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="last_name"
                                            label="Last Name"
                                            name="last_name"
                                            autoComplete="Last name"
                                            value={inputLastName}
                                            onChange={(event) => setInputLastName(event.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <FormControl fullWidth>
                                            <InputLabel>Time Zone</InputLabel>
                                            <Select
                                                required
                                                id="timezone"
                                                value={inputtimeZone}
                                                label="Gender"
                                                onChange={(event) => setInputtimeZone(event.target.value)}>
                                                <MenuItem value={'UTC -12:00'}>UTC -12:00 </MenuItem>
                                                <MenuItem value={'UTC -11:00'}>UTC -11:00</MenuItem>
                                                <MenuItem value={'UTC -10:00'}>UTC -10:00</MenuItem>
                                                <MenuItem value={'UTC -09:30'}>UTC -09:30</MenuItem>
                                                <MenuItem value={'UTC -09:00'}>UTC -09:00</MenuItem>
                                                <MenuItem value={'UTC -08:00'}>UTC -08:00</MenuItem>
                                                <MenuItem value={'UTC -07:00'}>UTC -07:00</MenuItem>
                                                <MenuItem value={'UTC -06:00'}>UTC -06:00</MenuItem>
                                                <MenuItem value={'UTC -05:00'}>UTC -05:00</MenuItem>
                                                <MenuItem value={'UTC -04:00'}>UTC -04:00</MenuItem>
                                                <MenuItem value={'UTC -03:30'}>UTC -03:30</MenuItem>
                                                <MenuItem value={'UTC -03:00'}>UTC -03:00</MenuItem>
                                                <MenuItem value={'UTC -02:00'}>UTC -02:00</MenuItem>
                                                <MenuItem value={'UTC -01:00'}>UTC -01:00</MenuItem>
                                                <MenuItem value={'UTC  00:00'}>UTC  00:00</MenuItem>
                                                <MenuItem value={'UTC +01:00'}>UTC +01:00</MenuItem>
                                                <MenuItem value={'UTC +02:00'}>UTC +02:00</MenuItem>
                                                <MenuItem value={'UTC +03:00'}>UTC +03:00</MenuItem>
                                                <MenuItem value={'UTC +03:30'}>UTC +03:30</MenuItem>
                                                <MenuItem value={'UTC +04:00'}>UTC +04:00</MenuItem>
                                                <MenuItem value={'UTC +04:30'}>UTC +04:30</MenuItem>
                                                <MenuItem value={'UTC +05:00'}>UTC +05:00</MenuItem>
                                                <MenuItem value={'UTC +05:30'}>UTC +05:30</MenuItem>
                                                <MenuItem value={'UTC +05:45'}>UTC +05:45</MenuItem>
                                                <MenuItem value={'UTC +06:00'}>UTC +06:00</MenuItem>
                                                <MenuItem value={'UTC +06:30'}>UTC +06:30</MenuItem>
                                                <MenuItem value={'UTC +07:00'}>UTC +07:00</MenuItem>
                                                <MenuItem value={'UTC +08:00'}>UTC +08:00</MenuItem>
                                                <MenuItem value={'UTC +08:45'}>UTC +08:45</MenuItem>
                                                <MenuItem value={'UTC +09:00'}>UTC +09:00</MenuItem>
                                                <MenuItem value={'UTC +09:30'}>UTC +09:30</MenuItem>
                                                <MenuItem value={'UTC +10:00'}>UTC +10:00</MenuItem>
                                                <MenuItem value={'UTC +10:30'}>UTC +10:30</MenuItem>
                                                <MenuItem value={'UTC +11:00'}>UTC +11:00</MenuItem>
                                                <MenuItem value={'UTC +12:00'}>UTC +12:00</MenuItem>
                                                <MenuItem value={'UTC +12:45'}>UTC +12:45</MenuItem>
                                                <MenuItem value={'UTC +13:00'}>UTC +13:00</MenuItem>
                                                <MenuItem value={'UTC +14:00'}>UTC +14:00</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={8} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="country"
                                            label="Country"
                                            name="country"
                                            autoComplete="Country"
                                            value={inputCountry}
                                            onChange={(event) => setInputCountry(event.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={8} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="website"
                                            label="Website"
                                            name="website"
                                            autoComplete="Website"
                                            value={inputWebsite}
                                            onChange={(event) => setInputWebsite(event.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={8} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="git_url"
                                            label="Git URL"
                                            name="git_url"
                                            autoComplete="Git URL"
                                            value={inputGit}
                                            onChange={(event) => setInputGit(event.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={8} sm={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}>
                                            Save changes
                                        </Button>
                                    </Grid>
                                    <Grid item xs={8} sm={12}>

                                        <Typography
                                            component="h1"
                                            variant="h6"
                                            sx={{ mt: 1, mb: 1 }}>
                                            Add your experience(s)
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={8} sm={3}>
                                        <TextField
                                            id="jobTitle"
                                            fullWidth
                                            label="Job Title"
                                            name="jobTitle"
                                            autoComplete="jobTitle"
                                            value={inputExperiences}
                                            onChange={(event) => setInputExperiences(event.target.value)}
                                        />

                                    </Grid>
                                    <Grid item xs={8} sm={3}>
                                        <TextField
                                            id="company"
                                            fullWidth
                                            label="Company"
                                            name="company"
                                            autoComplete="company"
                                            value={inputValCie}
                                            onChange={(event) => setInputValCie(event.target.value)}
                                        />

                                    </Grid>
                                    <Grid item xs={8} sm={3}>
                                        <TextField
                                            id="startDate"
                                            fullWidth
                                            label="Start date"
                                            name="startDate"
                                            autoComplete="date"
                                            value={inputValStartDate}
                                            onChange={(event) => setInputValStartDate(event.target.value)}
                                        />

                                    </Grid>
                                    <Grid item xs={8} sm={3}>
                                        <TextField
                                            id="endDate"
                                            fullWidth
                                            label="End date"
                                            name="endDate"
                                            autoComplete="date"
                                            value={inputValEndDate}
                                            onChange={(event) => setInputValEndDate(event.target.value)}
                                        />

                                    </Grid>
                                    <Grid item xs={8} sm={3}>
                                        <form 
                                        onSubmit={handleSaveExperiences}
                                        >
                                        <Button
                                            type="submit"
                                            color="primary"
                                            variant="contained"
                                            sx={{ fontSize: '18pt', fontFamily: 'bold', fontWeight: 'bold' }}>
                                            +
                                        </Button>
                                        </form>

                                    </Grid>


                                    <Grid item xs={8} sm={12}>
                                        <label htmlFor="addResume">
                                            <input
                                                style={{ display: 'none' }}
                                                id="addResume"
                                                name="addResume"
                                                type="file"
                                            />
                                            <Button color="primary" variant="contained" component="span">
                                                Add your resume
                                            </Button>
                                        </label>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} md={5}>

                        <ProfileUser user={userInfo!}/>

                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
