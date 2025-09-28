//IMPORTS - Hooks
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
//import { useContext } from 'react'

//IMPORTS - Components 
import HomePage from './pages/Home/HomePage'
import UserPage from './pages/UserPage/UserPage'
import ShowsPage from './pages/ShowsSearchPage/ShowsPage'
import BingeLogPage from './pages/BingeLogFeed/BingeLogPage'
import About from './pages/About/About'
import FriendsList from './pages/FriendsList/FriendsList'
import UserSearchPage from './pages/UserSearch/UserSearchPage'

import {UserAccountContextProvider, UserAccountContext} from './components/Contexts/UserAccountContext'
import {UserProfileContextProvider} from './components/Contexts/UserProfileContext'
import RootLayout from './components/UI/RootLayout'

//{path: `friendsList/:userName/:id`, element: <FriendsList/>},
  //THIS IS AN ISSUE



//IMPORTS - Styles
import './App.css'

function App() {

//const userAcct = useContext(UserAccountContext)

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
      children: [
        {index: true, element: <HomePage/>},
        {path: `userPage/:id`, element: <UserPage/>},
        {path: "friendsList", element: <FriendsList/>},
        {path: "bingelog", element: <BingeLogPage/>},
        {path: "userSearch", element: <UserSearchPage/>,},
        {path: "shows", element: <ShowsPage/>},
        {path: "about", element: <About/>}

      ]
  },
])



  return (
    <>
      <UserAccountContextProvider>
        <UserProfileContextProvider>
          <RouterProvider router={router}/>
        </UserProfileContextProvider>
      </UserAccountContextProvider>
    </>
  )
}
export default App
