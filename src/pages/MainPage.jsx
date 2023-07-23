import React from 'react'
import styled from "styled-components"

import Header from '../components/Header'
import Mainboard from '../components/Mainboard'

function MainPage() {

  const keywords = ['Typography', 'New an idea', 'Phoduct design image', 'Home decoration', 'Vintage costume design', 'Minimalist art', 'Package redesign Vinamilk', 'Home decoration']
  const colors = ['#FFE4DE', '#82AFE1', '#D8F3FF', '#F3EED9', '#FFE4DE', '#82AFE1', '#D8F3FF']

  const getKeywordColor = (index) => colors[index % colors.length]

  return (
    <Wrapper>
        <Header />
        <HorizontalLine />
        <ButtonGroup>
          <Button1>
            <p>For you</p>
          </Button1>
          <Button2>
            <p>Following</p>
          </Button2>
        </ButtonGroup>

        <KeywordsWrapper>
          {keywords.map((keyword, index) => (
            <KeywordItem key={index} color={getKeywordColor(index)}>
              {keyword}
            </KeywordItem>
          ))}
        </KeywordsWrapper>

        <Mainboard />

    </Wrapper>
  )
}

export default MainPage

const Wrapper = styled.div`

`

const HorizontalLine = styled.div`
    width: 100%;
    border-top: 1px solid #B6B6B6;
    margin-top: 5px;
    margin-bottom: 20px;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  //background-color: yellow;

  margin-right: 3.5%;
  margin-left: 3.5%;
`

const Button1 = styled.div`
  width: 10%;
  padding: 7px;
  border-radius: 20px 0px 0px 20px;
  background-color: red;
  align-items: center;
  cursor: pointer;

  background-color: #D9534F;
  color: #fff;
  border: 1px solid #CF4C48;

  p {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }

  &:hover {
    background-color: #EC5E5A; 
  }
`

const Button2 = styled.div`
  width: 10%;
  padding: 7px;
  border-radius: 0px 20px 20px 0px;
  //background-color: green;
  cursor: pointer;

  background-color: white;
  color: rgba(58, 58, 58, 0.80);
  border: 1px solid rgba(58, 58, 58, 0.80);

  p {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }

  &:hover {
    background-color: #EBEBEB;
  }
`

const KeywordsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  margin-right: 3.5%;
  margin-left: 3.5%;

  margin-top: 1%;
  margin-bottom: 1%;
`

const KeywordItem = styled.div`
  background-color: ${(props) => props.color || '#f0f0f0'};
  border-radius: 20px;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  white-space: nowrap;
`
