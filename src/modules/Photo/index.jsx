import React, { useState } from 'react'

import { FullWrapper, PhotoContainer, Item } from './style'
import photos from './photos'

export default function Photo() {
  const [loading] = useState(false)

  return (
    <FullWrapper>
      {loading ? (
        <div>Loading</div>
      ) : (
        <PhotoContainer>
          {
            photos.map((photo, index) => (
              <a key={index} href={photo.url} target='_blank' rel="noopener noreferrer">
                <Item>
                  <img src={photo.src} alt={photo.caption} />
                </Item>
              </a>
            ))
          }
        </PhotoContainer>
      )}
    </FullWrapper>
  )
}
