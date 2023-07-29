import styled from 'styled-components'

// -- This is Following + Followers component
export const FollowingContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 45px 20px 45px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);
`

export const Title = styled.div`
    margin-bottom: 15px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`

export const HorizontalLine = styled.div`
    width: 100%;
    border-top: 2px solid #D9D9D9;
`

export const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;

    img {
        width: 45px;
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
        font-size: 16px;
        font-weight: 500;
    }

    .username {
        color: #3a3a3a;
        font-size: 14px;
        font-weight: 300;
    }
`

const CommonFollow = `
    border: none;
    cursor: pointer;
    margin-left: auto;
    border-radius: 20px;
    color: #fff;
    width: 30%;
    height: 40px;
`

export const FollowButton = styled.button`
    ${CommonFollow}
    background-color: ${(props) => (props.unfollow ? '#D9534F ' : '#B6B6B6')};
`

export const FollowButton2 = styled.button`
    ${CommonFollow}
    background-color: ${(props) => (props.following ? '#B6B6B6' : '#D9534F')};
`
