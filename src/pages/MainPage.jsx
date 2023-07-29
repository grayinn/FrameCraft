// -- Trang chứa Mainboard
import React from 'react'
import styled from "styled-components"
import FavoriteIcon from '@mui/icons-material/Favorite'
import PeopleIcon from '@mui/icons-material/People'

import Header from '../components/Header'
import Mainboard from '../components/Mainboard'
import { Button1, Button2 } from '../styleCommon/Button'

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
            <IconWrapper>
              <FavoriteIcon className='icon1'/>
              <p>For you</p>
            </IconWrapper>
          </Button1>
          <Button2>
            <IconWrapper>
              <PeopleIcon className='icon2'/>
              <p>Following</p>
            </IconWrapper>
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
    border-top: 1px solid #CBCBCB;
    margin-top: 5px;
    margin-bottom: 20px;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;

    margin-right: 3.5%;
    margin-left: 3.5%;
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;

    .icon1 {
      margin-right: 8px;
      padding: 2px;
    }

    .icon2 {
      margin-right: 8px;
    }
`

const KeywordsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin: 1% 3.5% 1% 3.5%;
`

const KeywordItem = styled.div`
    background-color: ${(props) => props.color || '#f0f0f0'};
    border-radius: 20px;
    padding: 10px 15px;
    margin: 5px;
    cursor: pointer;
    white-space: nowrap;
    
`