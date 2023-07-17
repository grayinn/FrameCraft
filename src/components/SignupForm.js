import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { styled } from 'styled-components'
import AuthLogin from './AuthLogin'


const SignUpForm = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    // Gọi onSignUp và truyền tt đăng ký
        onSignUp({ email, username, phone, password });
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    return (
        <Wrapper onSubmit={handleSubmit}>
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
                    autoComplete="new-username"
                />

                <StyledInput
                    type="text"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="new-phone"
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


            <StyledButton variant="primary" type="submit">
                <p>Sign Up</p>
                <h6>OR</h6>
            </StyledButton>

            <AuthLogin />

            <StyledConnect>
                <p>Already have an account?</p>
                <SignInLink to='/signup'>Log in now!</SignInLink>
            </StyledConnect>

        </Wrapper>
    )
}

export default SignUpForm


const Wrapper = styled.form`
    width: 40%;
    padding: 65px 40px 30px 40px;
`

const StyledTitle = styled.div`
    height: 78px;
    margin-bottom: 15px;
`

const FormGroup = styled(Form.Group)`
    display: flex;
    flex-wrap: wrap;
`

const StyledInput = styled(Form.Control)`
    flex: 1;
    margin-right: 15px;
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

const StyledConfirm = styled(Form.Control)`
    height: 40px;
    background-color: white;
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid #C7C7C7;

    margin-bottom: 25px;
    margin-right: 15px;

    &:focus {
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid gray;
    }
`

const VisibilityIcon = styled.div`
`

const StyledButton = styled.div`
    padding-top: 40px;

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

    &:hover p {
        background-color: #EC5E5A;
    }
`

const StyledConnect = styled.div`
    display: flex;
    align-items: center;

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