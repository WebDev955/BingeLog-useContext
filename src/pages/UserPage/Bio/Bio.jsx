//IMPORTS - Hooks
import { useContext } from "react"
import { NavLink,  } from "react-router-dom"
//IMPORTS - Components 
import BioEdit from "./BioEdit"
import { UserAccountContext } from "../../../components/Contexts/UserAccountContext"
import { UserProfileContext } from "../../../components/Contexts/UserProfileContext"
import Bttn from "../../../components/UI/Bttn"
//IMPORTS - Styles
import styles from "./bio.module.css"
//IMPORTS - Sources
import  DefaultAvatar from "./DefaultAvatar.jpg"

function Bio({id}) {
 //<NavLink to="/friendsList"><h2>Friends List</h2></NavLink>
  const userAccountCtx = useContext(UserAccountContext)
  const userProCtx = useContext(UserProfileContext) 

  return (
    <>
        <main className={styles.mainWrapper}>
          <div className={styles.header}>
              <Bttn className={styles.editBttn}onClick={userProCtx.editBio}>Edit Bio</Bttn>
              <Bttn className={styles.editBttn}onClick={() => userAccountCtx.addFriend(id)}>Add Friend</Bttn>
              <img className={styles.avatar} src={userProCtx.bioAvatar} width="75" height="75"/>
              <h3>{userAccountCtx.userAccount.userName}</h3>
              <h3>Binging since: 2025</h3> 
              
              {userProCtx.editingBio ? <BioEdit/> : 
                <div className={styles.bioBox}>
                  {userProCtx.bio}
                </div>
              }
              <div className={styles.totalBinge}>
                  <h4>Shows Finished: 5 </h4>
                  <h4>Currently Binging 2 shows</h4>
              </div>
          </div>
            <a href="http://localhost:5173/userPage" to="_blank"><h4>Share Profile Link</h4></a>
        </main>
    </>
  )
}
export default Bio