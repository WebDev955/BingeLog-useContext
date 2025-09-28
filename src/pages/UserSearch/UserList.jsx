//IMPORTS - Hooks
import { useContext } from "react"
import { NavLink, useParams, useSearchParams } from "react-router-dom"

//IMPORTS - Components 
import Bttn from "../../components/UI/Bttn"
import {UserProfileContext} from "../../components/Contexts/UserProfileContext"
import { UserAccountContext } from "../../components/Contexts/UserAccountContext"
//IMPORTS - Styles
import styles from "./ShowsList.module.css"

function UsersList({userDetails}) {

console.log(userDetails)

const params = useParams()
const id = params.id

  const userAcctCtx = useContext(UserAccountContext)
  return (
    <main className={styles.showWrapper}>
      {userDetails && (
          <div key={userDetails.id} className={styles.showInfo}>
            <header>
                <NavLink to={`userSearch/${id}`}><h2>{userDetails.userName}</h2></NavLink>
                <Bttn onClick = {() => userAcctCtx.addFriend(userDetails.id)}>Save User</Bttn>
              </header>

          </div>
    )}
   </main>
  )
}
export default UsersList