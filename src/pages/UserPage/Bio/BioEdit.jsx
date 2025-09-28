//IMPORTS - Hooks
import { useContext } from "react"
//IMPORTS - Components 
import Bttn from "../../../components/UI/Bttn"
import { UserProfileContext } from "../../../components/Contexts/UserProfileContext"
//IMPORTS - Styles
    //import styles from FILE LOCATION


function BioEdit() {

  const userProCtx = useContext(UserProfileContext)

  return (
    <>
        <label>Upload Avatar</label>
        <input 
          type="file"
          accept="image/*"
          onChange= {userProCtx.uploadAvatar}
          
          /> 
        <div>
              <textarea
              value={userProCtx.bio}
              onChange = {(e) => userProCtx.updateBio(e.target.value)}
            />
            <Bttn onClick={userProCtx.saveBio}>Save Bio</Bttn>
        </div>
    </>
  )
}
export default BioEdit