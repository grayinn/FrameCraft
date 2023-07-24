import React from 'react'
import styled from 'styled-components'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import { Link } from 'react-router-dom'
import Avatar from '../assets/image/headeravt.svg'
//import ButtonCS from '../components/ButtonCS'
import Header from '../components/Header'


const CreatePost = () => {
    return (
        <Wrapper>
            <Header />
            <HorizontalLine />
            <Container>
                <LeftSection>
                    <CustomAddCircleIcon fontSize="large" />
                    <p>Drag and drop or upload an image</p>
                </LeftSection>

                <RightSection>
                    <UserInfo>
                        <Link to='/profile'>
                            <img src={Avatar} alt=""/>
                        </Link>
                            <div className="user-info-text">
                                <Link to="/profile">
                                    <span className="user-name">Nguyen Hong Nhung</span>
                                </Link>
                                <span className="username">@grayinn_</span>
                            </div>
                    </UserInfo>

                    <InputContainer1>
                        <input type="text" placeholder="Enter your title" />
                    </InputContainer1>
                    <InputContainer2>
                        <input type="text" placeholder="Enter your description" />
                    </InputContainer2>

                    {/* <ButtonCS /> */}
                    <ButtonContainer>
                        <Link to='/mainpage'>
                            <button className="cancel">Cancel</button>
                        </Link>

                        <Link to='/mainpage'>
                            <button>Save</button>
                        </Link>
                    </ButtonContainer>
                </RightSection>
            </Container>
        </Wrapper>
    )
}

export default CreatePost

const Wrapper = styled.div`
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
    height: 40%;
`

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    background-color: #D9D9D9;
    padding: 10px;
    border-radius: 20px;
    justify-content: center;
    cursor: pointer;

    p {
        width: 60%;
        margin-top: 10px;
        text-align: center;
        color: #3A3A3A;
        font-size: 19px;
        font-weight: 400;
    }
`

const CustomAddCircleIcon = styled(AddCircleRoundedIcon)`
    color: #3A3A3A; 
    margin-top: 40px;
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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        font-weight: 600;
        border-radius: 20px;
        margin-left: 10px;
        background-color: #D9534F;
        color: #fff;
        width: 140px;
        height: 40px;
        border: #D9534F;

        &:hover {
            background-color: #EC5E5A; 
        }
    }

    button.cancel {
        background-color: white;
        color: rgba(58, 58, 58, 0.80);
        border: 2px solid rgba(58, 58, 58, 0.80);

        &:hover {
            background-color: #EBEBEB;
        }
    }
`