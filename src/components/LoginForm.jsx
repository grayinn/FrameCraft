import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import axios from 'axios'
import { toast } from 'react-toastify'
import AuthLogin from './AuthLogin'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.get('http://localhost:3001/users', {
                params: { email, password },
            });

            if (response.data.length > 0) {
                toast.success('Login successful.')
                navigate('/mainpage')
            } else {
                toast.error('Invalid credentials.');
            }
            } catch (error) {
            console.error('Error logging in:', error);
            toast.error('An error occurred while logging in.');
        }
    }

    return (
        <WrapperLogin>
            <form onSubmit={handleLogin}>
                <h1>Log In</h1>
                <Container>
                    <div className='styled-email'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="new-email"
                        />
                    </div>
                    <div className='styled-password'>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="new-password" 
                        />
                    </div>
                </Container>

                <StyledAuth>
                    <div className='remember-me'>
                        <input className='checkbox'
                            type="checkbox"
                            style={{ marginTop: '3px'}}
                        />
                        <span>Remember me</span>
                    </div>
                    <Link className='link-forgot' to="/forgotpassword">Forgot password</Link>
                </StyledAuth>

                <StyledButtonLogin>
                    <button type="submit">Login</button> 
                    <h6>OR</h6>
                </StyledButtonLogin>

                <AuthLogin />

                <StyledConnectLogin>
                    <p>Don't have an account?</p>
                    <Link className='link-signup' to={'/signup'}>Sign up now!</Link>
                </StyledConnectLogin>    
            </form>
        </WrapperLogin>
    )
}
export default Login


const WrapperLogin = styled.div`
    width: 38%;
    padding: 60px 50px 30px 50px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 2px rgba(58, 58, 58, 0.20);
    font-family: Noto Sans;
    background-color: white;
    margin: 2% 55%;
`

const CommonStyledInput = `
    border-radius: 0px;
    border: none;

    margin-bottom: 30px;

    input {
        border: none;
        width: 100%;
        padding: 6px;
        border-bottom: 1px solid #C7C7C7;

        &:focus {
            outline: none;
            border-bottom: 1px solid gray;
        }
    }

`

const Container = styled.div`
    .styled-email {
        ${CommonStyledInput}
        margin-top: 50px;
        margin-bottom: 40px;
    }

    .styled-password {
        ${CommonStyledInput}
        margin-bottom: 15px;
    }
`

const StyledAuth = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0;

    .link-forgot {
        color: #3A3A3A;
        font-size: 14px;
        font-weight: 400;
        margin-left: auto;
        text-decoration-line: underline;
    
        &:hover {
            color: #D9534F;
        }
    }

    .remember-me {
        color: #3A3A3A;
        font-size: 14px;
        font-weight: 400;
        margin-left: 6px;

        .checkbox {
            vertical-align: middle;
            margin-bottom: 4px;
            margin-right: 5px;
        }
    }

`

const StyledButtonLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;

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
    }

    h6 {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`

const StyledConnectLogin = styled.div`
    display: flex;
    justify-content: center; 
    margin-top: 40px;

    p {
        margin-right: 10px;
        margin-bottom: 0px;
    }

    .link-signup {
        font-weight: 500;
        color: #3A3A3A;

        &:hover {
            color: #D9534F;
        }
    }
`
