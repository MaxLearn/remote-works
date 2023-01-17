import { Button, Divider, IconButton } from '@mui/material'
import { Posting } from '../models/Posting'
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from "styled-components";
import { applyPosting } from '../hooks/user/postings/applyPosting';
import { Box } from '@mui/system';
import { getAccountType } from '../hooks/global/accountType';
import { addToFav } from '../hooks/user/postings/addTofav';

const CategoryTitle = styled.h4`

`

const JobTitle = styled.h1`

`
const CategoryText = styled.p`

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
            
            <JobTitle>{props.job_title}</JobTitle>
            <p>{props.business_name && props.business_name}<br></br>
              {props.country && props.country}<br></br>
            <input name="postingID" id="postingID"type="hidden" value={props._id}/>
            { getAccountType() === 'employee' &&
            <>
            <Button type="submit">Apply now</Button>  {props._id && <IconButton><FavoriteIcon fontSize='large' onClick={() => handleClicAddtoFav(props._id)}/></IconButton>}
            </>
            }
            </p>
            <Divider />
            <CategoryTitle>Salary</CategoryTitle>
            <CategoryText>+ de {props.salary && props.salary} $</CategoryText>
            <CategoryTitle>Job Type</CategoryTitle>
            <CategoryText>{props.field && props.field}</CategoryText>
            <CategoryTitle>Full job Description:</CategoryTitle>
            <CategoryText>{props.description && props.description}</CategoryText>
            <CategoryTitle>What you'll need</CategoryTitle>
            <CategoryText>{props.requirement && props.requirement}</CategoryText>
          <Divider />
        
    </Box>
      </>
  )
}

export default PostingBox