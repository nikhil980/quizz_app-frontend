import React, { Fragment } from 'react'
import { AuthLogin } from '../../component/Auth/AuthLogin'
import Navbar from '../../component/Navbar'

const Login = () => {
  return (
    <Fragment>
      <Navbar route="Login"/>
      <AuthLogin/>
    </Fragment>
  )
}

export default Login;

