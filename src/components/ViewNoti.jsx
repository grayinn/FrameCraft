import React from 'react'
import styled from "styled-components"

function ViewNoti() {
  return (
    <ViewNotiContainer>
        <UserInforLabel>
            <Title>Your notification</Title>
            <HorizontalLine />
        </UserInforLabel>

    </ViewNotiContainer>
  )
}
export default ViewNoti


const ViewNotiContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border-radius: 20px;
    background: #FFF;

    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 50px;  // tạm
    padding: 20px 30px 25px 30px;
`

const UserInforLabel = styled.div`
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
