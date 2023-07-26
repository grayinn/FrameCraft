import React, { useState } from 'react'
import { PinWrapper } from '../styleCommon/Pin'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Pin({ imageUrl, title, likes }) {

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <PinWrapper>
      <img src={imageUrl} alt="Unsplash" />
      <div className="info">
        <div className='title'>{title}</div>
        <div className='likes' onClick={handleLike}>
          {isLiked ? (
            <FavoriteIcon style={{ paddingBottom: '3px', color: '#D9534F' }} />
          ) : (
            <FavoriteBorderIcon style={{ paddingBottom: '3px' }} />
          )}
          {likes}
        </div>
      </div>
    </PinWrapper>
  )
}
export default Pin
