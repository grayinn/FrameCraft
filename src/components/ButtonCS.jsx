import React from 'react'
import styled from 'styled-components'

function ButtonCS() {
  return (
    <ButtonContainer>
        <button className="cancel">Cancel</button>
        <button>Save</button>
    </ButtonContainer>
  )
}

export default ButtonCS

const commonButton = `
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 600;
  border-radius: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    ${commonButton}
    margin-left: 10px;
    background-color: #D9534F;
    color: #fff;
    width: 30%;
    height: 40px;
    margin-bottom: 0px;
    border: #D9534F;

    &:hover {
        background-color: #EC5E5A; 
    }
  }

  button.cancel {
    background-color: white;
    color: rgba(58, 58, 58, 0.80);
    border: 2px solid rgba(58, 58, 58, 0.80);

    &:hover {
        background-color: #EBEBEB;
    }
  }
`