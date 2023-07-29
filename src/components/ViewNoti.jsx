import React from 'react'
import styled from "styled-components"
import Avatar from '../assets/image/headeravt.svg'
import Noti1 from '../assets/image/noti1.svg'
import Noti2 from '../assets/image/noti2.svg'

//import { UserContainer, Title, HorizontalLine } from '../styleCommon/Follow'


const UserCard = ({ avatar, name, activity, acti, image }) => {
    return (
        <UserContainer>
            <UserInfoWrapper>
                <img className='img-avt' src={avatar} alt="Avatar" />
                <div className="user-info-text">
                    <div>
                        <span className="name">{name}</span>
                        <span className="activity">{activity}</span>
                    </div>
                    <span className="acti">{acti}</span>
                </div>
            </UserInfoWrapper>
            <ImageActi>
                <img src={image} alt="" />
            </ImageActi>
        </UserContainer>
    )
}
function ViewNoti() {
  return (
    <ViewNotiContainer>
        <UserInforLabel>
            <Title>Your notificationn</Title>
            <HorizontalLine />
        </UserInforLabel>
        <DetailNoti>
            <UserCard
                avatar={Avatar}
                name="Emily Martinez"
                activity="liked your post"
                acti="3 mins ago"
            />
            <UserCard
                avatar={Avatar}
                name="Emily Martinez"
                activity="commented: That so gr.."
                acti="10 mins ago"
                image={Noti1}
            />
            <UserCard
                avatar={Avatar}
                name="Emily Martinez"
                activity="mentioned you in a c.."
                acti="30 mins ago"
                image={Noti2}
            />
            <UserCard
                avatar={Avatar}
                name="Emily Martinez"
                activity="liked your post"
                acti="1 hour ago"
            />
            <UserCard
                avatar={Avatar}
                name="Emily Martinez"
                activity="commented: That so gr.."
                acti="2 hours ago"
                image={Noti1}
            />
        </DetailNoti>
    </ViewNotiContainer>
  )
}
export default ViewNoti


const ViewNotiContainer = styled.div`
    align-items: center;
    width: 400px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.1);
    padding: 20px 30px 25px 30px;

    position: absolute;
    z-index: 888;
    top: 6.8%;
    right: 8%;
`

const UserInforLabel = styled.div`
    width: 100%;
`

const Title = styled.div`
    margin-bottom: 12px;
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`

const HorizontalLine = styled.div`
    border-top: 2px solid #D9D9D9;
    margin-bottom: 15px;
`

const DetailNoti = styled.div`
`
const UserContainer = styled.div`
    margin-top: 15px;
    cursor: pointer;
`

const UserInfoWrapper = styled.div`
    display: flex;

    .img-avt {
        width: 42px;
        border-radius: 50%;
        margin-right: 12px;
    }

    .user-info-text {
        display: flex;
        flex-direction: column;
    }

    .name {
        color: #000;
        font-size: 15.5px;
        font-weight: 500;
        padding-right: 7px;
    }

    .activity {
        color: #000;
        font-size: 15.5px;
        font-weight: 300;
    }

    .acti {
        color: #3a3a3a;
        font-size: 13px;
        font-weight: 300;
    }
`

const ImageActi = styled.div`
    img {
        display: block;
        clear: both;
        border-radius: 5px;
        margin-top: 10px;
        margin-left: 55px;
    }
`
