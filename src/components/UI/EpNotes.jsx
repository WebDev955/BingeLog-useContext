
//IMPORTS - Hooks
import Input from "./Input"
import Bttn from "../UI/Bttn"
import { useContext, useEffect } from "react"
//IMPORTS - Components 
import { UserProfileContext } from "../Contexts/UserProfileContext"
import EpisodeDetails from "../../pages/UserPage/MyShows/EpisodeDetails"
//IMPORTS - Styles
 //import styles from FILE LOCATION

 


function EpNotes({epTitle}) {
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
    <div>
        <Bttn onClick = {() => userCtx.editShowNotes(epTitle)}>Edit Episode</Bttn> 
          <textarea
            value={userCtx.showNotes[epTitle] || ""}
            onChange={(e)=>userCtx.updateShowNotes(e.target.value, epTitle)}
          /> 
          <Bttn onClick={() => userCtx.saveShowNotes(epTitle)}>Save Show Notes</Bttn>         
        <p>Character Notes</p>
          <textarea
            value={userCtx.characterNotes[epTitle] || ""}
            onChange={(e)=>userCtx.updateCharacterNotes(e.target.value, epTitle)}
          /> 
          <Bttn onClick={() => userCtx.saveCharacterNotes(epTitle)}>Save Character Notes</Bttn>    
    </div>
  )
}  
export default EpNotes