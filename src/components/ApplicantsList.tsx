import { User } from '../models/User'

function ApplicantsList(props: { userList: Array<User> }) {
  return (
    <>
      {props.userList.map((userInfo) => {
        return <p>
          Name:  {userInfo.first_name && userInfo.first_name}  {userInfo.last_name && userInfo.last_name}<br></br>
          TimeZone:  {userInfo.timezone && userInfo.timezone}<br></br>
          Country:  {userInfo.country && userInfo.country}<br></br>
          Wemsite: <a href='http://localhost:3000/remote-works'> {userInfo.website && userInfo.website}</a> <br></br>
          Github: <a href='http://localhost:3000/remote-works'>{userInfo.git_url && userInfo.git_url}</a><br></br>
        </p>


      })}
    </>
  )
}

export default ApplicantsList