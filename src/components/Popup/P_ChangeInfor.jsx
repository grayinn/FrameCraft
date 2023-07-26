import React from "react"
import CloseIcon from '@mui/icons-material/Close'
import { ModalContainer, ModalOverlay, ModalContent, CloseModalButton } from '../../styleCommon/Popup'
import UserInforForm from "../UserInforForm"

function ChangeInformationModal({ showModal, closeModal }) {
  return (
    showModal && (
      <ModalContainer>
        <ModalOverlay onClick={closeModal} />
        <ModalContent style={{ height: '92vh' }}>
          <CloseModalButton onClick={closeModal}>
            <CloseIcon />
          </CloseModalButton>
          <UserInforForm />
        </ModalContent>
      </ModalContainer>
    )
  )
}
export default ChangeInformationModal
