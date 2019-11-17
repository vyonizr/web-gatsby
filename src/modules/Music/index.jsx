import React, { useState } from 'react'

import { FullWrapper, SingleContainer, Item } from './style'
import list from './list'
import others from './others'

export default function Music() {
  const [albums] = useState(list)
  const [loading] = useState(false)
  const [bgColor, setBgColor] = useState('#272727')

  // const getSpotifyAlbums = async () => {
  //   const url =
  //     'https://api.spotify.com/v1/artists/40lkpbIOSU33kN0mZyMvFW/albums'
  //   const token =
  //     'Bearer BQAhycvvNHC_OulJthvYWzKA6Cwll16yXZ6jzXVHhT_9KVBrZHiWO2bHn3i-mWrjOSicY40J5doab0x45_vRFMwz8UD9i6fufKHQ36TL82rd6D_ZU1xn-HhySISec3nMhfw_ZFiY-hiLHdk9Ol3m7TP76TmwzchYw8UWNzW_jYjU6K4f70nT9sDWJaxCa_DjpEqhwkW--zrVlPIbNMnUj7l6-SD0PuBN574ZMlh77k-UyyM'
  //   const config = {
  //     headers: {
  //       Accept: 'application/json',
  //       Authorization: token,
  //       'Content-Type': 'application/json',
  //     },
  //   }

  //   try {
  //     const { data } = await axios.get(url, config)
  //     setAlbums(data.items)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // const getItunesAlbums = async () => {
  //   const url = 'https://itunes.apple.com/lookup?id=818525307&entity=album'
  //   try {
  //     axios.get(url).then(({ data }) => {
  //       setAlbums(data.results.slice(1))
  //     })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // const getDiscography = () => {
  //   setLoading(true)
  //   const url = `${baseURL}/discography`
  //   axios
  //     .get(url)
  //     .then(response => {
  //       setAlbums(response.data)
  //       setLoading(false)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // useEffect(() => {
  //   getDiscography()
  // }, [])

  return (
    <FullWrapper
      bgColor={bgColor}
    >
      {loading ? (
        <div>Loading</div>
      ) : (
        <SingleContainer>
          {
            albums.map((album, index) => (
              <a key={index} href={album.fanlink_url} target='_blank' rel="noopener noreferrer">
                <Item
                  onMouseOver={() => setBgColor(album.color)}
                  onMouseLeave={() => setBgColor('#272727')}
                >
                  <div className='album-description'>
                    <div>{album.title}</div>
                    <div className='album-year'>- {album.year} -</div>
                  </div>
                  <img src={album.artwork_url} alt={album.title} height='150px' />
                </Item>
              </a>
            ))
          }
        </SingleContainer>
      )}
      <div>
        <h2>Covers</h2>
        <div>
          <ul>
            {
              others.map((track, index) =>(
                <li key={ index }>
                  <a href={ track.url } target='_blank' rel="noopener noreferrer">{ track.title }</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div>
        <h2>Podcast</h2>
        <div>
          <ul>
            <li><a href='https://youtu.be/194VDUnRkgI'>Eunoia Podcast - Episode 1</a></li>
          </ul>
        </div>
      </div>
    </FullWrapper>
  )
}
