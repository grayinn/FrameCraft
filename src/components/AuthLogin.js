import React from "react"
import { FacebookLoginButton } from "react-social-login-buttons"
import { GoogleLoginButton } from "react-social-login-buttons"
import { styled } from 'styled-components'

const AuthLogin = () => {
  return (
    <Wrapper>
      <GoogleLoginButton
        style={{
          fontFamily: "Noto Sans",
          fontSize: "15px",
          fontWeight: "600",
          color: "rgba(0, 0, 0, 0.54)",
          borderRadius: "20px",
          height: "40px",
          cursor: "pointer",
          width: "50%",
          boxShadow: "none",
          border: "0.5px solid #3A3A3A",
          marginLeft: "0px"
        }}
        activeStyle={{ background: "#F2F2F2" }}
      >
        Continue in with Google
      </GoogleLoginButton>

      <FacebookLoginButton
        // appId="237454459194145"
        // onResolve={(response) => {
        //   console.log(response)
        // }}
        // onReject={(error) => {
        //   console.log(error)
        // }}
        style={{
          fontFamily: "Noto Sans",
          fontSize: "15px",
          fontWeight: "500",
          background: "#3b5998",
          color: "white",
          borderRadius: "20px",
          cursor: "pointer",
          boxShadow: "none",
          width: "50%",
          height: "40px",
          display: "flex",
          marginLeft: "0px"
        }}
        activeStyle={{ background: "#314A7D" }}
        >
        Continue with Facebook
      </FacebookLoginButton>
    </Wrapper>
  );
};

export default AuthLogin

const Wrapper = styled.div`
`
