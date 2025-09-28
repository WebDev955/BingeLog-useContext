//IMPORTS - Hooks
import {useContext} from "react"
//IMPORTS - Components 
import LogInForm from "./LogInForm"
import Modal from "../UI/Modal"
import { UserAccountContext } from "../Contexts/UserAccountContext"
//IMPORTS - Styles
    //import styles from FILE LOCATION

function Login() {

const accountCtx = useContext(UserAccountContext)

function handleLogin(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const userData = {
        userName: formData.get("username"),  
        password: formData.get("password"),  
    }
    accountCtx.verifyLogin(userData)
}
return (
    <>  
        <Modal 
            open = {accountCtx.isLoggingIn}  
            onClose={ accountCtx.stopLoggingIn}>
            <LogInForm
                onSubmit = {handleLogin}
                type = "submit"
            />
        </Modal>

    </>
  )
}
export default Login
