import { useEffect, useState } from "react";
import AlbumCard from '../components/AlbumCard'

export default function AlbumList() {
  const [albums, setAlbums] = useState()
  useEffect(() => {
    fetch(process.env.REACT_APP_ENDPOINT+'/albums')
      .then(response => response.json())
      .then(setAlbums)
      .catch(alert)
  }, [])


  return (
    <main className="album-list">
      {!albums
        ? <h2>Loading...</h2>
        : albums.map(thisAlbum => (
          <AlbumCard
            setAlbums={setAlbums}
            key={thisAlbum.albumId}
            thisAlbum={thisAlbum} />
        ))
      }
    </main>
  )
}