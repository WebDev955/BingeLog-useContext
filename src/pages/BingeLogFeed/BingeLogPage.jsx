//IMPORTS - Hooks
//import { useContext } from "react"
//IMPORTS - Components 
import FeedCard from "./FeedCard"
import { UserAccountContext } from "../../components/Contexts/UserAccountContext"

//IMPORTS - Styles
import styles from "./BingeLogPage.module.css"

/* HOW THIS PAGE SHOULD NORMALLY WORK
    userCtx.friendsList.map((friend) => {
      <FeedCard/>
    }))
 
*/

function BingeLog() {
  //const userAcct = useContext(UserAccountContext)

  return (
    <main className = {styles.mainWrapper}>
        <h1>BingeLog Feed</h1>
        <FeedCard/>
    </main>
   
  )
}
export default BingeLog
