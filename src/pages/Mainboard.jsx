import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Pin from '../components/Pin'
import unsplash from '../api/unsplash'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PeopleIcon from '@mui/icons-material/People'

import Header from '../components/Header'


function Mainboard() {
  // search
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const keywords = ['Typography', 'New an idea', 'Phoduct design image', 'Home decoration', 'Vintage costume design', 'Minimalist art', 'Package redesign Vinamilk', 'Home decoration']
  const colors = ['#FFE4DE', '#82AFE1', '#D8F3FF', '#F3EED9', '#FFE4DE', '#82AFE1', '#D8F3FF']
  const getKeywordColor = (index) => colors[index % colors.length]

  const [images, setImages] = useState([])
  const getImages = async (term) => {
    try {
      const response = await unsplash.get('search/photos', {
        params: {
          query: term,
          per_page: 20,
        },
      })

      const imagesWithUserNames = response.data.results.map((imageData) => {
        const { id, urls, description, likes, user } = imageData
        const userName = user && user.name ? user.name : 'Unknown'

        return {
          id,
          imageUrl: urls.regular,
          title: description,
          likes,
          userName, 
        }
      })

      setImages(imagesWithUserNames)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (searchQuery) {
      getImages(searchQuery)
    } else {
      getImages("raining")
    }
  }, [searchQuery])


  return (
    <Wrapper>
      <Header onSearch={handleSearch} />
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
      <MainboardWrapper>
        {images.map((image) => (
          <Link to={`/detail/${image.id}`} key={image.id}>
            <Pin
              key={image.id}
              imageUrl={image.imageUrl}
              title={image.title}
              likes={image.likes}
              userName={image.userName}
            />
          </Link>
        ))}
      </MainboardWrapper>
    </Wrapper>
  )
}

export default Mainboard

const MainboardWrapper = styled.div`
    margin: 1% 3.5% 3.5% 3.5%;
    columns: 5 250px;
    column-gap: 15px;

    a {
      text-decoration: none;
    }
`

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

const CommonButton14 = `
    width: 10%;
    padding: 7px;
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

export const Button1 = styled.div`
    ${ CommonButton14 }
    border-radius: 20px 0px 0px 20px;
`

const CommonButton23 = `
    width: 10%;
    padding: 7px;
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

    a {
        text-decoration: none;
        color: rgba(58, 58, 58, 0.80);
    }
`

export const Button2 = styled.div`
    ${CommonButton23}
    border-radius: 0px 20px 20px 0px;
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





