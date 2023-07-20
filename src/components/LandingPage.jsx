import React from 'react'
import styled from "styled-components"
import BackgrImage from '../assets/image/Landingpage.svg'
//import Image1 from '../assets/image/ldp-image1.png'
//import Image2 from '../assets/image/ldp-image2.png'
//import Image3 from '../assets/image/ldp-image3.png'


const LandingPage = () => {
  return (
      <Wrapper>
          <BackgroundIMG>
            <img src={BackgrImage} alt="Background" />
          </BackgroundIMG>

          <ContentWrapper>
            <Content1>
              <h1>Find Stunning Images in Seconds</h1>
            </Content1>

            <Content2>
              <h1>Find Stunning Images in Seconds</h1>
            </Content2>

            <Content3>
              <p>Discover a vast collection of stunning images at FrameCraft, your go-to destination 
                for effortless image search.</p>
            </Content3>
          </ContentWrapper>
      </Wrapper>
  )
}
export default LandingPage


const Wrapper = styled.div`
  background-color: #D9534F;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`

const BackgroundIMG = styled.div`
  position: absolute;

  img {
    object-fit: cover;
    width: 90%;
    margin-top: 20px;
  }
`

const ContentWrapper = styled.div`
  float: left;
  margin-left: 50px;
  margin-top: 70px;
  position: relative;
`
const CommonContent = `
  width: 60%;
  height: 50%;
  flex-shrink: 0;
  color: #FFF;
  font-family: Fugaz One;
  font-size: 53px;
  font-weight: 400;
  line-height: 125px; 
  letter-spacing: 0.2px;
`
const Content1 = styled.div`
  ${CommonContent}
  text-shadow: 1px 2px 4px #C2403C;
`

const Content2 = styled.div`
  ${CommonContent}
  filter: blur(1px);
  position: absolute;
  top: 0;
  left: 0;
`

const Content3 = styled.div`
  width: 50%;
  color: #FFF;
  font-family: Noto Sans;
  font-size: 25px;
  font-weight: 400;
  line-height: normal;
`







