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
  IconButton,
  Container,
  SearchWrapper } from '../styleCommon/Header'

  
function Navbar() {
  return (
    <Wrapper>
      <Container>
      <LogoWrapper>
        <Link to='./framecraft'>
          <img src={navbarlogo} alt="" style={{ width: '92%' }} />
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
      </Container>
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
const CommonAuthButton = `
    font-size: 17px;
    font-weight: 600;
    width: 135px;
    height: 38px;
    padding: 4px;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
`

const LoginButton = styled.div`
    ${CommonAuthButton}
    background-color: #ffffff;
    border: 2px solid rgba(58, 58, 58, 0.70);

    a {
      text-decoration: none;
      color: rgba(58, 58, 58, 0.70);
    }
`
const SignupButton = styled.div`
    ${CommonAuthButton}
    background-color: #D9534F;
    border: 2px solid #D9534F;
    margin-left: 12px;

    a {
      text-decoration: none;
      color: white;
    }
`

