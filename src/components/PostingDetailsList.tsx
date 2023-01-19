import { Posting } from "../models/Posting"
import styled from "styled-components";
import { Divider, Grid } from "@mui/material";

const CategoryHeader = styled.h3`
text-align: center;

`

const CategoryTitle = styled.h4`
margin-left:25px;

`
const CategoryText = styled.p`
margin-left:25px;
margin-right:25px;
text-align: justify;
`

function PostingDetailsList(props: { detailsList: Posting }) {
  return (
    <>

      <Grid container>

      <Grid item xs={12} sm={12}
      sx={{  bgcolor: "rgb(16, 70, 123)", color:'white'}}>
          <CategoryHeader> JOB OFFER</CategoryHeader>
        </Grid>

        <Grid item xs={12} sm={6}>
          <CategoryTitle> Business name :</CategoryTitle>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CategoryText> {props.detailsList.business_name && props.detailsList.business_name}</CategoryText>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CategoryTitle> Title :</CategoryTitle>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CategoryText>{props.detailsList.job_title && props.detailsList.job_title}</CategoryText>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CategoryTitle> Country :</CategoryTitle>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CategoryText> {props.detailsList.country && props.detailsList.country}</CategoryText>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CategoryTitle> Salary :</CategoryTitle>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CategoryText>+ de {props.detailsList.salary && props.detailsList.salary}$</CategoryText>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={12}>
          <CategoryTitle>Description:</CategoryTitle>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CategoryText>{props.detailsList.description && props.detailsList.description}</CategoryText>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider/>
        </Grid>
        <Grid item xs={12} sm={12}>
        <CategoryTitle>Requirement:</CategoryTitle>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CategoryText>{props.detailsList.requirement && props.detailsList.requirement}</CategoryText>
          </Grid>
      </Grid>
    </>
  )
}

export default PostingDetailsList