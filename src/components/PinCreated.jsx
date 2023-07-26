import React, { useState } from 'react'
import { PinWrapper1 } from '../styleCommon/Pin'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'

function PinCreated({ imageUrl, title, likes }) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <PinWrapper1>
      <img src={imageUrl} alt="Unsplash" />
      <div className="info">
        <div className="title">{title}</div>
        <div className="actions">
          <div className="likes" onClick={handleLike}>
            {isLiked ? (
              <FavoriteIcon style={{ paddingBottom: '3px', color: '#D9534F' }} />
            ) : (
              <FavoriteBorderIcon style={{ paddingBottom: '3px' }} />
            )}
            {likes}
          </div>
          <div className="edit">
            <DriveFileRenameOutlineIcon className="icon" />
          </div>
        </div>
      </div>
    </PinWrapper1>
  )
}
export default PinCreated
