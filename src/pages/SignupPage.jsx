import React from 'react'
import { Wrapper, BrandLogo, Text, BackgroundIMG, GradientOverlay, SignupFormWrapper } from '../styleCommon/AuthPage'
import CoverAuth from '../assets/image/CoverAuth.png'
import SignUpForm from '../components/SignupForm'

function SignupPage() {
  return (
    <Wrapper>
      <BrandLogo>
        <Text>FrameCraft</Text>
      </BrandLogo>
      <BackgroundIMG style={{ backgroundImage: `url(${CoverAuth})` }} />
        <GradientOverlay />
      <SignupFormWrapper>
        <SignUpForm />
      </SignupFormWrapper>
    </Wrapper>
  )
}

export default SignupPage

