import React from 'react';
import styled from "styled-components";
import BackgrImage from '../assets/image/Landingpage.svg';
//import Image1 from '../assets/image/ldp-image1.png'
//import Image2 from '../assets/image/ldp-image2.png'
//import Image3 from '../assets/image/ldp-image3.png'
// import Image4 from '../assets/image/ldp-image4.png'
// import Image5 from '../assets/image/ldp-image5.png'
// import Image6 from '../assets/image/ldp-image6.png'
// import Image7 from '../assets/image/ldp-image7.png'
// import Image8 from '../assets/image/ldp-image8.png'
// import Image9 from '../assets/image/ldp-image9.png'
// import Image10 from '../assets/image/ldp-image10.png'
// import Image11 from '../assets/image/ldp-image11.png'


function LandingPage() {
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

export default LandingPage;

const Wrapper = styled.div`
  background-color: #D9534F;
  background-size: cover;
  // background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
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

const Content1 = styled.div`
  width: 60%;
  height: 50%px;
  flex-shrink: 0;

  color: #FFF;
  text-shadow: 1px 2px 4px #C2403C;
  font-family: Fugaz One;
  font-size: 53px;
  font-style: normal;
  font-weight: 400;
  line-height: 125px; /* 126.214% */
  letter-spacing: 0.2px;

`

const Content2 = styled.div`
  width: 60%;
  height: 50%px;
  flex-shrink: 0;

  color: #FFF;
  font-family: Fugaz One;
  font-size: 53px;
  font-style: normal;
  font-weight: 400;
  line-height: 125px; 

  filter: blur(1px);
  letter-spacing: 0.2px;

  position: absolute;
  top: 0;
  left: 0;
`

const Content3 = styled.div`
  width: 50%;
  flex-shrink: 0;

  color: #FFF;
  font-family: Noto Sans;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`







