import React from "react"
import CloseIcon from '@mui/icons-material/Close'
import { ModalContainer, ModalOverlay, ModalContent, CloseModalButton } from '../../styleCommon/Popup'
import Following from '../Following'

function FollowingModal({ showModal, closeModal }) {
    return (
        showModal && (
            <ModalContainer>
                <ModalOverlay onClick={closeModal} />
                <ModalContent style={{ height: 'auto' }}>
                <CloseModalButton onClick={closeModal}>
                    <CloseIcon />
                </CloseModalButton>
                <Following />
                </ModalContent>
            </ModalContainer>
        )
    )
}
export default FollowingModal