import React from 'react'
import SignIn from '../components/Signin.tsx'
import { Outlet } from 'react-router-dom'

function SignInPage() {
  return (
    <>
<SignIn /> 
<Outlet />
    </>
 )
}

export default SignInPage