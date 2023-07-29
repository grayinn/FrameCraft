import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Pin from './Pin'
import unsplash from '../api/unsplash'

function Mainboard() {
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
    getImages('raining')
  }, [])

  return (
    <MainboardWrapper>
      {images.map((image) => (
        <Pin
          key={image.id}
          imageUrl={image.imageUrl}
          title={image.title}
          likes={image.likes}
          userName={image.userName} 
        />
      ))}
    </MainboardWrapper>
  )
}

export default Mainboard

const MainboardWrapper = styled.div`
  margin: 1% 3.5% 3.5% 3.5%;
  columns: 5 250px;
  column-gap: 15px;
`
