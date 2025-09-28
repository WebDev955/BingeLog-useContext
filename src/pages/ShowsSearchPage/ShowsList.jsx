//IMPORTS - Hooks
import { useContext } from "react"

//IMPORTS - Components 
import Bttn from "../../components/UI/Bttn"
import {UserProfileContext} from "../../components/Contexts/UserProfileContext"
//IMPORTS - Styles
import styles from "./ShowsList.module.css"

function ShowsList({showDetails}) {

  console.log(showDetails)
  
  const userCtx = useContext(UserProfileContext)
  return (
    <main className={styles.showWrapper}>
      {showDetails && (
          <div key={showDetails.imdbId} className={styles.showInfo}>
            <header>
                <h2>{showDetails.title}</h2>  
                <Bttn onClick = {() => userCtx.saveShow(showDetails)}>Save Show</Bttn>
              </header>
              <div className={styles.showDetails}>
                <div className={styles.genres}>
                  <p>{showDetails.genres[0].name}</p>|
                  <p>{showDetails?.genres[1]?.name}</p>|
                  <p>{showDetails?.genres[2]?.name}</p>
                </div>
                <div className={styles.seasonInfo}>          
                  <p>{showDetails?.seasonCount} Seasons</p> -
                  <p>{showDetails.episodeCount} Episodes</p> 
                </div> 
            </div>
            <p>{showDetails.overview}</p>
            <img src={showDetails.imageSet.verticalPoster.w240}/>
          </div>
    )}
   </main>
  )
}
export default ShowsList