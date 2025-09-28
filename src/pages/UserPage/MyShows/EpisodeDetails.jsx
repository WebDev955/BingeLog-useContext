// IMPORTS - Hooks
import { useContext, useState, useEffect} from "react"

// IMPORTS - Components
import ShowNotesEditNew from "../../../components/UI/ShowNotes"
import { UserProfileContext } from "../../../components/Contexts/UserProfileContext"
import Bttn from "../../../components/UI/Bttn"
import Input from "../../../components/UI/Input"

// IMPORTS - Styles
import styles from "./EpisodeDetails.module.css"

function EpisodeDetails({ seasonTitle, show }) {
  const [isViewingNotes, setIsViewingNotes] = useState()
  const userCtx = useContext(UserProfileContext)
  
  function  displayNotes(epTitle){
    setIsViewingNotes(epTitle)
  }
  
  const selectedSeason = show.seasons.find(
    (season) => season.title === seasonTitle
  )
  return (
    <main className={styles.epWrapper}>
      <div>
        <p className = {styles.epList}>Episodes List</p>
      </div>
      {selectedSeason && (
        <div key={selectedSeason}>
          {selectedSeason.episodes?.map((ep) => (
            <div className = {styles.singleEp} key={ep.title} id={ep.title}>
              <header>
                <h3>{ep.title} </h3>
                  <div className={styles.noteBttnsDiv}>
                    {userCtx.areNotesOpen ? null : (
                      <Bttn className={styles.editBttn} onClick={() => userCtx.openNotes(ep.title)}>
                        Edit Notes
                      </Bttn>
                    )} 
                    {isViewingNotes 
                      ? <Bttn className={styles.closeNotesBttn} onClick = {() => displayNotes()}>Close Notes</Bttn>
                      : <Bttn className={styles.viewNotesBttn}onClick = {() => displayNotes(ep.title)}>View Notes</Bttn>
                    } 
                    
                  </div>
                  {userCtx.areNotesOpen === ep.title && (
                    <div> <ShowNotesEditNew epTitle={ep.title} showTitle ={show.title}/> </div>
                  )}
              </header>
            {isViewingNotes === ep.title && (
              <div className={styles.showNotes}>
                <p>Episode Notes |  <Input label="Watched" type="checkbox" /> </p>
                {userCtx.epNotes[ep.title] || ""}
                <hr/>
                <p>Character Notes: {userCtx.characterNotes[ep.title] || ""}</p>
            </div>
              )}
              <br/>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default EpisodeDetails