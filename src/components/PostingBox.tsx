import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'
import { Posting } from '../models/Posting'
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from "styled-components";

const CategoryTitle = styled.h4`
    
`

const JobTitle = styled.h1`

`
const CategoryText = styled.p`
    
`
function PostingBox(props: Posting) {
  return (
    <>
            <JobTitle>{props.job_title}</JobTitle>
            <p>Got to add company name here<br></br>
              {props.country}<br></br>
              <Button>Apply now</Button><IconButton><FavoriteIcon fontSize='large' /></IconButton>
            </p>
            <Divider />
            <CategoryTitle>Created date</CategoryTitle>
            <CategoryText>{props.created_date.toString()}</CategoryText>
            <CategoryTitle>Salary</CategoryTitle>
            <CategoryText>{props.salary}</CategoryText>
            <CategoryTitle>Job Type</CategoryTitle>
            <CategoryText>{props.field}</CategoryText>
            <CategoryTitle>Full job Description:</CategoryTitle>
            <CategoryText>{props.description}</CategoryText>
            <CategoryTitle>What you'll need</CategoryTitle>
            <CategoryText>{props.requirement}</CategoryText>
          <Divider />
        
    </>
  )
}

export default PostingBox