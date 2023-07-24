import React from 'react'
import styled from 'styled-components'

function ChangePass() {
  return (
    <Wrapper>
        <Label>
            <Title>Change Password</Title>
            <HorizontalLine />
        </Label>

    </Wrapper>
  )
}

export default ChangePass

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    height: 50vh;
    margin: 0 auto;

    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.2);

    margin-bottom: 50px;
    padding: 20px 30px 25px 30px;
`

const Label = styled.div`
    width: 100%;
`

const Title = styled.div`
    margin-bottom: 15px;
    color: #000;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`

const HorizontalLine = styled.div`
    border-top: 2px solid #D9D9D9;
    margin-bottom: 15px;
`
