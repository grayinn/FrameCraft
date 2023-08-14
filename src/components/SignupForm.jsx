import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { styled } from 'styled-components'
import AuthLogin from './AuthLogin'

const SignUpForm = ({ onSignUp }) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSignUp({ email, username, phone, password })
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    return (
        <WrapperSignup onSubmit={handleSubmit}>
            <StyledTitle>
                <h1>Sign Up</h1>
            </StyledTitle>

            <FormGroup>
                <StyledInput
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="new-email"
                />
            </FormGroup>

            <FormGroup>
                <StyledInput
                    type="text"
                    placeholder="Your user name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                />

                <StyledInput
                    type="text"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="phone"
                />
            </FormGroup>

            <FormGroup>
                <StyledInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                />
                <VisibilityIcon onClick={handleTogglePasswordVisibility}>
                </VisibilityIcon>
            </FormGroup>

            <FormGroup>
                <StyledConfirm
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                />
                <VisibilityIcon onClick={handleTogglePasswordVisibility}>
                </VisibilityIcon>
            </FormGroup>


            <StyledButtonSignup variant="primary" type="submit">
                <TextButton>
                    <Link to='/login'>
                        <p>Sign Up</p>
                    </Link>
                </TextButton>
                <TextButtonSignup>
                    <h6>OR</h6>
                </TextButtonSignup>
            </StyledButtonSignup>

            <AuthLogin />

            <StyledConnectSignup>
                <p>Already have an account?</p>
                <AuthLink to='/login'>Log in now!</AuthLink>
            </StyledConnectSignup>

        </WrapperSignup>
    )
}
export default SignUpForm


const WrapperSignup = styled.form`
    width: 38%;
    padding: 60px 50px 30px 50px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 2px rgba(58, 58, 58, 0.20);
    font-family: Noto Sans;
    background-color: white;
    margin: 2% 55%;
`
const StyledButtonSignup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
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

    a {
        text-decoration: none;
        color: white;
    }
`
const TextButtonSignup = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
`
const StyledTitle = styled.div`
    height: 75px;
`
const FormGroup = styled(Form.Group)`
    display: flex;
    flex-wrap: wrap;
`
const CommonInput = `
    margin-bottom: 25px;
    margin-right: 15px;
    height: 40px;
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid #C7C7C7;

    &:focus {
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid gray;
    }
`

const StyledInput = styled(Form.Control)`
    flex: 1;
    ${ CommonInput }
`
const StyledConfirm = styled(Form.Control)`
    ${ CommonInput }
`
const VisibilityIcon = styled.div`
`
const StyledConnectSignup = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center; 

    p {
        margin-right: 10px;
        margin-bottom: 0px;
    }
`
const AuthLink = styled(Link)`
    font-weight: 500;
    color: #3A3A3A;

    &:hover {
        color: #D9534F;
    }
`
