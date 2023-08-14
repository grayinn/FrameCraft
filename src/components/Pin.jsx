import React, { useState } from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AVTuser from '../assets/image/avatar_user.svg'


function Pin({ imageUrl, title, likes, userName }) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  return (
    <PinWrapper>
      <ImageContainer>
        <img src={imageUrl} alt={title} />
        <PinInfo className="info">
          <PinTitle className='title'>{title}</PinTitle>

          <Likes className='likes' onClick={handleLike}>
            {isLiked ? (
              <FavoriteIcon style={{ paddingBottom: '3px', color: '#D9534F' }} />
            ) : (
              <FavoriteBorderIcon style={{ paddingBottom: '3px' }} />
            )}
            {likes}
          </Likes>
        </PinInfo>
      </ImageContainer>

      <UserInfo>
        <img className='avatar-user' src={AVTuser} alt=""/>
        <UserName>{userName}</UserName>
      </UserInfo>

    </PinWrapper>
  )
}
export default Pin

const PinWrapper = styled.div `
    position: relative;
    overflow: hidden;
    font-family: Noto Sans;

    &:hover {
      opacity: 0.9;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 20px;
      cursor: pointer;
      margin-bottom: 15px;
    }

    &:hover .info {
      opacity: 1;
      visibility: visible;
    }
`

const ImageContainer = styled.div`
    position: relative;
`

const PinInfo = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 15px;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    margin-bottom: 15px;
    border-radius: 0px 0px 20px 20px;
`

const Likes = styled.div`
`

const PinTitle = styled.div`
    font-weight: 600;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    cursor: pointer;

    .avatar-user {
      display: flex;
      width: 32px;
      margin-right: 8px;
    }
`

const UserName = styled.div`
     margin-bottom: 17px;
     color: black;
`



