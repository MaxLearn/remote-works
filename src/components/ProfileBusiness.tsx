import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardMedia, CardContent, Divider, autocompleteClasses, CardActionArea, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom"
import { getBusinessProfile } from '../hooks/business/account/getBusinessProfile.ts';
import { Business } from "../models/Business";
import { Posting } from '../models/Posting';
import { getBusinessPostings } from '../hooks/business/postings/getBusinessPostings.ts';
import { User } from '../models/User';
import { getApplicants } from '../hooks/business/postings/getApplicants';
import ApplicantsList from './ApplicantsList';
import PostingBox from './PostingBox';
import PostingDetailsList from './PostingDetailsList';
import { getPostingDetails } from '../hooks/business/postings/getPostingDetails.ts';


export default function ProfileBusiness(props: { business: Business }) {

    const theme = createTheme();
    const navigate = useNavigate();
    const [businessInfo, setBusinessInfo] = useState<Business>(props.business!);
    const [postingArray, setPostingArray] = useState<Array<any>>([]);
    const [currentPosting, setCurrentPosting] = useState<Posting>()

    const [seeApplicants, setSeeApplicants] = React.useState(false);
    const [currentApplicants, setCurrentApplicants] = useState<Array<any>>();

    const [seeDetails, setSeeDetails] = React.useState(false);
    const [currentDetails, setCurrentDetails] = useState<Posting>();


    const handleSeeApplicants = async (postingID: string) => {
        const applicants = await getApplicants(postingID);
        console.log("postingID:" + postingID);
        console.log(applicants);
        setCurrentApplicants(applicants);
        setSeeApplicants(true);

    }

    const handleSeeDetails = async (postingID: string) => {
        const details = await getPostingDetails(postingID);
        console.log("postingID:" + postingID);
        console.log(details);
        setCurrentDetails(details);
        setSeeDetails(true);

    }

    // const handleClicDetail = () => {
    //     setMoreDetail(true);
    // };

    const handleCloseDetail = () => {
        setSeeDetails(false);
    };

   
    const handleCloseApplicants = () => {
        setSeeApplicants(false);
    };


    useEffect(() => {
        setCurrentPosting(postingArray[0])
        }, [postingArray] ) 

    useEffect(() => {
        ((async () => {
            const post = await getBusinessPostings();
            const value = await getBusinessProfile();

            console.log(post);
            console.log(value);

            setBusinessInfo(value!);
            setPostingArray(post);
        })()).catch(console.error);
    }, []);
   
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
                                            width: '100%',
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
                                    height: 700,
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
                                            width: '100%',
                                            textAlign: 'justify',
                                            mt: 5,
                                            overflowY: 'scroll'
                                        }}>


                                        <Grid container spacing={4}>
                                            {postingArray &&
                                                postingArray.map((posting) => (
                                                    <Grid item xs={12} sm={12}>

                                                        <Card
                                                            sx={{
                                                                height: "100%",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                            }}
                                                        >
                                                            <CardContent sx={{ flexGrow: 1 }}>
                                                                <>
                                                                    <h1>{posting.job_title && posting.job_title}</h1>
                                                                    <p>{posting.country && posting.country}</p>
                                                                    <p> + de {posting.salary && posting.salary} $</p>
                                                                </>
                                                                <Button onClick={()=>handleSeeDetails(posting._id)}>more detail...</Button>                                                   
                                                                <Dialog sx={{width:'100%'}} open={seeDetails} onClose={handleSeeDetails}>                                    
                                                                    <DialogContent>
                                                                        <DialogContentText>
                                                                        {currentDetails && <PostingDetailsList detailsList={currentDetails} />}
                                                                        </DialogContentText>
                                                                    </DialogContent>
                                                                    <DialogActions>
                                                                        <Button onClick={handleCloseDetail}>Close</Button>
                                                                    </DialogActions>
                                                                </Dialog>
                                                                 <Button onClick={()=>handleSeeApplicants(posting._id)}>see applicants</Button>
                                                                 <Dialog sx={{width:'100%'}} open={seeApplicants} onClose={handleSeeApplicants}>
                                                                    <DialogContent>
                                                                        <DialogContentText>
                                                                        {currentApplicants && <ApplicantsList userList={currentApplicants} />}
                                                                        </DialogContentText>
                                                                    </DialogContent>
                                                                    <DialogActions>
                                                                        <Button onClick={handleCloseApplicants}>Close</Button>
                                                                    </DialogActions>
                                                                </Dialog>
                                                            </CardContent>
                                                        </Card>
                                                    </Grid>
                                                ))}
                                        </Grid>

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
