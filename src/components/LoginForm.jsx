import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
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

            <FormGroup >
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
                <TextButton>
                    <p>Log in</p>
                </TextButton>
                <TextButton2>
                    <h6>OR</h6>
                </TextButton2>
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

const commonStyleInput = `
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid #C7C7C7;

    &:focus {
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid gray;
    }
`

const commonRememberForgot = `
    color: #3A3A3A;
    font-size: 14px;
    font-weight: 400;
`

// 1
const Wrapper = styled(Form)`
    width: 40%;
    padding: 60px 50px 30px 50px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 2px rgba(58, 58, 58, 0.20);
    font-family: Noto Sans;
`

const StyledTitle = styled.form`
    margin-bottom: 55px;
`
const FormGroup = styled.div`
`
const StyledEmail = styled(Form.Control)`
    ${commonStyleInput}
    margin-bottom: 30px;
`
const StyledPassword = styled(Form.Control)`
    ${commonStyleInput}
    margin-bottom: 15px;
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
    ${commonRememberForgot}
`

const ForgotLink = styled.a`
    ${commonRememberForgot}
    margin-left: auto;
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
`

const TextButton = styled.div`
    border-radius: 20px;
    background: #D9534F;
    color: white;
    font-size: 17px;
    font-weight: 600;
    width: 50%;
    height: 40px;
    padding: 5px;
    text-align: center;

    &:hover {
        background-color: #EC5E5A;
    }
`

const TextButton2 = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
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