import React, { useState } from 'react';
//import React from 'react';
import { Form } from 'react-bootstrap';
//import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from 'styled-components';
//import VisibilityIcon from '@mui/icons-material/Visibility';
//import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import CustomGoogleLogin from './AuthGoogle'


function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Gọi hàm onLogin và truyền thông tin đăng nhập
        onLogin({ email, password });
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <Wrapper onSubmit={handleSubmit}>
            <StyledTitle>
                <h1>Log in</h1>
            </StyledTitle>

            <FormGroup>
                <StyledEmail
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="new-email"
                />
            </FormGroup>

            <FormGroup>
                <StyledPassword
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"                 
                />
                <VisibilityIcon onClick={handleTogglePasswordVisibility}>
                </VisibilityIcon>

            </FormGroup>

            <StyledAuth>
                <Form.Check
                    type="checkbox"
                    label={<RememberLabel>Remember me</RememberLabel>}
                />
                <ForgotLink href="/forgotpassword">Forgot password</ForgotLink>
            </StyledAuth>
    

            <StyledButton variant="primary" type="submit">
                <p>Log in</p>
            </StyledButton>

            <CustomGoogleLogin />

        </Wrapper>
    );
};

export default LoginForm;

const Wrapper = styled(Form)`
    //background-color: green;
    width: 40%;
    padding: 65px 40px 30px 40px;
`

const StyledTitle = styled.nav`
    width: 50%;
    height: 78px;
    flex-shrink: 0;

    color: #000;
    font-family: Noto Sans;
    font-size: 55px;
    //font-style: normal;
    font-weight: 700;
    //line-height: normal;
    //margin-left: 8px;

    margin-bottom: 15px;
`

const FormGroup = styled.div`
    display: flex;
    width: 100%;
    flex-shrink: 0;

`

const StyledEmail = styled(Form.Control)`
    height: 40px;
    background-color: white;
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid #C7C7C7;

    margin-bottom: 25px;

    &:focus {
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid gray;
    }

`

const StyledPassword = styled(Form.Control)`
    height: 40px;
    background-color: white;
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid #C7C7C7;

    margin-bottom: 15px;

    &:focus {
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid gray;
    }
`

const VisibilityIcon = styled.div`
    display: flex;
    //align-items: center;
    //padding-top: 6px;
    //margin-left: 5px;
    cursor: pointer;
`;

const StyledAuth = styled.div`
    display: flex;
    align-items: center;

    .form-check-input {
        &:checked {
            background-color: #D9534F;
        }
    }
`

const RememberLabel = styled(Form.Label)`
    //margin-right: 10px;
    //margin: 0px;

    color: #3A3A3A;
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const ForgotLink = styled.a`
    margin-left: auto;
    color: #000;

    color: #3A3A3A;
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;

    &:hover {
        color: #D9534F;
    }
`

const StyledButton = styled.div`
    padding-top: 60px;

    p {
    flex-shrink: 0;

    border-radius: 20px;
    background: #D9534F;

    font-family: Noto Sans;
    font-size: 17px;
    font-weight: 600;
    width: 50%;
    height: 40px;
    padding: 5px;

    cursor: pointer;
    //margin-left: 7px;
    text-align: center;
    background-color: #D9534F;
    border: 1.5px solid #D9534F;
    text-decoration: none;
    color: white;
    } 
`






