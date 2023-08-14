// --- Popup ChangePass, ChangeInfor, Followers, Following
import styled from 'styled-components'


export const ModalContainer = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`
export const ModalOverlay = styled.div`
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
`
export const ModalContent = styled.div`
    border-radius: 20px;
    width: 35%;
    position: relative;
    z-index: 101;
    background: #fff;
`
export const CloseModalButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px 7px;
    border: none;
    background: #fff;
`

