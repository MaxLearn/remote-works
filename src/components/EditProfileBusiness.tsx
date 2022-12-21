import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { getBusinessId } from '../hooks/getBusinessId.ts';
import { updateBusiness } from '../hooks/updateBusiness.ts';
import { getBusinessProfile } from '../hooks/getBusinessProfile';
import ProfileBusiness from './ProfileBusiness';
import { Business } from "../models/Business";


const theme = createTheme();

export default function Profile() {

    const [businessInfo, setBusinessInfo] = useState<Business>();

    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputWebsite, setInputWebsite] = useState('');



    const [inputValJob, setInputValJob] = useState('');
    const [inputValCie, setInputValCie] = useState('');
    const [inputValYear, setInputValYear] = useState('');

    let [update, setUpdate] = useState(1);



    useEffect(() => {
        ((async () => {
            const businessInfo = await getBusinessProfile();
            console.log(businessInfo);
            setBusinessInfo(businessInfo);
            /*      userInfo?.first_name? setInputFirstName(userInfo?.first_name);
                  setInputLastName(userInfo?.last_name)
                  setInputtimeZone(userInfo?.timezone)
                  setInputCountry(userInfo?.country)
                  setInputWebsite(userInfo?.website)
                  setInputGit(userInfo?.git_url) */
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

    const handleAddButtonClick = () => {
        const newItem = {
            itemJob: inputValJob,
            itemCie: inputValCie,
            itemYear: inputValYear,
        };

        const newItems = [...items, newItem];

        setItems(newItems);
        setInputValJob('');
        setInputValCie('');
        setInputValYear('');
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
                                <Grid container>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="Business_name"
                                                label="Business Name"
                                                name="Business_name"
                                                autoComplete="Business Name"
                                                value={inputName}
                                                onChange={(event) => setInputName(event.target.value)}
                                            />
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

                                        {/* <Grid item xs={12} sm={6}>
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
                                    </Grid> */}
                                        <Grid item xs={8} sm={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                //onClick={() => handleUpdateProfile()}
                                                sx={{ mt: 3, mb: 2 }}>
                                                Save changes
                                            </Button>
                                        </Grid>
                                        {/* <Grid item xs={8} sm={12}>

                                        <Typography
                                            component="h1"
                                            variant="h6"
                                            sx={{ mt: 1, mb: 1 }}>
                                            Add Job offers
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={8} sm={3}>
                                        <TextField
                                            id="jobTitle"
                                            fullWidth
                                            label="Job Title"
                                            name="jobTitle"
                                            autoComplete="jobTitle"
                                            value={inputValJob}
                                            onChange={(event) => setInputValJob(event.target.value)}
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
                                            id="year"
                                            fullWidth
                                            label="Year"
                                            name="year"
                                            autoComplete="year"
                                            value={inputValYear}
                                            onChange={(event) => setInputValYear(event.target.value)}
                                        />

                                    </Grid>
                                    <Grid item xs={8} sm={3}>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            component="span"
                                            onClick={() => handleAddButtonClick()}
                                            sx={{ fontSize: '18pt', fontFamily: 'bold', fontWeight: 'bold' }}>
                                            +
                                        </Button>

                                    </Grid> */}




                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} md={5}>

                        <ProfileBusiness business={businessInfo!} />

                        {/* <Box
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
                                    mt: 10,
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
                                        Current profile
                                    </Typography>

                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        }}>
                                        <CardMedia
                                            component='img'
                                            sx={{
                                                width: '200px',
                                                height: '200px',
                                                borderRadius: '50%',
                                                mt: 2
                                            }}
                                            image="https://source.unsplash.com/random" />


                                        <CardContent sx={{ flexGrow: 1, width: '450px', textAlign: 'center' }}>
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
                                                    <IconButton sx={{position:'absolute', ml:45}}>
                                                        <DeleteIcon fontSize='medium' />
                                                    </IconButton>
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
                        </Box> */}
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
