import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { Link } from 'react-router-dom'
import navbarlogo from '../assets/image/logo.svg'
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import AddIcon from '@mui/icons-material/Add'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'


const Header = () => {
  return (
    <Wrapper>
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
            <p>Create Post</p>
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

    </Wrapper>
  )
}

export default Header

const Wrapper = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin-left: 50px;
    margin-right: 50px;
`

const LogoWrapper = styled.div`
    cursor: pointer;
    padding-top: 10px;
`

const SearchWrapper = styled.div`
    margin-left: 80px;
`

const SearchBarWapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 38px;
    width: 100%
    border-radius: 50px;
    border: 1.5px solid #D9534F;
    padding-left: 10px;

    width: 637px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #C6C6C6;
    background: var(--light-grey-input-fiels-forms, #F6F6F6);

    form {
    display: flex;
    flex: 1;
    }

    form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-family: Noto Sans;
    font-size: 15px
    }

    input:focus {
    outline: none;
    }
`
const IconButton = styled.div`
    color: gray;
    cursor: pointer;
    padding-right: 6px;
`
const CreatePost = styled.div`
    display: flex;
    border-radius: 20px;
    width: 9%;
    height: 40px;
    font-family: Noto Sans;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    border: 1.5px solid #3A3A3A;
    padding: 7px;

    &:hover {
        background-color: #F2F2F2;
    }

    margin-left: 60px;
`

const AddIconButton = styled.div`
    margin-right: 3px;
`

const AddIconText = styled.div`
`

const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const NotifIcon = styled.div`
    color: #3A3A3A;
    margin-right: 6px;
    display: flex;
    margin-top: 5px;
    margin-right: 50px;
    cursor: pointer;
`

const AvatarIcon = styled.div`
    color: #3A3A3A;
    display: flex;
    cursor: pointer;
`