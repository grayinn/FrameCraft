import React from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import BackgrImage from '../assets/image/Landingpage.svg'

import HomeIMG3 from '../assets/image/ldp-image3.png'
import HomeIMG4 from '../assets/image/ldp-image4.png'
import HomeIMG5 from '../assets/image/ldp-image5.png'
import HomeIMG6 from '../assets/image/ldp-image6.png'
import HomeIMG7 from '../assets/image/ldp-image7.png'
import HomeIMG8 from '../assets/image/ldp-image8.png'
import HomeIMG10 from '../assets/image/home-img11.svg'
import HomeIMG11 from '../assets/image/home-img10.svg'
import HomeIMG1 from '../assets/image/home-img1.svg'
import HomeIMG2 from '../assets/image/home-img2.svg'


function Home () {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <BackgroundIMG>
          <img src={BackgrImage} alt="Background" />
        </BackgroundIMG>

        <LeftSide>
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
          <ImageLeft>
            <img className='img1' src={HomeIMG1} alt=""/>
            <img className='img2' src={HomeIMG2} alt=""/>
          </ImageLeft>
        </LeftSide>

        <RightSide> 
          <ImageRight>
            <div className='box1'>
              <div className='box'><img className='img3' src={HomeIMG3} alt="" /></div>
              <div className='box'><img className='img4' src={HomeIMG4} alt="" /></div>
              <div className='box'><img className='img5' src={HomeIMG5} alt="" /></div>
            </div>

              <div className='box'><img className='img6' src={HomeIMG6} alt="" /></div>
              <div className='box'><img className='img7' src={HomeIMG7} alt="" /></div>
              <div className='box'><img className='img8' src={HomeIMG8} alt="" /></div>
              <div className='box'><img className='img10' src={HomeIMG10} alt="" /></div>
              <div className='box'><img className='img11' src={HomeIMG11} alt="" /></div>
          </ImageRight>
        </RightSide>

      </Container>
    </Wrapper>
  )
}
export default Home


const Wrapper = styled.div`
  background-color: #D9534F;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const Container = styled.div`
  display: flex;
`

const BackgroundIMG = styled.div`
  position: absolute;

  img {
    object-fit: cover;
    width: 80%;
    padding-top: 1%;
  }
`

const LeftSide = styled.div`
  width: 80%;
`

const ContentWrapper = styled.div`
  float: left;
  position: relative;
`

const CommonContent = `
  width: 100%;
  padding-top: 7%;
  padding-left: 11%;
  color: #FFF;
  font-family: Fugaz One;
  h1 {
    font-size: 100px;
    font-weight: 400;
    line-height: 120px; 
  }
`
const Content1 = styled.div`
  ${CommonContent}
  text-shadow: 1px 2px 4px #C2403C;
`

const Content2 = styled.div`
  ${CommonContent}
  filter: blur(1.2px);
  position: absolute;
  top: 0;
  left: 0;
`

const Content3 = styled.div`
  width: 90%;
  color: #FFF;
  font-size: 22.5px;
  padding-left: 11%;
  opacity: 0.8999999761581421;
  padding-bottom: 27px;
`

const ImageLeft = styled.div`
  .img1 {
    width: 29%;
    margin-left: 39.5%;
    margin-right: 10px;
  }

  .img2 {
    width: 29%;
  }
`

// = body
const RightSide = styled.div`
  width: 69%;
`

// = container
const ImageRight = styled.div`
  columns: 3;
  column-gap: 10px;
  margin-right: 1%;

  .box1 {
    margin-top: 52%;
  }

  .box {
    width: 100%;
    margin-bottom: 10px;
    break-inside: avoid;
  }

  img {
    max-width: 100%;
  }

  .img6 {
    margin-top: 21%;
  }

  .img10 {
    margin-top: 35%;
  }
`

