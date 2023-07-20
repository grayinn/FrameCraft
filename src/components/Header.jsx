import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
// import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import navbarlogo from '../assets/image/logo.svg'

import { 
  Wrapper, 
  LogoWrapper, 
  SearchBarWapper, 
  IconButton,
  Container,
  SearchWrapper } from '../styleCommon/Header'

const Header = () => {
  return (
    <Wrapper>
      <Container>
      <LogoWrapper>
        <Link to='./framecraft'>
          <img src={navbarlogo} alt="" style={{ width: '240px' }} />
        </Link>
      </LogoWrapper>

      <SearchWrapper>
        <SearchBarWapper>
          <form>
            <input type="text" placeholder="Search..." />
          </form>

          <IconButton>
            <SearchIcon />
          </IconButton>

        </SearchBarWapper>
      </SearchWrapper>

      <CreatePost>
        <AddIconButton>
            <AddIcon fontSize="small" />
        </AddIconButton>

        <AddIconText>
          <Link to='./createpost'>
            <p>Create Post</p>
          </Link>
        </AddIconText>
      </CreatePost>

      <IconsWrapper>
        <NotifIcon>
            <NotificationsIcon fontSize="medium" />
        </NotifIcon>
        <AvatarIcon>
            <AccountCircleIcon fontSize="large" />
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
    color: #3A3A3A;
    display: flex;
    cursor: pointer;
`