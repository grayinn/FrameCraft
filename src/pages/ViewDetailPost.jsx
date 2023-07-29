import React from 'react'
import styled from 'styled-components'

function ViewDetailPost() {
  return (
    <ViewDetailContainer>
        <LeftSection>
            <p>Image here</p>
        </LeftSection>
        <RightSection>

        </RightSection>

    </ViewDetailContainer>
  )
}
export default ViewDetailPost


const ViewDetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Noto Sans;
    margin: 15%;
    margin-top: 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.18);
    padding: 60px 80px 60px 80px;
`


const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    background-color: #D9D9D9;
    padding: 10px;
    border-radius: 20px;
    justify-content: center;
    cursor: pointer;
`

const RightSection = styled.div`
`
