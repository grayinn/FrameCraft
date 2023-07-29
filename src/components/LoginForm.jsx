import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { styled } from 'styled-components'
import AuthLogin from './AuthLogin'
import { Link } from 'react-router-dom'
import { WrapperLogin, StyledButtonLogin, TextButton, TextButtonLogin, StyledConnectLogin, AuthLink } from '../styleCommon/Auth'

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
        <WrapperLogin onSubmit={handleSubmit}> 
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
    

            <StyledButtonLogin variant="primary" type="submit">
                <TextButton>
                    <Link to='/mainpage'>
                        <p>Log in</p>
                    </Link>
                </TextButton>
                <TextButtonLogin>
                    <h6>OR</h6>
                </TextButtonLogin>
            </StyledButtonLogin>

            <AuthLogin />

            <StyledConnectLogin>
                <p>Don't have an account?</p>
                <AuthLink to='/signup'>Sign up now!</AuthLink>
            </StyledConnectLogin>
        </WrapperLogin>
    )
}
export default LoginForm


const StyledTitle = styled.form`
    margin-bottom: 55px;
`
const FormGroup = styled.div`
`
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