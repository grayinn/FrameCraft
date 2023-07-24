import React, { useState } from 'react'
import styled from 'styled-components'
import Pin from './Pin'
import unsplash from '../api/unsplash'

function Mainboard() {
  const [images, setImages] = useState([]);

  const getImages = async (term) => {
    try {
      const response = await unsplash.get("search/photos", {
        params: {
          query: term,
          per_page: 20,
        },
      })
      setImages(response.data.results)

    } catch (error) {
      console.error(error);
    }
  }

  // getImages: lấy hình ảnh từ API
  React.useEffect(() => {
    getImages('cat') 
  }, [])

  return (
    <MainboardWrapper>
      {images.map((image) => (
        <Pin key={image.id} imageUrl={image.urls.regular} />
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
