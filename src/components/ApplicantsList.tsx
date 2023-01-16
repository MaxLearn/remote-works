import { CardContent } from '@mui/material'
import { User } from '../models/User'

function ApplicantsList(props: { userList: Array<User>}) {
  return (
    <>
    {props.userList.map((userInfo) => {
        return                              <p>
                                                {userInfo.first_name && userInfo.first_name}  {userInfo.last_name && userInfo.last_name}<br></br>
                                                {userInfo.timezone && userInfo.timezone}<br></br>
                                                {userInfo.country && userInfo.country}<br></br>
                                                {userInfo.website && userInfo.website}<br></br>
                                                {userInfo.git_url && userInfo.git_url}<br></br>
                                            </p>
                                        
                                    
                                                })}
    </>
  )
}

export default ApplicantsList