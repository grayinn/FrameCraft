// Pin & Pin (Created - Profile)

import styled from 'styled-components'

const CommonPin = `
    position: relative;
    overflow: hidden;
    font-family: Noto Sans;

    &:hover {
      opacity: 0.9;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 20px;
      cursor: pointer;
      margin-bottom: 15px;
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;
      font-size: 15px;
      text-align: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      margin-bottom: 15px;
      border-radius: 0px 0px 20px 20px;
    }

    .title {
    font-weight: 600;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    }

    &:hover .info {
    opacity: 1;
    visibility: visible;
    }
`

export const PinWrapper = styled.div`
    ${CommonPin}
`

export const PinWrapper1 = styled.div`
    ${CommonPin}
    .actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 5px;
        align-items: center;
      }
    
      .likes {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 60px;
      }
    
      .edit {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 15px;
      }
`
