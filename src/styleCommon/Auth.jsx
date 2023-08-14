import styled from "styled-components"

// --- 1. [ PAGES ] Login + SignUp
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

