//IMPORTS - Hooks
import { NavLink } from "react-router-dom"
import { useContext } from "react"
//IMPORTS - Components 
import Bttn from "./Bttn"

//IMPORTS - Styles
import styles from "./MainNav.module.css"
import { UserAccountContext } from "../Contexts/UserAccountContext"
import SignUp from "./Signup"
import Login from "../LoginLogOut/Login"


function MainNav() {
const accountCtx = useContext(UserAccountContext)

const id = accountCtx.userAccount.id
const userName = accountCtx.userAccount.userName

//This tells React to evaluate the JavaScript expression inside the ${} and place the value of id into the path.
//to={`/userPage/${id}`
  return (
    <header className={styles.mainWrapper}>
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <NavLink to="/"><img width = "30px" src="/HomeIcon.png"/></NavLink><br/>
                  
                </li>
                <li>
                    {!accountCtx.isLoggedIn && <Bttn onClick ={accountCtx.startLoggingIn}><img width = "30px" src="/LogIn.png"/></Bttn>}
                </li>
                 <li>
                    {!accountCtx.isLoggedIn && <Bttn onClick = {accountCtx.startCreatingAccount}>Create Account</Bttn>}
                </li>
                <li>
                    {accountCtx.isLoggedIn && <NavLink to="/bingelog"><img width = "30px" src="/BingeLog.png"/></NavLink>}
                </li>
                 <li>
                    
                    {accountCtx.isLoggedIn && <NavLink to={`userPage/${id}`}><img width="30px" src ="/UserPage.png"/></NavLink>}
                </li>
                 <li>
                    {accountCtx.isLoggedIn &&<NavLink to="/shows"><img width= "30px" src= "/TvIcon.png"/></NavLink>}
                </li>
                 <li>
                    {accountCtx.isLoggedIn &&<NavLink to="/userSearch"><img width= "30px" src= "/UserSearchIcon.png"/></NavLink>}
                </li>
                 <li>
                    {accountCtx.isLoggedIn && <Bttn onClick = {accountCtx.logOut}><img width = "30px" src="/LogOut.png"/></Bttn>}
                </li>
            </ul>  
            <SignUp/>
            <Login/>
        </nav>
    </header>
    
  )
}
export default MainNav