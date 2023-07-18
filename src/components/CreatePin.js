import React from 'react'
import styled from 'styled-components'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import { Link } from 'react-router-dom'
import Avatar from '../assets/image/headeravt.svg'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 14%;
    margin-top: 20px;

    padding: 60px 80px 60px 80px;

    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.18);
    height: 635px;
    flex-shrink: 0;
`

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
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
        text-align: center;
        font-family: Noto Sans;
        font-size: 19px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .AddCircleRoundedIcon {
        color: #3A3A3A
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
    font-weight: bold;
    color: #555;
    margin-left: 80px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;

    img {
        width: 45px;
        height: 45px;
        object-fit: cover;
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
        font-family: Noto Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .username {
        color: #3A3A3A;
        font-family: Noto Sans;
        font-size: 14px;
        font-weight: 300;
    }
`

const InputContainer1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    input {
        padding: 8px;
        border-radius: 0px;
        border: none;
        border-bottom: 1px solid #C7C7C7;
        margin-bottom: 25px;
        margin-top: 50px;

        color: #3A3A3A;
        font-family: Noto Sans;
        font-size: 28px;
        font-weight: 500;
        line-height: normal;

        &:focus {
            outline: none;
            box-shadow: none;
            border-bottom: 1px solid gray;
        }
    }
`

const InputContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    input {
        padding: 9px;
        border-radius: 0px;
        border: none;
        border-bottom: 1px solid #C7C7C7;
        margin-bottom: 25px;
        margin-top: 40px;

        color: #3A3A3A;
        font-family: Noto Sans;
        font-size: 15px;
        font-weight: 300;
        line-height: normal;

        &:focus {
            outline: none;
            box-shadow: none;
            border-bottom: 1px solid gray;
        }
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    //background-color: green;

    button {
        margin-left: 10px;
        margin-top: 30%;
        background-color: #D9534F;
        color: #fff;
        cursor: pointer;
        width: 30%;
        height: 40px;
        border-radius: 20px;
        margin-bottom: 0px;

        border: #D9534F;

        text-align: center;
        font-family: Noto Sans;
        font-size: 16px;
        font-weight: 600;
    }

    button.cancel {
        background-color: white;
        color: rgba(58, 58, 58, 0.80);

        border: 2px solid rgba(58, 58, 58, 0.80);

        text-align: center;
        font-family: Noto Sans;
        font-size: 16px;
        font-weight: 600;
    }
`

const CreatePin = () => {
    return (
        <Container>
            <LeftSection>
                <CustomAddCircleIcon fontSize="large" />
                <p>Drag and drop or upload an image</p>
            </LeftSection>

            <RightSection>
                <UserInfo>
                    <Link to='./profile'>
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

                <ButtonContainer>
                    <button className="cancel">Cancel</button>
                    <button>Save</button>
                </ButtonContainer>
            </RightSection>
        </Container>
    )
}

export default CreatePin
