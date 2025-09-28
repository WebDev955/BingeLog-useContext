// IMPORTS - Hooks

// IMPORTS - Components
import ShowNotesCopy from "../../../components/UI/ShowNotes copy"


// IMPORTS - Styles
import styles from "./EpisodeDetailsCopy.module.css"

function EpisodeDetailsCopy({ seasonTitle, show }) {
    
  const selectedSeason = show.seasons.find(
    (season) => season.title === seasonTitle
  )
  return (
    <main className={styles.epWrapper}>
      <div>
        <p className = {styles.epList}>Episodes List</p>
      </div>
      {selectedSeason && (
        <div key={selectedSeason.title}>
          {selectedSeason.episodes?.map((ep) => (
            <div className = {styles.singleEp} key={ep.title} id={ep.title}>
              <header>
                <h3>{ep.title}</h3>
                  <div className={styles.noteBttnsDiv}>
                    <ShowNotesCopy id={ep.title}/> 
                  </div>
              </header>
              <br/>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default EpisodeDetailsCopy