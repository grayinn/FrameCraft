import React, { useState } from 'react'
import Avatar from '../assets/image/headeravt.svg'
import { Link } from 'react-router-dom'
import { UserContainer, FollowButton, FollowingContainer, Title, HorizontalLine } from '../styleCommon/Follow'

const UserCard = ({ avatar, name, username }) => {
    const [isFollowing, setIsFollowing] = useState(false)

    const handleFollowButtonClick = () => {
        setIsFollowing(!isFollowing)
    }

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

        <FollowButton unfollow={isFollowing} onClick={handleFollowButtonClick}>
            {isFollowing ? 'Follow' : 'Unfollow'}
        </FollowButton>
        </UserContainer>
    )
}

function Following() {
    return (
        <FollowingContainer>
        <Title>Following</Title>
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
        </FollowingContainer>
    )
}
export default Following
