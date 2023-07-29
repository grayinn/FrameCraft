import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { styled } from 'styled-components'
import AuthLogin from './AuthLogin'
import { WrapperSignup, StyledButtonSignup, TextButton, TextButtonSignup, StyledConnectSignup, AuthLink } from '../styleCommon/Auth'

const SignUpForm = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
    // Gọi onSignUp và truyền tt đăng ký
        onSignUp({ email, username, phone, password });
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
                    <Link to='/mainpage'>
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


const StyledTitle = styled.div`
    height: 75px;
    margin-bottom: 10px;
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