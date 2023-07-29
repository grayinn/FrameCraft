import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pin from '../components/Pin'
import Header from '../components/Header'
import FollowersModal from '../components/Popup/P_Follower'
import FollowingModal from '../components/Popup/P_Following'

import unsplash from '../api/unsplash'
import avatarprofile from '../assets/image/prf_avatar.svg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'
import { ButtonGroupCover, ButtonGroup, Button3, Button4 } from '../styleCommon/Button'

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
    //     setImages(response.data.results)

    //     } catch (error) {
    //     console.error(error);
    //     }
    // }

        const imagesWithUserNames = response.data.results.map((imageData) => {
            const { id, urls, description, likes, user } = imageData
            const userName = user && user.name ? user.name : 'Unknown'

            return {
                id,
                imageUrl: urls.regular,
                title: description,
                likes,
                userName, 
            }
        })

        setImages(imagesWithUserNames)
        } catch (error) {
          console.error(error)
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
                        <Button3>
                            <IconWrapper>
                                <DashboardCustomizeIcon className='icon1'/>
                                <Link to='/profile'>
                                    <p>Created</p>
                                </Link>
                            </IconWrapper>
                        </Button3>
                        <Button4>
                            <IconWrapper>
                                <FavoriteIcon className='icon2'/>
                                <p>Favorites</p>
                            </IconWrapper>
                        </Button4>
                    </ButtonGroup>

                </ProfileInformation>
            </Container>

            <MainboardWrapper>
                {images.map((image) => (
                    <Pin 
                        key={image.id}
                        imageUrl={image.imageUrl}
                        title={image.title}
                        likes={image.likes}
                        userName={image.userName} 
                    />
                ))}
            </MainboardWrapper>
        </Wrapper>
    )
}
export default ProfileFavor

export const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const Container = styled.div`
`

export const HorizontalLine = styled.div`
    width: 100%;
    border-top: 1px solid #CBCBCB;
    margin-top: 5px;
`

export const CoverContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #EBA29A;
    position: relative;

    &:hover .button-group {
        display: flex;
    }

    &:hover {
        background-color: #E19991;
    }
`

export const Avatar = styled.div` 
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        width: 65%;
        margin: auto;
        display: block;
    }
`

export const ProfileInformation = styled.div`
    text-align: center;
    margin-top: 4.8%;
`

export const ProfileDetails = styled.div`
`

export const Name = styled.div`
    h1 {
        color: #000;
        font-size: 28px;
        margin-bottom: 3px;
    }

    p {
        color: #727272;
        font-size: 15px;
        margin-bottom: 6px;
    }
`

export const Quantity = styled.div`
    display: flex;
    justify-content: center;
    font-size: 15px;
    cursor: pointer;

    p {
        margin-left: 11px;
        margin-bottom: 5px;
    }

    .bold-text {
        font-weight: bold;
    }
`

export const Desc = styled.div`
    p {
        color: #727272;
        font-size: 15px;
    }
`

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;

    .icon1 {
        margin-right: 8px;
        padding: 2px;
    }

    .icon2 {
        margin-right: 8px;
    }
`

export const MainboardWrapper = styled.div`
    margin: 1% 3.5% 3.5% 3.5%;
    columns: 5 250px;
    column-gap: 15px;
`

export const FollowButton = styled.div`
    padding: 4px 10px;
    color: #3A3A3A;
    font-size: 15px;
`
