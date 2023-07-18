import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { styled } from 'styled-components'
import AuthLogin from './AuthLogin'
import { Link } from 'react-router-dom'


function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        // Gọi func onLogin, truyền tt đăng nhập
        onLogin({ email, password })
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

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
                <h6>OR</h6>
            </StyledButton>

            <AuthLogin />

            <StyledConnect>
                <p>Don't have an account?</p>
                <SignInLink to='/signup'>Sign up now!</SignInLink>
            </StyledConnect>
        </Wrapper>
    )
}

export default LoginForm

const Wrapper = styled(Form)`
    width: 40%;
    padding: 60px 50px 30px 50px;

    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 0px 5px 2px rgba(58, 58, 58, 0.20);
`

const StyledTitle = styled.form`
    height: 78px;
    margin-bottom: 20px;
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

    margin-bottom: 30px;

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
`

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
    padding-top: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        //flex-shrink: 0;

        border-radius: 20px;
        background: #D9534F;

        font-family: Noto Sans;
        font-size: 17px;
        font-weight: 600;
        width: 50%;
        height: 40px;
        padding: 5px;

        text-align: center;
        background-color: #D9534F;
        border: 1.5px solid #D9534F;
        text-decoration: none;
        color: white;
    } 

    &:hover p {
        background-color: #EC5E5A;
    }

    h6 {
        margin-top: 20px;
        margin-bottom: 30px;
    }
`

const StyledConnect = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    margin-top: 40px;

    p {
        margin-right: 10px;
        margin-bottom: 0px;
    }
`

const SignInLink = styled(Link)`
    font-weight: 500;
    color: #3A3A3A;

    &:hover {
        color: #D9534F;
    }
`