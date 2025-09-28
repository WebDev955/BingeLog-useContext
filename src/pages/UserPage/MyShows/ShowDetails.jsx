//IMPORTS - Hooks
import {useState } from "react"
//IMPORTS - Components
import EpisodeDetails from "./EpisodeDetails"
import EpisodeDetailsCopy from "./EpisodeDetails copy"
//IMPORTS - Styles
import styles from "./ShowDetails.module.css"


function ShowDetails({show}) {

  const [seasonTitle, setSeasonTitle] = useState("")

  function selectSeason(season){
    setSeasonTitle(season)
}

  return (
    <main className={styles.seasonsWrapper}>
        <p className={styles.seasonsTitle}>Seasons List</p>
        {show  && (
            <div key={show.imdbId} >
              {show.seasons?.map((season) => (
                <p key = {season.title} onClick={() => selectSeason(season.title)}>
                  {season.title}
                </p>
            )
            )} 
              {seasonTitle  &&
              <EpisodeDetailsCopy seasonTitle={seasonTitle} show={show}/>}
          </div>
        )}
    </main>
  )
}

export default ShowDetails
