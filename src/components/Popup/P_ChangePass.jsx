import React from "react"
import CloseIcon from '@mui/icons-material/Close'
import {  ModalContainer, ModalOverlay, ModalContent, CloseModalButton } from '../../styleCommon/Popup'
import ChangePass from "../ChangePass"

function ChangePasswordModal({ showModal, closeModal }) {
  return (
    showModal && (
      <ModalContainer>
        <ModalOverlay onClick={closeModal} />
        <ModalContent>
          <CloseModalButton onClick={closeModal}>
            <CloseIcon />
          </CloseModalButton>
          <ChangePass />
        </ModalContent>
      </ModalContainer>
    )
  )
}
export default ChangePasswordModal
