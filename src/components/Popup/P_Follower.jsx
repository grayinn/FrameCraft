import React from "react"
import CloseIcon from '@mui/icons-material/Close'
import { ModalContainer, ModalOverlay, ModalContent, CloseModalButton } from '../../styleCommon/Popup'
import Followers from "../Followers"

function FollowersModal({ showModal, closeModal }) {
  return (
    showModal && (
      <ModalContainer>
        <ModalOverlay onClick={closeModal} />
        <ModalContent style={{ height: 'auto' }}>
          <CloseModalButton onClick={closeModal}>
            <CloseIcon />
          </CloseModalButton>
          <Followers />
        </ModalContent>
      </ModalContainer>
    )
  )
}
export default FollowersModal