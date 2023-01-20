import { Posting } from "../models/Posting"
import styled from "styled-components";
import { Box, Button, Divider, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { Business } from "../models/Business";
import { createBusinessPostings } from "../hooks/business/postings/createBusinessPostings";

const CategoryHeader = styled.h3`
text-align: center;

`


function ModifyPosting(props: { detailsList: Posting }) {

    const [postingArray, setPostingArray] = useState<Array<Posting>>();
    const [businessInfo, setBusinessInfo] = useState<Business>();
    const [inputStartDate, setStartDate] = React.useState<Dayjs | null>(null);
    const [inputJobTitle, setInputJobTitle] = useState('');
    const [inputTimeZone, setInputTimeZone] = useState('');
    const [inputCountry, setInputCountry] = useState('');
    const [inputSalary, setInputSalary] = useState('');
    const [inputContract, setInputContract] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputRequirement, setInputRequirement] = useState('');
    let [update, setUpdate] = useState(1);
    const [seeDetails, setSeeDetails] = React.useState(false);
    const [currentDetails, setCurrentDetails] = useState<Posting>();
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const inputJobType = data.get("controlled-radio-buttons-group")
        const answerPromoted = data.get("isPromoted")
        const newPostingJob = {
            job_title: inputJobTitle,
            timeZone: inputTimeZone,
            country: inputCountry,
            salary: inputSalary,
            starDate: inputStartDate,
            contractLenght: inputContract,
            description: inputDescription,
            requirement: inputRequirement,
            jobType: inputJobType,
            isPromoted: answerPromoted
        };

        createBusinessPostings(newPostingJob);

        setUpdate(update++);

        document.location.reload();


    };
    
    return (
        <>

            <Grid container>

                <Grid item xs={12} sm={12}
                    sx={{ bgcolor: "rgb(16, 70, 123)", color: 'white' }}>
                    <CategoryHeader> Modify informations</CategoryHeader>
                </Grid>

                <Box component="form" onSubmit={handleSubmit}
                    sx={{
                        ml: 3,
                        mr: 3
                    }}>
                    <Grid container  sx={{ mt: 5, mb: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="job_title"
                                    label="Job Title"
                                    name="job_title"
                                    autoComplete="Job Title"
                                    value={inputJobTitle}
                                    onChange={(event) => setInputJobTitle(event.target.value)}
                                />
                            </Grid>


                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Time Zone</InputLabel>
                                    <Select
                                        required
                                        id="timezone"
                                        value={inputTimeZone}
                                        label="Time Zone"
                                        onChange={(event) => setInputTimeZone(event.target.value)}>
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

                            <Grid item xs={12} sm={6}>
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

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Salary</InputLabel>
                                    <Select
                                        required
                                        id="salary"
                                        value={inputSalary}
                                        label="Salary"
                                        onChange={(event) => setInputSalary(event.target.value)}>
                                        <MenuItem value={40000}>+ de 40 000 CAD </MenuItem>
                                        <MenuItem value={60000}>+ de 60 000 CAD</MenuItem>
                                        <MenuItem value={80000}>+ de 80 000 CAD</MenuItem>
                                        <MenuItem value={100000}>+ de 100 000 CAD</MenuItem>
                                        <MenuItem value={120000}>+ de 120 000 CAD</MenuItem>
                                        <MenuItem value={140000}>+ de 140 000 CAD</MenuItem>
                                        <MenuItem value={160000}>+ de 160 000 CAD</MenuItem>
                                        <MenuItem value={180000}>+ de 180 000 CAD</MenuItem>
                                        <MenuItem value={200000}>+ de 200 000 CAD</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} >
                                <fieldset style={{ color: '#ababab' }}>
                                    <legend>Job Type</legend>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        aria-required>
                                        <FormControlLabel sx={{ ml: 15 }} value="fullTime" control={<Radio />} label="Full time" />
                                        <FormControlLabel sx={{ ml: 15 }} value="PartTime" control={<Radio />} label="Part time" />
                                        <FormControlLabel sx={{ ml: 15 }} value="Contract" control={<Radio />} label="Contract" />
                                    </RadioGroup>
                                </fieldset>
                            </Grid>


                            <Grid item xs={12} sm={5}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Start date"
                                        value={inputStartDate}
                                        onChange={(newValue) => {
                                            setStartDate(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={12} sm={5}>
                                <FormControl fullWidth>
                                    <InputLabel>Contract Lenght</InputLabel>
                                    <Select
                                        id="contract"
                                        value={inputContract}
                                        label="Contract lenght"
                                        onChange={(event) => setInputContract(event.target.value)}>
                                        <MenuItem value={'1 week'}>1 week </MenuItem>
                                        <MenuItem value={'2 weeks'}>2 weeks </MenuItem>
                                        <MenuItem value={'3 weeks'}>3 weeks </MenuItem>
                                        <MenuItem value={'1 Month'}>1 Month </MenuItem>
                                        <MenuItem value={'2 Months'}>2 Months </MenuItem>
                                        <MenuItem value={'3 Months'}>3 Months </MenuItem>
                                        <MenuItem value={'4 Months'}>4 Months </MenuItem>
                                        <MenuItem value={'5 Months'}>5 Months </MenuItem>
                                        <MenuItem value={'6 Months'}>6 Months </MenuItem>
                                        <MenuItem value={'7 Months'}>7 Months </MenuItem>
                                        <MenuItem value={'8 Months'}>8 Months </MenuItem>
                                        <MenuItem value={'9 Months'}>9 Months </MenuItem>
                                        <MenuItem value={'10 Months'}>10 Months </MenuItem>
                                        <MenuItem value={'11 Months'}>11 Months </MenuItem>
                                        <MenuItem value={'1 Year'}>1 Year </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} mt={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label=" Job Description"
                                    multiline rows={10}
                                    name="description"
                                    autoComplete="description"
                                    value={inputDescription}
                                    onChange={(event) => setInputDescription(event.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="requirement"
                                    label=" Requirements"
                                    multiline rows={10}
                                    name="requirement"
                                    autoComplete="requirement"
                                    value={inputRequirement}
                                    onChange={(event) => setInputRequirement(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} >
                                <fieldset style={{ color: '#ababab' }}>
                                    <legend>I want to promote this Posting</legend>
                                    <RadioGroup
                                        name="isPromoted"
                                        aria-required>
                                        <FormControlLabel sx={{ ml: 15 }} value={true} control={<Radio />} label="Yes" />
                                        <FormControlLabel sx={{ ml: 15 }} value={false} control={<Radio />} label="No" />
                                    </RadioGroup>
                                </fieldset>
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
            </Grid>

        </>
    )
}


export default ModifyPosting;