import styled from "styled-components"
import React, { useState } from "react"
import { Link } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import navbarlogo from '../assets/image/logo.svg'
import Avatar from '../assets/image/headeravt.svg'

import ChangePasswordModal from "./Popup/P_ChangePass"
import ChangeInformationModal from "./Popup/P_ChangeInfor"

import { Wrapper, LogoWrapper, SearchBarWapper, IconButton, Container, SearchWrapper } from '../styleCommon/Header'
import ViewNoti from './ViewNoti'


function Header({ onSearch }) {
  // popup
  const [passwordModal, setPasswordModal] = useState(false)
  const [infoModal, setInfoModal] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  // search
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onSearch(searchQuery)
    }
  }

  
  const togglePasswordModal = () => {
    setPasswordModal(!passwordModal)
  }
  const toggleInfoModal = () => {
    setInfoModal(!infoModal)
  }
  const toggleNotification = () => {
    setShowNotification(!showNotification);
  }

  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <Link to='/mainpage'>
            <img src={navbarlogo} alt="" style={{ width: '240px' }} />
          </Link>
        </LogoWrapper>

        <SearchWrapper>
          <SearchBarWapper>
            <form onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
            </form>
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </SearchBarWapper>
        </SearchWrapper>

        <CreatePost>
          <AddIconButton>
              <AddIcon fontSize="small" />
          </AddIconButton>
          <AddIconText>
            <Link to='/createpost'>
              <p>Create Post</p>
            </Link>
          </AddIconText>
        </CreatePost>

        <IconsWrapper>
{/* 0. View notification */}
          <NotifIcon onClick={toggleNotification}>
              <NotificationsIcon fontSize="medium" />
          </NotifIcon>
          {showNotification && <ViewNoti />}

{/* --- */}
          <AvatarIcon>
              <AccountCircleIcon fontSize="large" />
              <Tooltip>
                <UserInfo>
                  <Link to='/profile'>
                      <img src={Avatar} alt=""/>
                  </Link>
                      <div className="user-info-text">
                          <Link to="/profile">
                              <span className="user-name">Nguyen Hong Nhung</span>
                          </Link>
                          <span className="username">nguyenhongnhung@gmail.com</span>
                      </div>
                </UserInfo>
                <HorizontalLine />

{/* 1. Popup Account Information */}
                <ChangeButton onClick={toggleInfoModal}>
                  Account Information
                </ChangeButton>
                <ChangeInformationModal showModal={infoModal} closeModal={toggleInfoModal} />

{/* 2. Popup Changepassword */}
                <ChangeButton onClick={togglePasswordModal}>
                  Change Password
                </ChangeButton>
                <ChangePasswordModal showModal={passwordModal} closeModal={togglePasswordModal} />
                <HorizontalLine />

{/* 3. Log out */}
                <Link to='/'>
                  <TooltipItem>Log Out</TooltipItem>
                </Link>

            </Tooltip>
          </AvatarIcon>
        </IconsWrapper>
      </Container>
    </Wrapper>
  )
}
export default Header


const CreatePost = styled.div`
    display: flex;
    border-radius: 20px;
    width: 10%;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    border: 1.5px solid #3A3A3A;
    padding: 8px;

    &:hover {
      background-color: #EBEBEB;
    }
`

const AddIconButton = styled.div`
    padding-right: 6px;
`

const AddIconText = styled.div`
    a {
      color: #3A3A3A;
      text-decoration: none;
    }
`

const IconsWrapper = styled.div`
    display: flex;
`

const NotifIcon = styled.div`
    display: flex;
    color: #3A3A3A;
    margin-top: 5px;
    margin-right: 70%;
    margin-left: 70%;
    cursor: pointer;
`

const AvatarIcon = styled.div`
    position: relative;
    color: #3A3A3A;
    display: flex;
    cursor: pointer;
`

const Tooltip = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 300px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.2);
    padding: 10px;
    display: none;
    cursor: pointer;
    z-index: 999;
    transition: opacity 0.2s;
    margin-top: 6px;
    padding-left: 10px;

    ${AvatarIcon}:hover & {
      display: block;
    }

    &:before {
      content: '';
      position: absolute;
      top: -10px;
      right: 10px;
      border: 5px solid transparent;
      border-bottom-color: #fff;
    }

    a {
      text-decoration: none;
    }
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    cursor: pointer;
    padding: 10px;

    img {
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
        margin-left: 10px;
    }

    .user-info-text {
        display: flex;
        flex-direction: column;
    }

    .user-info-text a {
        text-decoration: none;
    }

    .user-name {
        color: #000;
        font-size: 15px;
        font-weight: 500;
    }

    .username {
        color: #3A3A3A;
        font-size: 13px;
        font-weight: 300;
    }
`

const HorizontalLine = styled.div`
    width: 100%;
    border-top: 1px solid #D9D9D9;
    margin-top: 2px;
    margin-bottom: 2px;
`

const TooltipItem = styled.div`
    padding: 8px 22px;
    color: #3a3a3a;
    transition: background-color 0.2s;
    border-radius: 20px;
    color: #3A3A3A;
    font-size: 15px;

    &:hover {
      background-color: #f1f1f1;
      border-radius: 20px;
    }
`

//-------- POP UP -----------
const ChangeButton = styled.div`
    padding: 8px 22px;
    color: #3a3a3a;
    transition: background-color 0.2s;
    border-radius: 20px;

    color: #3A3A3A;
    font-size: 15px;

    &:hover {
      background-color: #f1f1f1;
      border-radius: 20px;
    }
`
