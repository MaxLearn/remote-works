import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardActionArea} from '@mui/material';
import { Posting } from '../models/Posting';
import PostingBox from './PostingBox';
import { getPostings } from '../hooks/getPostings.ts'; 
import { getBusinessPostings } from '../hooks/business/postings/getBusinessPostings';



export default function PostingsListBusiness() {

const [postingArray, setPostingArray] = useState<Array<any>>();

  useEffect(() => {
    ((async () => {
        const value = await getBusinessPostings();
        setPostingArray(value)

    })()).catch(console.error);
}, []);

  return (
    <>
    <Container
            sx={{
              py: 2,
              borderRadius: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
              overflowY: "scroll",
              height: 700,
            }}
            maxWidth="lg"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              
               
                  <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                  >
                    My current postings
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Grid container spacing={4}>
                      {postingArray &&
                        postingArray.map((posting) => (
                          <Grid item xs={12} sm={12}>
                            <CardActionArea
                             // onClick={() => deletePosting(posting._id)}
                            >
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
                                    <p>{posting.salary}</p>
                                    <p>
                                    {posting.description && posting.description.substring(0, 150)}
                                    </p>
                                  </>
                                  <Button>delete</Button>
                                </CardContent>
                              </Card>
                            </CardActionArea>
                          </Grid>
                        ))}
                    </Grid>
                  </Box>
                   
            </Box>
          </Container>
                
                </>
  );
}