import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import { Link } from 'react-router-dom'
import navbarlogo from '../assets/image/logo.svg'
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'

import { 
  Wrapper, 
  LogoWrapper, 
  SearchBarWapper, 
  IconButton } from '../styleCommon/Header'

  
function Navbar() {
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

      <AuthButton>
        <LoginButton>
          <Link to='/login'>Log In</Link>
        </LoginButton>

        <SignupButton>
          <Link to='/signup'>Sign Up</Link>
        </SignupButton>
      </AuthButton>
    </Wrapper>
  )
}
export default Navbar


const AuthButton = styled.div`
    display: flex;

    > * {
      flex-shrink: 1;
    }
`

const LoginButton = styled.div`
    font-family: Noto Sans;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 0.2px;
    width: 135px;
    height: 38px;
    padding: 5px;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;

    background-color: #ffffff;
    border: 2px solid rgba(58, 58, 58, 0.70);

    a {
      text-decoration: none;
      color: rgba(58, 58, 58, 0.70);
    }
`
const SignupButton = styled.div`
    font-family: Noto Sans;
    font-size: 17px;
    font-weight: 600;
    width: 135px;
    height: 38px;
    padding: 5px;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 7px;
    text-align: center;
    background-color: #D9534F;
    border: 1.5px solid #D9534F;

    a {
      text-decoration: none;
      color: white;
    }
`

const SearchWrapper = styled.div`
`