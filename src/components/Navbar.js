
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import navbarlogo from '../assets/image/logo.svg';
import styled from "styled-components";


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

          <IconButton>
            <SearchIcon />
          </IconButton>
          
          <form>
            <input type="text" placeholder="Search..." />
          </form>

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
  );
};

export default Navbar;


const Wrapper = styled.div`
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
  // flex: 1;
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

  // form < button {
  //   display: none;
  // }

  input:focus {
    outline: none;
  }
`

const IconButton = styled.div`
  padding-top: 6px;
  color: gray;
  cursor: pointer;
`

