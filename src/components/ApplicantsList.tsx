import { CardContent } from '@mui/material'
import { User } from '../models/User'

function ApplicantsList(props: { userList: Array<User>}) {
  return (
    <>
    {props.userList.map((userInfo) => {
        <CardContent
     sx={{
         flexGrow: 1,
         width: '450px',
         textAlign: 'center',
         mt: 15
        }}>
                                        {userInfo && (
                                            <span>
                                                {userInfo.first_name}  {userInfo.last_name}<br></br>
                                                {userInfo.timezone}<br></br>
                                                {userInfo.country}<br></br>
                                                {userInfo.website}<br></br>
                                                {userInfo.git_url}<br></br>
                                            </span>
                                        )}
                                    </CardContent>
                                                })}
    </>
  )
}

export default ApplicantsList