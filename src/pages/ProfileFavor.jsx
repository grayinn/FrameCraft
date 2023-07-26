import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

import Pin from '../components/Pin'
import unsplash from '../api/unsplash'

import avatarprofile from '../assets/image/prf_avatar.svg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'

import Header from '../components/Header'
import FollowersModal from '../components/Popup/P_Follower'
import FollowingModal from '../components/Popup/P_Following'

import { Wrapper, Container, HorizontalLine, CoverContainer, ButtonGroupCover, Avatar,
         ProfileInformation, ProfileDetails, Name, Quantity, Desc,
         ButtonGroup, IconWrapper, MainboardWrapper, FollowButton } from '../styleCommon/Profile'


function ProfileFavor() {

    const [images, setImages] = useState([])
    const [followerModal, setFollowerModal] = useState(false)
    const [followingModal, setFollowingModal] = useState(false)

    const toggleFollowerModal = () => {
        setFollowerModal(!followerModal)
    }

    const toggleFollowingModal = () => {
        setFollowingModal(!followingModal)
    }

    const getImages = async (term) => {
        try {
        const response = await unsplash.get("search/photos", {
            params: {
            query: term,
            per_page: 20,
            },
        })
        setImages(response.data.results)

        } catch (error) {
        console.error(error);
        }
    }

    React.useEffect(() => {
        getImages('minimalist') 
    }, [])

    return (
        <Wrapper>
            <Header />
            <HorizontalLine />

            <Container>

                <CoverContainer>
                    <ButtonGroupCover className="button-group">     
                        <div className="button remove">- Remove</div>
                        <div className="button upload">+ Upload new photo</div>
                    </ButtonGroupCover>
                </CoverContainer>

                <Avatar>
                    <img src={avatarprofile} alt=""/>
                </Avatar>

                <ProfileInformation>
                    <ProfileDetails>
                        <Name>
                            <h1>Nguyen Hong Nhung</h1>
                            <p>@grayinn</p>
                        </Name>
                        <Quantity>
                        <FollowButton>
                                <span className="bold-text">23 </span>Posts
                            </FollowButton>


                            <FollowButton onClick={toggleFollowerModal}>
                                <span className="bold-text">118 </span>Followers
                            </FollowButton>
                            <FollowersModal showModal={followerModal} closeModal={toggleFollowerModal} />


                            <FollowButton onClick={toggleFollowingModal}>
                                <span className="bold-text">78 </span>Following
                            </FollowButton>
                            <FollowingModal showModal={followingModal} closeModal={toggleFollowingModal} />
                        </Quantity>
                        <Desc>
                            <p>"Create your own sunshine and spread positivity wherever you go."</p>
                        </Desc>
                    </ProfileDetails>

                    <ButtonGroup>
                        <Button1>
                            <IconWrapper>
                                <DashboardCustomizeIcon className='icon1'/>
                                <Link to='/profile'>
                                    <p>Created</p>
                                </Link>
                            </IconWrapper>
                        </Button1>
                        <Button2>
                            <IconWrapper>
                                <FavoriteIcon className='icon2'/>
                                <p>Favorites</p>
                            </IconWrapper>
                        </Button2>
                    </ButtonGroup>

                </ProfileInformation>
            </Container>

            <MainboardWrapper>
                {images.map((image) => (
                    <Pin key={image.id} imageUrl={image.urls.regular} />
                ))}
            </MainboardWrapper>
        </Wrapper>
    )
}

export default ProfileFavor


const Button1 = styled.div`
    width: 10%;
    padding: 7px;
    border-radius: 20px 0px 0px 20px;
    cursor: pointer;

    background-color: white;
    color: rgba(58, 58, 58, 0.80);
    border: 1px solid rgba(58, 58, 58, 0.80);

    p {
        display: flex;
        justify-content: center;
        margin-bottom: 0;
    }

    &:hover {
        background-color: #EBEBEB;
    }

    a {
        text-decoration: none;
        color: rgba(58, 58, 58, 0.80);
`

const Button2 = styled.div`
    width: 10%;
    padding: 7px;
    border-radius: 0px 20px 20px 0px;
    background-color: red;
    align-items: center;
    cursor: pointer;

    background-color: #D9534F;
    color: #fff;
    border: 1px solid #CF4C48;

    p {
        display: flex;
        justify-content: center;
        margin-bottom: 0;
    }

    &:hover {
        background-color: #EC5E5A; 
    }
}
`
