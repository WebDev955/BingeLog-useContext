//IMPORTS - Hooks
import { useState, useContext, useEffect } from "react"
//IMPORTS - Components 
import Bttn from "../../../components/UI/Bttn";
import ShowDetails from "./ShowDetails"
import { UserProfileContext } from "../../../components/Contexts/UserProfileContext";
import { UserAccountContext } from "../../../components/Contexts/UserAccountContext";

//IMPORTS - Styles
import styles from "./MyShows.module.css"


function MyShows({id}) {
 const [showId, setShowId] = useState("")
 const userCtx = useContext(UserProfileContext)
 const userAcctCtx = useContext(UserAccountContext)
 
 
function handleOnClick(id){
  setShowId(id)
}


return (
      <main {...id}className ={styles.showWrapper}>
        <h2>Show Sorting Options </h2>
        {userCtx.myShows.map((show) => (
          <div className ={styles.showTitle} key={show.imdbId}>
            <p onClick={() => handleOnClick(show.imdbId)}>{show.title}</p>
            <div className ={styles.showStatus}>
              <label> Finished
                <input type="checkbox" />
              </label> || 
              <label> Currently Binging
                <input 
                  type="checkbox"
                  onClick={() => userCtx.binging(show.title)}
                />
              </label>
            </div>
            {showId === show.imdbId && 
              <ShowDetails id={showId} show={show} />}
          </div>
        ))}
      </main>
  )
}
export default MyShows
