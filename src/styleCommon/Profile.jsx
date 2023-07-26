import styled from 'styled-components'

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

export const ButtonGroupCover = styled.div`
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

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5% 3.5% 2% 3.5%;
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
