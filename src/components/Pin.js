import React from 'react'
import { styled } from 'styled-components'
import Pin1 from '../assets/image/Pin1.png'

function Pin() {
  return (
    <Wrapper>
        <Container>
            <img src={Pin1} alt="" style={{ width: '240px' }} />
        </Container>
    </Wrapper>
  )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 297px;

    img {
        display: flex;
        width: 100%;
        cursor: zoom-in;
        border-radius: 20px;
        object-fit: cover;
    }
`
