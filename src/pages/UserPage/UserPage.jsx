//IMPORTS - Hooks
import { useState } from "react"
import { useParams } from "react-router-dom"
//IMPORTS - Components 
import Bttn from "../../components/UI/Bttn"
import Bio from "../UserPage/Bio/Bio"

//IMPORTS - Styles
import styles from "./UserPage.module.css"
//import MyShows from "./MyShows/MyShows"
import MyShows from "./MyShows/MyShows"
import MyReviews from "./MyReviews/MyReviews"
import CurrentlyWatching from "./CurrentlyWatching/CurrentlyWatching"

function UserPage() {

//component displays
  const [content, setContent] = useState(<MyShows/>)
//display Components
  function displayShows(){
    setContent(<MyShows userId={id}/>)
}
  function displayReviews(){
    setContent(<MyReviews/>)
}
  function displayWatching(){
    setContent(<CurrentlyWatching/>)
}

const params = useParams()
const id = params.id


  return (
    <>
      <main className={styles.mainWrapper}>
            <Bio id = {id}/>
            <div className={styles.menuBttns}>
              <Bttn onClick={displayShows}>My Shows</Bttn> | 
              <Bttn onClick={displayReviews}>My Reviews</Bttn> | 
              <Bttn onClick={displayWatching}>Currently Watching</Bttn>
            </div>
            <div className={styles.mainContent}>
              {content}
            </div>
      </main>
    </>
  )
}
export default UserPage
