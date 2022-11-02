import { Link } from "react-router-dom"

export default function AlbumCard({ thisAlbum, setAlbums }) {
  const deleteOneAlbum = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_ENDPOINT}/albums/${thisAlbum.albumId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
      fetch(process.env.REACT_APP_ENDPOINT+'/albums')
      .then(response => response.json())
      .then(setAlbums)
      .catch(alert)
     })
    .catch(alert)
  }
  return (
    <>
    <Link to={`/albums/${thisAlbum.albumId}`}>
      <div className="album-card">
        <h3 className="album-title">{thisAlbum.album}</h3>
        <p>{thisAlbum.artist}, {thisAlbum.year}</p>
      </div>
    </Link>
      <button onClick={(e)=>deleteOneAlbum(e)} >Delete Album</button>
    </>
  )
}