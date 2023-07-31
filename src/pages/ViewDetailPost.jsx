import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import unsplash from '../api/unsplash'
import AVTuser from '../assets/image/avatar_user.svg'
import Avatar from '../assets/image/headeravt.svg'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'


function ViewDetailPost() {
  const [selectedImage, setSelectedImage] = useState(null)
  const { id } = useParams()
  const [isLiked, setIsLiked] = useState(false)
  

  const handleLike = () => {
    setIsLiked(!isLiked)
  }


  useEffect(() => {
    const fetchImageDetail = async (imageId) => {
      try {
        const response = await unsplash.get(`photos/${imageId}`)
        const imageData = response.data

        const { id, urls, description, likes, user } = imageData
        const userName = user && user.name ? user.name : 'Unknown'

        const selectedImageData = {
          id,
          imageUrl: urls.regular,
          title: description,
          likes,
          userName,
        }

        setSelectedImage(selectedImageData);
      } catch (error) {
        console.error('Error', error)
      }
    }

    fetchImageDetail(id)
  }, [id])

  return (
    <ViewDetailContainer>
      <Header />
      <HorizontalLine />
      <Container>
        <LeftSection>
          {selectedImage ? (
            <>
              <ImageWrapper>
                <img src={selectedImage.imageUrl} alt={selectedImage.title} />

                <LikesContainer className='likes' onClick={handleLike}>
                  {isLiked ? (
                    <FavoriteIcon style={{ marginRight: '4px', marginLeft: '42%', color: '#D9534F' }} />
                  ) : (
                    <FavoriteBorderIcon style={{ marginRight: '4px', marginLeft: '42%' }} />
                  )}
                  {selectedImage.likes}
                </LikesContainer>
              </ImageWrapper>
              <ImageTitle>{selectedImage.title}</ImageTitle>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </LeftSection>


        <RightSection>
          <UserInfor>
            <div className='user-inf'>
              <img className='avatar-user' src={AVTuser} alt=""/>
              <UserName>{selectedImage && selectedImage.userName}</UserName>
            </div>
            <FollowButton>Follow</FollowButton>
          </UserInfor>

          <Describe>
            <p>Lorem ipsum dolor sit amet consectetur. Lobortis sed commodo augue sed non at enim. Hendrerit tellus in dis non amet nulla viverra pharetra hac.</p>
          </Describe>

          <HorizontalLine style={{ width: '480px' }} />
{/* -------------------------------- */}
          <UserInfor2>
            <div className='user-inf2'>
              <img className='avatar-user2' src={AVTuser} alt=""/>
              <UserName2>Michael Jincho</UserName2>
            </div>
          </UserInfor2>
          <Describe2>
            <p>So great! I love it, thank you so much :3</p>
          </Describe2>
{/* ------------------------------- */}

          <HorizontalLine style={{ width: '480px', marginTop: '52%'}} />

          <YourComment>
            <img src={Avatar} alt=""/>
            <input placeholder='Write comment...'></input>
          </YourComment>
        </RightSection>

      </Container>
    </ViewDetailContainer>
  )
}
export default ViewDetailPost



const ViewDetailContainer = styled.div`
    height: 100vh;
`

const HorizontalLine = styled.div`
    width: 100%;
    border-top: 1px solid #CBCBCB;
    margin-top: 5px;
    margin-bottom: 20px;

`

const Container = styled.div`
    display: flex;
    font-family: Noto Sans;
    margin: 15%;
    margin-top: 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.18);

    padding: 60px 70px 50px 70px;
    height: 80vh;
`

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;

    img {
      width: 390px;
      max-height: 480px;
      object-fit: cover;
      border-radius: 20px;
    }
`

const ImageWrapper = styled.div`
    position: relative;
`

const LikesContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 15px;
    border-radius: 0px 0px 20px 20px;
    text-align: center;
    font-weight: 500;
`

const ImageTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    width: 390px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 0px;
`
// --------

const RightSection = styled.div`
    margin-left: 70px;
`

const UserInfor = styled.div`
    display: flex;
    cursor: pointer;

    .user-inf {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }

    .avatar-user {
      width: 40px;
      margin-right: 10px;
    }
`

const UserName = styled.div`
    font-size: 15px;
    font-weight: bold;
    width: 320px;
`

const FollowButton = styled.button`
    background-color: #D9534F;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 15px;
    height: 37px;
    width: 95px;
    font-weight: 400;
`

const YourComment = styled.div`

    img {
      width: 39px;
    }

    input {
      width: 430px;
      margin-left: 12px;
      padding: 9px;
      font-size: 14px;
      border-radius: 20px;
      border: 1px solid #C7C7C7;
      background: #FFF;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
`

const Describe = styled.div`
    p {
      padding-left: 50px;
      padding-top: 5px;
      color: #3A3A3A;
      font-size: 14.5px;
      font-weight: 300;
    }
`


// ----------------- 2 --------
const UserInfor2 = styled.div`
    display: flex;
    cursor: pointer;
    margin-left: 9px;

    .user-inf2 {
      display: flex;
      align-items: center;
    }

    .avatar-user2 {
      width: 32px;
      margin-right: 10px;
    }
`

const UserName2 = styled.div`
    font-size: 13px;
    font-weight: bold;
`

const Describe2 = styled.div`
    p {
      padding-left: 50px;
      color: #3A3A3A;
      font-size: 13px;
      font-weight: 300;
    }
`



