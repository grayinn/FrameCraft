import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
//import { styled } from 'styled-components';
//import React, { useState } from 'react';

const CustomGoogleLogin = () => {

    return (
        <GoogleOAuthProvider clientId="<your_client_id>">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    )
}

export default CustomGoogleLogin;

