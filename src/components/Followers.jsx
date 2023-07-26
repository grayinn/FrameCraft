import React, { useState } from 'react'
import Avatar from '../assets/image/headeravt.svg'
import { Link } from 'react-router-dom'
import { UserContainer, FollowButton2, FollowingContainer, Title, HorizontalLine } from '../styleCommon/Follow'

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
            
            <FollowButton2 following={isFollowing} onClick={handleFollowButtonClick}>
                {isFollowing ? 'Following' : 'Follow'}
            </FollowButton2>

        </UserContainer>
    )
}

function Followers() {
    return (
        <FollowingContainer>
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
        </FollowingContainer>
    )
}

export default Followers
