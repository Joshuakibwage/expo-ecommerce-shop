import React from 'react'
import { SignIn } from "@clerk/clerk-react";


const LoginPage = () => {
  return (
    <div>
      <h1 className="text-accent">You need to log in</h1>
      <SignIn />
    </div>
  )
}

export default LoginPage
