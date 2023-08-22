import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { styled } from 'styled-components'
import AuthLogin from './AuthLogin'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignup = (e) => {
        e.preventDefault()
    }

    return (
        <WrapperSignup onSubmit={handleSignup}>
            <h1>Sign Up</h1>
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
                    autoComplete="new-username"
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
                    type="password"
                    placeholder="Create your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                />
            </FormGroup>

            <FormGroup>
                <StyledConfirm
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                />
            </FormGroup>


            <StyledButtonSignup>
                <button type='submit'>
                    <Link to='/login'>Sign Up</Link>
                </button>
                <h6>OR</h6>
            </StyledButtonSignup>

            <AuthLogin />

            <StyledConnectSignup>
                <p>Already have an account?</p>
                <AuthLink to='/login'>Log in now!</AuthLink>
            </StyledConnectSignup>
        </WrapperSignup>
    )
}
export default SignUp


const WrapperSignup = styled.form`
    width: 38%;
    padding: 50px 50px 30px 50px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 2px rgba(58, 58, 58, 0.20);
    font-family: Noto Sans;
    background-color: white;
    margin: 2% 55%;

    h1 {
        height: 75px;
    }
`
const StyledButtonSignup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;

    button {
        border-radius: 20px;
        background: #D9534F;
        color: white;
        font-size: 17px;
        font-weight: 600;
        width: 50%;
        height: 40px;
        padding: 5px;
        text-align: center;
        border: none;

        &:hover {
            background-color: #EC5E5A;
        }

        a {
            text-decoration: none;
            color: white;
        }
    }

    h6 {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

const FormGroup = styled.div`
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
