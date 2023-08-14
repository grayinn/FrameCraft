import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import avatar from '../assets/image/headeravt.svg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'


const Comment = ({ comment, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(comment.text)
    const [showOptionsMenu, setShowOptionsMenu] = useState(false)

    const handleEdit = () => {
      setIsEditing(true)
      setShowOptionsMenu(false)
    }

    const handleSave = () => {
      if (editedText.trim() !== '') {
        onUpdate(comment.id, editedText)
        setIsEditing(false)
      }
    }

    const toggleOptionsMenu = () => {
      setShowOptionsMenu(!showOptionsMenu)
    }


    return (
      <CommentContainer>
        <div className="user-inf2">
          <UserInfor2>
            <img className="avatar-user2" src={avatar} alt="" />
            <h6>Nguyen Hong Nhung</h6>
          </UserInfor2>

          <CommentContent>
            <div className="comment-content">
              {isEditing ? (
                <>
                  <textarea
                    value={editedText}
                    style={{
                      fontSize: '13px',
                      padding: '5px',
                      border: '0.5px solid #D9D9D9',
                      borderRadius: '5px',
                    }}
                    onChange={(e) => setEditedText(e.target.value)}
                  ></textarea>
                  <button className="btn-save" onClick={handleSave}>
                    Save
                  </button>
                </>
              ) : (
                <p>{comment.text}</p>
              )}
            </div>
            <div className='options'>
              {isEditing ? null : (
              <MoreHorizIcon style={{ marginBottom: '5px', marginLeft: '43px'}} onClick={toggleOptionsMenu} />
              )}
              <OptionsMenu show={showOptionsMenu && !isEditing}>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => onDelete(comment.id)}>Delete</button>
              </OptionsMenu>
            </div>
          </CommentContent>
        </div>
      </CommentContainer>
    )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}
export default Comment


const CommentContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;

    .avatar-user2 {
      width: 32px;
      margin-right: 10px;
    }

    textarea {
      margin-left: 50px;
      height: 40px;
      width: 350px;

      &:focus {
        outline: none;
        border-color: #3498db;
      }
    }

    .comment-content {
      flex: 1;

    p {
      font-size: 13px;
      padding-left: 50px;
      color: #3A3A3A;
      font-weight: 300;
    }

    .btn-save {
      position: absolute;
      margin-left: 20px;
      width: 65px;
      padding: 4px 0px 4px 0px;
      font-size: 13px;
      border: 1px solid #E6E6E6;
      border-radius: 5px;
      background-color: #F4F4F4;
    }
  }
`

const UserInfor2 = styled.div`
    display: flex;
    cursor: pointer;
    margin-left: 9px;
    align-items: center;

    h6 {
      font-size: 13px;
      font-weight: bold;
      align-items: center;
      margin-bottom: 0;
    }
`

const CommentContent = styled.div`
  display: flex;

  .options {
    position: fixed;
    margin-left: 27.5%;
  }
`

const OptionsMenu = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};

  button {
    display: flex;
    flex-wrap: nowrap;
    width: 65px;
    padding: 4px 0px 4px 0px;
    font-size: 13px;

    border: 1px solid #E6E6E6;
    border-radius: 5px;
    margin-bottom: 2px;
    background-color: #F4F4F4;
    justify-content: center;

    &:hover {
      background-color: #E0E0E0;
    }
  }
`

