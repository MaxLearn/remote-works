import { Button, Divider, Grid, IconButton } from '@mui/material'
import { Posting } from '../models/Posting'
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from "styled-components";
import { applyPosting } from '../hooks/user/postings/applyPosting';
import { Box } from '@mui/system';
import { getAccountType } from '../hooks/global/accountType';
import { addToFav } from '../hooks/user/postings/addTofav';

const CategoryHeader = styled.h1`
text-align: center;

`

const CategoryTitle = styled.h4`
margin-left:25px;

`
const CategoryText = styled.p`
margin-right:25px;
margin-left: 25px;
text-align: justify;
`

function PostingBox(props: Posting) {

  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const postingID: any = data.get("postingID");
    applyPosting(postingID);
    alert("You have applied!")
  }
const handleClicAddtoFav = (postingID: any) => {
  addToFav(postingID);
  alert("added to favorites!");
}
  return (
    
    <>
   
    <Box
    
            component="form"
            onSubmit={handleSubmit}
            >
              <Grid container>
              <Grid item xs={12} sm={12}
              sx={{ bgcolor: "rgb(16, 70, 123)", color: 'white' }}>
            <CategoryHeader>{props.job_title}</CategoryHeader>
            </Grid>
            <Grid item xs={12} sm={6}>
            <CategoryTitle>Business name: </CategoryTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
           <CategoryText>{props.business_name && props.business_name}</CategoryText>
           </Grid>
           <Grid item xs={12} sm={6}>
            <CategoryTitle>Country: </CategoryTitle>
            </Grid>
           <Grid item xs={12} sm={6}>
              <CategoryText>{props.country && props.country}</CategoryText>
            </Grid>
            <input name="postingID" id="postingID"type="hidden" value={props._id}/>
            { getAccountType() === 'employee' &&
            <>
            <Button type="submit">Apply now</Button>  {props._id && <IconButton><FavoriteIcon fontSize='large' onClick={() => handleClicAddtoFav(props._id)}/></IconButton>}
            </>
            }

            <Divider />
            <Grid container>
            <Grid item xs={12} sm={6}>
            <CategoryTitle>Salary</CategoryTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
            <CategoryText>+ de {props.salary && props.salary} $</CategoryText>
            </Grid>
            <Grid item xs={12} sm={6}>
            <CategoryTitle>TimeZone</CategoryTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
            <CategoryText>{props.timezone && props.timezone}</CategoryText>
            </Grid>
            <Grid item xs={12} sm={12}>
            <CategoryTitle>Full job Description:</CategoryTitle>
            </Grid>
            <Grid item xs={12} sm={12}>
            <CategoryText>{props.description && props.description}</CategoryText>
            </Grid>
            <Grid item xs={12} sm={12}>
            <CategoryTitle>Requirements</CategoryTitle>
            </Grid>
            <Grid item xs={12} sm={12}>
            <CategoryText>{props.requirement && props.requirement}</CategoryText>
            </Grid>
        </Grid>
        </Grid>
    </Box>

      </>
  )
}

export default PostingBox