//IMPORTS - Hooks
import Input from "./Input"
import Bttn from "./Bttn"
import { useContext, useEffect } from "react"
//IMPORTS - Components 
import { UserProfileContext } from "../Contexts/UserProfileContext"
import EpisodeDetails from "../../pages/UserPage/MyShows/EpisodeDetails"
//IMPORTS - Styles
 //import styles from FILE LOCATION

 


function ShowNotesEdit({epTitle}) {
  const userCtx = useContext(UserProfileContext)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("EpNotes " + epTitle))
    if (saved) {
      userCtx.updateShowNotes(saved, epTitle)
    }
  }, [epTitle])

    useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("CharNotes " + epTitle))
    if (saved) {
      userCtx.updateCharacterNotes(saved, epTitle)
    }
  }, [epTitle])

  return (
    <main>
    <div>
          <textarea
            value={userCtx.showNotes[epTitle] || ""}
            onChange={(e)=>userCtx.updateShowNotes(e.target.value, epTitle)}
          /> 
          <Bttn onClick={() => userCtx.saveShowNotes(epTitle)}>Save Show Notes</Bttn>          
    </div>
<hr/>
    <div>
        <p>Character Notes</p>
          <textarea
            value={userCtx.characterNotes[epTitle] || ""}
            onChange={(e)=>userCtx.updateCharacterNotes(e.target.value, epTitle)}
          /> 
          <Bttn onClick={() => userCtx.saveCharacterNotes(epTitle)}>Save Character Notes</Bttn>           
    </div>
  </main>
  )
}  
export default ShowNotesEdit