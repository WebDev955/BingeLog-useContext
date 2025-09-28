//IMPORTS - Hooks
import Input from "./Input"
import Bttn from "../UI/Bttn"
import { useContext, useEffect } from "react"
//IMPORTS - Components 
import { UserProfileContext } from "../Contexts/UserProfileContext"
import EpisodeDetails from "../../pages/UserPage/MyShows/EpisodeDetails"
//IMPORTS - Styles
 //import styles from FILE LOCATION

 


function CharNotesEdit({epTitle}) {
  const userCtx = useContext(UserProfileContext)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("CharNotes " + epTitle))
    if (saved) {
      userCtx.updateCharacterNotes(saved, epTitle)
    }
  }, [epTitle])


  return (
    <div>
        <p>Character Notes</p>
          <textarea
            value={userCtx.characterNotes[epTitle] || ""}
            onChange={(e)=>userCtx.updateCharacterNotes(e.target.value, epTitle)}
          /> 
          <Bttn onClick={() => userCtx.saveCharacterNotes(epTitle)}>Save Character Notes</Bttn>           
    </div>
  )
}  
export default CharNotesEdit