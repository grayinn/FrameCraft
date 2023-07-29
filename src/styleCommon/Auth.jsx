import styled from "styled-components"
import { Link } from 'react-router-dom'

// --- 1. Login Page + SignUp (PAGE)
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Fugaz One';
`
export const BrandLogo = styled.div`
    position: absolute;
    top: 50%;
    left: 18%;
    transform: translateY(-50%);
    z-index: 1;
`

export const Text = styled.div`
    font-size: 45px;
    color: #D9534F;
    text-shadow: 1px 1px 1px white;
    opacity: 0.9;
`

export const BackgroundIMG = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center bottom;
    opacity: 0.8;
`

export const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(317deg, rgba(0, 0, 0, 0.20) 27.60%, rgba(0, 0, 0, 0.13) 59.90%, rgba(0, 0, 0, 0.00) 90.63%);
`

export const LoginFormWrapper = styled.div`
    position: absolute;
    width: 100%;

`

export const SignupFormWrapper = styled.div`
    position: absolute;
    width: 100%;
`


// --- 2. Login Form + Signup (FORM)

const CommonWrapper = `
    width: 38%;
    padding: 60px 50px 30px 50px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 2px rgba(58, 58, 58, 0.20);
    font-family: Noto Sans;
    background-color: white;
`

export const WrapperSignup = styled.form`
    ${CommonWrapper}
    margin: 2% 55%;
`

export const WrapperLogin = styled.form`
    ${CommonWrapper}
    margin: 2.5% 55%;
`

const CommonStyledButton = `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledButtonLogin = styled.div`
    ${CommonStyledButton}
    padding-top: 55px;
`

export const StyledButtonSignup = styled.div`
    ${CommonStyledButton}
    padding-top: 25px;
`

export const TextButton = styled.div`
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

export const TextButtonLogin = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
`

export const TextButtonSignup = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
`

const CommonStyledConnect = `
    display: flex;
    justify-content: center; 

    p {
        margin-right: 10px;
        margin-bottom: 0px;
    }
`

export const StyledConnectLogin = styled.div`
    margin-top: 40px;
    ${CommonStyledConnect}
`

export const StyledConnectSignup = styled.div`
    margin-top: 20px;
    ${CommonStyledConnect}
`

export const AuthLink = styled(Link)`
    font-weight: 500;
    color: #3A3A3A;

    &:hover {
        color: #D9534F;
    }
`
