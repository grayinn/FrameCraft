import React from 'react'
import LoginForm from '../components/LoginForm'
import { Wrapper, BrandLogo, Text, BackgroundIMG, GradientOverlay, LoginFormWrapper } from '../styleCommon/Auth'

import CoverAuth from '../assets/image/CoverAuth.png'

function LoginPage() {
  return (
    <Wrapper>
      <BrandLogo>
        <Text>FrameCraft</Text>
      </BrandLogo>
      <BackgroundIMG style={{ backgroundImage: `url(${CoverAuth})` }} />
        <GradientOverlay />
      <LoginFormWrapper>
        <LoginForm />
      </LoginFormWrapper>
    </Wrapper>
  )
}

export default LoginPage
