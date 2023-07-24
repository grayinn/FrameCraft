import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

import Pin from '../components/Pin'
import unsplash from '../api/unsplash'

import avatarprofile from '../assets/image/prf_avatar.svg'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize'

import Header from '../components/Header'

function ProfileFavor() {

    const [images, setImages] = useState([]);

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
                            <div className='post'>
                                <p><span className="bold-text">23 </span>Posts</p>
                            </div>
                            <div className='followers'>
                                <p><span className="bold-text">118 </span>Followers</p>
                            </div>
                            <div className='following'>
                                <p><span className="bold-text">78 </span>Following</p>
                            </div>
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


const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

const Container = styled.div`
`

const HorizontalLine = styled.div`
    width: 100%;
    border-top: 1px solid #CBCBCB;
    margin-top: 5px;
`

const CoverContainer = styled.div`
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

const ButtonGroupCover = styled.div`
    display: none;
    position: absolute;
    bottom: 10px;
    right: 3.5%;
    font-size: 15px;

    .button {
        height: 35px;
        padding: 10px;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .remove {
        background-color: none;
        color: #C83B36;
        margin-right: 10px;
        border: 1.5px solid #C83B36;
    }

    .upload {
        background-color: none;
        color: rgba(58, 58, 58, 0.80);
        border: 1px solid rgba(58, 58, 58, 0.80);
    }

    .button:hover {
        background-color: #FFE4DE;
    }
`

const Avatar = styled.div` 
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        width: 65%;
        margin: auto;
        display: block;
    }
`

const ProfileInformation = styled.div`
    text-align: center;
    margin-top: 4.8%;
`

const ProfileDetails = styled.div`
`

const Name = styled.div`
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

const Quantity = styled.div`
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

const Desc = styled.div`
    p {
        color: #727272;
        font-size: 15px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5% 3.5% 2% 3.5%;
`

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

const IconWrapper = styled.div`
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

const MainboardWrapper = styled.div`
  margin: 1% 3.5% 3.5% 3.5%;
  columns: 5 250px;
  column-gap: 15px;
`

