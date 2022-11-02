import Header from "../components/Header"
import AlbumList from "../components/AlbumList"

export default function Home() {
  return (
    <>
      <Header title={"Best-Selling Albums"}/>
      <AlbumList />
    </>
  )
}