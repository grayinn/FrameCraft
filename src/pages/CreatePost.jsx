import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Avatar from '../assets/image/headeravt.svg'
import { ButtonContainer } from '../styleCommon/Button'
import Header from '../components/Header'
import ImageUploader from '../components/ImageUploader'

const CreatePost = () => {
    return (
        <Wrapper>
            <Header />
            <HorizontalLine />
            <Container>
                <LeftSection> 
                    <ImageUploader /> 
                </LeftSection>

                <RightSection>
                    <UserInfo>
                        <Link to='/profile'><img src={Avatar} alt=""/></Link>
                        <div className="user-info-text">
                            <Link to="/profile"><span className="user-name">Nguyen Hong Nhung</span></Link>
                            <span className="username">@grayinn_</span>
                        </div>
                    </UserInfo>

                    <InputContainer1><input type="text" placeholder="Enter your title" /></InputContainer1>
                    <InputContainer2><input type="text" placeholder="Enter your description" /></InputContainer2>

                    <ButtonContainer>
                        <Link to='/mainpage'><button className="cancel">Cancel</button></Link>
                        <Link to='/mainpage'><button>Save</button></Link>
                    </ButtonContainer>
                </RightSection>
            </Container>
        </Wrapper>
    )
}

export default CreatePost


const Wrapper = styled.div`
    height: 100vh;
`

const HorizontalLine = styled.div`
    width: 100%;
    border-top: 1px solid #CBCBCB;
    margin-top: 5px;
    margin-bottom: 20px;
`

const CommonInput = `
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid #C7C7C7;
    margin-bottom: 25px;
    margin-top: 40px;
    color: #3A3A3A;

    &:focus {
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid gray;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Noto Sans;
    margin: 15%;
    margin-top: 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.18);

    padding: 60px 80px 60px 80px;
    height: 80vh;
`

const LeftSection = styled.div`
    width: 45%;
`

const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    margin-left: 80px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;

    img {
        width: 45px;
        border-radius: 50%;
        margin-right: 20px;
    }

    .user-info-text {
        display: flex;
        flex-direction: column;
    }

    .user-info-text a {
        text-decoration: none;
    }

    .user-name {
        color: #000;
        font-size: 16px;
        font-weight: 500;
    }

    .username {
        color: #3A3A3A;
        font-size: 14px;
        font-weight: 300;
    }
`

const InputContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    input {
        ${CommonInput}
        padding: 8px;
        font-size: 28px;
        font-weight: 500;
    }
`

const InputContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 32%;

    input {
        ${CommonInput}
        padding: 9px;
        font-size: 15px;
        font-weight: 300;
    }
`
