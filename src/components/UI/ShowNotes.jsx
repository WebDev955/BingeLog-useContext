//IMPORTS - Hooks
import Bttn from "./Bttn"
import { useContext, useEffect } from "react"
//IMPORTS - Components 
import { UserProfileContext } from "../Contexts/UserProfileContext"

//IMPORTS - Styles
import styles from "./ShowNotes.module.css"



function ShowNotesEdit({epTitle, showTitle}) {
  const userCtx = useContext(UserProfileContext)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("EpNotes " +  epTitle))
    if (saved) {
      userCtx.updateEpNotes(saved, epTitle)
    }
  }, [epTitle])

   useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("CharNotes " + epTitle))
    if (saved) {
        userCtx.updateCharNotes(saved, epTitle)
    }
  }, [epTitle])

  return (
    <main className={styles.showNotesWrapper}>
        <Bttn className = {styles.saveNotesBttn}onClick={() => userCtx.saveNotes(epTitle)}>Save Notes</Bttn> 
        <div>
            <p>Episode Notes</p> 
            <textarea
                value={userCtx.epNotes[epTitle] || ""}
                onChange={(e)=>userCtx.updateEpNotes(e.target.value, epTitle)}
            />            
        </div>

        <div>
            <p>Character Notes</p>
            <textarea
                value={userCtx.characterNotes[epTitle] || ""}
                onChange={(e)=>userCtx.updateCharNotes(e.target.value, epTitle)}
            />            
        </div>        
  </main>
  )
}  
export default ShowNotesEdit