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



export default function PostingsList() {

const [currentPosting, setCurrentPosting] = useState<Posting>()

const [postingArray, setPostingArray] = useState<Posting[]>([{
  _id: '',
  business_name: 'Tech.io',
  job_title: 'Full Stack dev',
  timezone: '',
  field: 'Software Devlopment',
  country: 'Canada',
  created_date: new Date(),
  description: 'You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming You are passionate about technology issues. You have an interest in creating and developing new applications and you are familiar with Java programming',
  salary: '$55,000 - $120,000 a year',
  start_date: new Date(),
  isContract: true,
  contract_length_in_months: 12,
  isRenewable: true,
  isPromoted: false,
  requirement: 'Deep working knowledge of Shopify platforms'
}]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setCurrentPosting(postingArray[0]);
  }, [postingArray]);


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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                  <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                  >
                    Job Postings
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
                              onClick={() => setCurrentPosting(posting)}
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
                                      {posting.description.substring(0, 150)}..
                                    </p>
                                  </>
                                  <Button>more detail...</Button>
                                </CardContent>
                              </Card>
                            </CardActionArea>
                          </Grid>
                        ))}
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  <Box
                    sx={{
                      bgcolor: "white",
                      height: "auto",
                      borderRadius: 2,
                      pl: 5,
                      pr: 5,
                      pt: 1,
                    }}
                  >
                    <Box
                      id="test"
                      sx={{
                        mt: 7,
                        bgcolor: "white",
                      }}
                    >
                      {currentPosting && <PostingBox {...currentPosting} />}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
                
                </>
  );
}