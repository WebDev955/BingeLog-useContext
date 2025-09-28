//IMPORTS - Hooks
import { useContext } from "react"
//IMPORTS - Components 
import { UserProfileContext } from "../../../components/Contexts/UserProfileContext"
//IMPORTS - Styles
import styles from "./CurrentlyWatching.module.css"



function CurrentlyWatching() {
  
  const userCtx = useContext(UserProfileContext)
  return (
    <>
      <main className={styles.curWatchingWrapper}>
        <h2>Currently Binging:</h2>
        <div className={styles.watchingList}>
          {userCtx.currentlyBinging.map((title) => (
            <p>{title}</p>
          ))}
        </div>
      </main>
    </>
  )
}
export default CurrentlyWatching
