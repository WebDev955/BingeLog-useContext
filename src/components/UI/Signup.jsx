//IMPORTS - Hooks
import {useContext} from "react"
//IMPORTS - Components 
import SignUpForm from "./SignUpForm"
import Modal from "./Modal"
import { UserAccountContext } from "../Contexts/UserAccountContext"
//IMPORTS - Styles
    //import styles from FILE LOCATION

function SignUp() {

const accountCtx = useContext(UserAccountContext)

function handleSubmit(event){
    event.preventDefault();

    const formData = new FormData (event.target);
    const email = formData.get('email')
    const userName = formData.get('username')
    const password = formData.get('password')
    

    const newUserData = {
        email,
        userName,
        password
    }
    accountCtx.createNewUser(newUserData)
}
return (
    <>  
        <Modal open = {accountCtx.isCreatingAccount} onClose={accountCtx.stopCreatingAccount}>
            <SignUpForm
                onSubmit = {handleSubmit}
                type = "submit"
            />
        </Modal>

    </>
  )
}
export default SignUp
