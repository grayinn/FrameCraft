import React from 'react'
import styled from 'styled-components'
import Avatar from '../assets/image/headeravt.svg'
import { Link } from 'react-router-dom'


const FollowersContainer = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;

    margin-left: 50px;
    margin-right: 50px;
    padding: 20px 30px 20px 30px;

    width: 29%;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);

    margin-bottom: 50px;      // cách tạm
`

const Title = styled.div`
    margin-bottom: 20px;
    color: #000;
    text-align: center;
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
`

const HorizontalLine = styled.div`
    width: 80%;
    border-top: 2px solid #D9D9D9;
    margin-top: 20px;
    margin: 0 auto;
`

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;

    img {
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 10px;
    }

    .user-info-text {
        display: flex;
        flex-direction: column;
    }

    .user-info-text a {
        text-decoration: none;
        color: #000;
        font-family: 'Noto Sans';
        font-size: 16px;
        font-weight: 500;
        line-height: normal;
    }

    .username {
        color: #3a3a3a;
        font-family: 'Noto Sans';
        font-size: 14px;
        font-weight: 300;
    }
`

const FollowButton = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
`


const UserCard = ({ avatar, name, username }) => {
    return (
        <UserContainer>
            <Link to='./userprofile'>
                <img src={avatar} alt="Avatar" />
            </Link>
            <div className="user-info-text">
                <Link to='./userprofile'>
                    <a href="/profile">{name}</a>
                </Link>
                <span className="username">@{username}</span>
            </div>
            <FollowButton>Follow</FollowButton>
        </UserContainer>
    )
}

function Followers() {
    return (
        <FollowersContainer>
            <Title>Followers</Title>
            <HorizontalLine />
            <UserCard
                avatar={Avatar}
                name="Nguyen Minh"
                username="grayinn_"
            />
            <UserCard
                avatar={Avatar}
                name="John Doe"
                username="john.doe"
            />
            <UserCard
                avatar={Avatar}
                name="Jane Smith"
                username="jane.smith"
            />
            <UserCard
                avatar={Avatar}
                name="John Doe"
                username="john.doe"
            />
            <UserCard
                avatar={Avatar}
                name="Jane Smith"
                username="jane.smith"
            />
            <UserCard
                avatar={Avatar}
                name="John Doe"
                username="john.doe"
            />
            <UserCard
                avatar={Avatar}
                name="Jane Smith"
                username="jane.smith"
            />
        </FollowersContainer>
    )
}

export default Followers
