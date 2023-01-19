import { User } from '../models/User'
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
text-align: justify;
`

function ApplicantsList(props: { userList: Array<User> }) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12}
          sx={{ bgcolor: "rgb(16, 70, 123)", color: 'white' }}>
          <CategoryHeader>APPLICANTS</CategoryHeader>
        </Grid>
      </Grid>
      {props.userList.map((userInfo) => {
        return <p>
          <Grid container sx={{border:1}}>
            <Grid item xs={12} sm={6}>
              <CategoryTitle>Name:</CategoryTitle>
            </Grid>

            <Grid item xs={12} sm={6}>
              <CategoryText>{userInfo.first_name && userInfo.first_name}  {userInfo.last_name && userInfo.last_name}</CategoryText>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CategoryTitle> TimeZone:</CategoryTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CategoryText> {userInfo.timezone && userInfo.timezone}</CategoryText>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CategoryTitle>Country:</CategoryTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CategoryText> {userInfo.country && userInfo.country}</CategoryText>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CategoryTitle> Website:</CategoryTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CategoryText><a href='http://localhost:3000/remote-works'> {userInfo.website && userInfo.website}</a></CategoryText>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CategoryTitle>Github: </CategoryTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CategoryText> <a href='http://localhost:3000/remote-works'>{userInfo.git_url && userInfo.git_url}</a></CategoryText>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CategoryTitle>email: </CategoryTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CategoryText> <a href='http://localhost:3000/remote-works'>{userInfo.email && userInfo.email}</a></CategoryText>
            </Grid>
          
          </Grid>
        </p>

      })}

    </>
  )
}

export default ApplicantsList