import { Box, Button, Card, CardContent, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getFavorites } from '../hooks/user/postings/getFavorites';
import { removeFromFav } from '../hooks/user/postings/removeFromFav';

function PostingListFavorites() {
    const [moreDetail, setMoreDetail] = React.useState(false);
    const [postingArray, setPostingArray] = useState<Array<any>>([]);
    const handleClicDetail = () => {
        setMoreDetail(true);
    };
    useEffect(() => {
        ((async () => {
            const value: any = await getFavorites();
            setPostingArray(value)
        })()).catch(console.error);
    }, []);
    const handleCloseDetail = () => {
        setMoreDetail(false);
    };

    const handleClicRemoveFromFav = (postingID: any) => {
        //hook goes here
        removeFromFav(postingID);
    }
  return (
<>
    <Box
    sx={{
        margin: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 2,
        mt: 15,
        bgcolor: "rgb(16, 70, 123)",
        maxWidth: 'lg',
        height: 800,
        width: '100%',
    }}>

    <Box
        sx={{
            width: '95%',
            height: 700,
            ml: 3,
         paddingTop:5
        }}>

        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>

            <CardContent
                sx={{
                    flexGrow: 1,
                    width: '100%',
                    textAlign: 'justify',
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
                                            <h1>{posting.job_title}</h1>
                                            <p>{posting.country}</p>
                                            <p>+ de {posting.salary} $</p>
                                        </>
                                        <Button onClick={handleClicRemoveFromFav}>Remove from favorites</Button>
                                        <Button onClick={handleClicDetail}>more detail...</Button>
                                        {/* <Dialog open={moreDetail} onClose={handleClicDetail}>
                                            <DialogTitle> <h4>{posting.job_title}</h4></DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>
                                                    Country: {posting.country}
                                                    <br></br>
                                                    <br></br>
                                                    Salary: {posting.salary}
                                                    <h5>Description:</h5>{posting.description}
                                                    <h5>Requirement:</h5>{posting.requirement}
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleCloseDetail}>Close</Button>
                                            </DialogActions>
                                        </Dialog> */}
                                    </CardContent>
                                </Card>

                            </Grid>
                        ))}
                </Grid>

            </CardContent>
        </Card>
    </Box>
    </Box>
    </>
  )
}

export default PostingListFavorites