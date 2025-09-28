//IMPORTS - Hooks
import Bttn from "./Bttn"
import { useContext, useEffect, useState } from "react"
//IMPORTS - Components 
import { UserProfileContext } from "../Contexts/UserProfileContext"
import Input from "./Input"

//IMPORTS - Styles
import styles from "./ShowNotesCopy.module.css"

function ShowNotesCopy({id}) {
    const [isViewingNotes, setIsViewingNotes] = useState()
    const userCtx = useContext(UserProfileContext)
    
    function  displayNotes(id){
      setIsViewingNotes(id)
    }

    function  closeNotes(){
      setIsViewingNotes()
    }
  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("EpNotes: " +  id))
    if (saved) {
      userCtx.updateEpNotes(saved, id)
    }
  }, [id])

   useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("CharNotes: " + id))
    if (saved) {
        userCtx.updateCharNotes(saved, id)
    }
  }, [id])

  return (
    <main className={styles.showNotesWrapper}>
      <div className={styles.noteBttnsDiv}>
        {userCtx.areNotesOpen === id 
          ? ( <Bttn className = {styles.saveNotesBttn} onClick={() => userCtx.saveNotes(id)}>
                Save Notes
              </Bttn> 
            )
          : ( <Bttn className = {styles.editBttn} onClick={() => userCtx.openNotes(id)}>
                Edit Notes
              </Bttn>
            )
       } 

        {userCtx.areNotesOpen !==id && 
          isViewingNotes === id  
          ? (<Bttn className={styles.closeNotesBttn} onClick = {() => closeNotes()}> 
              Close Notes 
            </Bttn> 
            )
          : (<Bttn className={styles.viewNotesBttn}  onClick = {() => displayNotes(id)}>
                View Notes
            </Bttn>
            )
        } 


      </div>
        {userCtx.areNotesOpen === id && (
          <div>
            <p>Episode Notes</p> 
              <textarea
                value={userCtx.epNotes[id] || ""}
                onChange={(e)=>userCtx.updateEpNotes(e.target.value, id)}
            />            
        </div>
        )}  

        {isViewingNotes === id && (
              <div className={styles.showNotes}>
                <p>Episode Notes |  <Input label="Watched" type="checkbox" /> </p>
                {userCtx.epNotes[id] || ""}
                <hr/>
                <p>Character Notes: {userCtx.characterNotes[id] || ""}</p>
                <p>characterNotes</p>
            </div>
             )}
  </main>
  )
}  
export default ShowNotesCopy