import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ButtonCS from './ButtonCS'

import UserInfAVT from '../assets/image/UserInfAVT.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    margin: 0 auto;

    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.2);

    margin-bottom: 50px;
    padding: 20px 30px 25px 30px;
    font-family: Noto Sans;

`

const UserInforLabel = styled.div`
    width: 100%;
`

const Title = styled.div`
    margin-bottom: 15px;
    color: #000;
    text-align: center;
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
`

const HorizontalLine = styled.div`
    border-top: 2px solid #D9D9D9;
    margin-bottom: 15px;
`

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AvatarImage = styled.img`
    width: 75%;
    border-radius: 50%;
`

const ChangeAvatarLink = styled(Link)`
    margin-top: 10px;
    margin-bottom: 20px;
    color: rgba(58, 58, 58, 0.80);
    font-family: Noto Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    text-decoration-line: underline;
`

const FormContainer = styled.div`
    width: 100%;
    
    input {
        border-radius: 0px;
        margin-bottom: 5px;
        border: none;
        border-bottom: 1px solid #C7C7C7;

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

    .form-label-sm {
        color: #3A3A3A;
        font-size: 16px;
        font-weight: 500;
    }
`
const GenderSelect = styled.select`
    padding-left: 10px;
    border: none; 
    border-bottom: 1px solid #c7c7c7;
    border-radius: 0;
    height: 40px;
    width: 100%;

    font-size: 15px;
    font-weight: 300;
    line-height: normal;

    &:focus {
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid gray;
    }
`

const UserInforForm = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Xử lý lưu thông tin user
    }

    return (
        <Container>
            <UserInforLabel>
                <Title>Account Information</Title>
                <HorizontalLine />
            </UserInforLabel>

            <AvatarContainer>
                <AvatarImage src={UserInfAVT} alt="Avatar" />
                <ChangeAvatarLink to="/change-avatar">Edit Avatar</ChangeAvatarLink>
            </AvatarContainer>

            <FormContainer>
                <form onSubmit={handleFormSubmit}>

                    <div className="mb-2 row">
                        <label htmlFor="name" className="col-sm-3 col-form-label form-label-sm">
                            Name
                        </label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="name" defaultValue="Nguyen Hong Nhung" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="username" className="col-sm-3 col-form-label form-label-sm">
                            Username
                        </label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="username" defaultValue="@grayinn_" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="description" className="col-sm-3 col-form-label form-label-sm" >
                            Description
                        </label>
                        <div className="col-sm-9">
                            <textarea 
                                className="form-control" 
                                id="description" 
                                rows="3" 
                                style={{ 
                                    boxShadow: 'none', 
                                    border: '1px solid #C7C7C7',
                                    color: '#3A3A3A',
                                    fontFamily: 'Noto Sans',
                                    fontSize: '15px',
                                    fontWeight: '300',
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'gray' 
                                }}
                                    onBlur={(e) => {
                                    e.target.style.borderColor = '#C7C7C7'
                                }}
                            />
                        </div>
                    </div>

                    <div className="mb-1 row">
                        <label htmlFor="phone" className="col-sm-3 col-form-label form-label-sm">
                            Phone
                        </label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="phone" defaultValue="0123456789"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="gender" className="col-sm-3 col-form-label form-label-sm">
                            Gender
                        </label>
                        <div className="col-sm-9">
                            <GenderSelect id="gender">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </GenderSelect>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-3 col-form-label form-label-sm">
                            Email
                        </label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control" id="email" defaultValue="nguyenhongnhung@gmail.com"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="birthday" className="col-sm-3 col-form-label form-label-sm">
                            Birthday
                        </label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="birthday" />
                        </div>
                    </div>

                    <ButtonCS />

                </form>
            </FormContainer>
        </Container>
    )
}

export default UserInforForm
