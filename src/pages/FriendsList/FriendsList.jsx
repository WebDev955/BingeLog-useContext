//IMPORTS - Hooks
import { useContext, useEffect, useState } from "react"
//IMPORTS - Components 
import{ UserAccountContext} from "../../components/Contexts/UserAccountContext"

//IMPORTS - Styles
//import styles from "./UserPage.module.css"


function FriendsList() {

const userAcct = useContext(UserAccountContext)
const [globalUsers, setGlobalUsers] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/users')
    .then (res => res.json())
    .then (data => setGlobalUsers(data))
},[])

 return (
    <>
      <h1>Friends List</h1>
      {userAcct.userAccount.friendList.map(friendId => {
        const friend = globalUsers.find(user => user.id === friendId);
        return (
          <div key={friendId}>
            <p>{friend ? friend.userName : "Unknown User"}</p>
          </div>
        );
      })}
    </>
  );
}
export default FriendsList
