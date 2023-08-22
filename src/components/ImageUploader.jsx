import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import styled from 'styled-components'

function ImageUploader() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [isImageUploaded, setIsImageUploaded] = useState(false)

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setSelectedImage(imageUrl)
            setIsImageUploaded(true)
        }
    }

    return (
        <Container isImageUploaded={isImageUploaded}>
            <label htmlFor="image-input">
                <input
                    type="file"
                    accept="image/*"
                    id="image-input"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />

                {!selectedImage && (
                    <div className='upload-body'>
                        <AddCircleIcon className='upload-icon' fontSize="large" />
                        <div className='upload-text'>Drag and drop or upload an image</div>
                    </div>
                )}

            </label>
            {selectedImage && (
                <img
                    src={selectedImage}
                    alt="Uploaded"
                    className='upload-image'
                />
            )}
        </Container>
  )
}
export default ImageUploader


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.isImageUploaded ? 'white' : '#D9D9D9'};
    width: 100%;
    border-radius: 20px;
    height: 100%;

    .upload-body {
        cursor: pointer;
        text-align: center;
    }

    .upload-icon {
        margin-bottom: 10px;
        margin-top: 20px;
        color: #3A3A3A;
    }

    .upload-text {
        color: #3A3A3A;
        font-size: 18px;
        font-weight: 400;
    }

    .upload-image {
        max-width: 380px;
        height: auto;
        border-radius: 20px;
    }
`
