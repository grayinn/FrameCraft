import React from 'react'
import styled from 'styled-components'

function Pin({ imageUrl }) {

  return (
    <PinWrapper >
      <img src={imageUrl} alt="Unsplash" />
    </PinWrapper>
  )
}

export default Pin;


const PinWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 15px;
  }
`
