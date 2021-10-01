import React, {useState} from 'react'
import { Switch, Route, Redirect} from 'react-router'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Profile from './pages/Profile'
import MainContent from './components/MainContent'
import './scss/main.scss'
import "./scss/navbar.scss"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Users from './pages/Users'

export default function App() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  

  const [loggedIn, setLoggedIn] = useState(true);

  if(!loggedIn) {
    return (
      <Login />
    )
  }

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Redirect to="/Dashboard" />
      </Route>
      <Route exact path="/dashboard">
        <MainContent activeNavItem="Dashboard">
          <Dashboard />
        </MainContent>
      </Route>
      <Route exact path="/users">
        <MainContent activeNavItem="Users">
          <Users />
        </MainContent>
      </Route>
      <Route exact path="/profile">
        <MainContent activeNavItem="Profile">
          <Profile />
        </MainContent>
      </Route>
      <Route exact path="/Settings">
        <MainContent activeNavItem="Settings">
          {/* Add page */}
        </MainContent>
      </Route>
    </Switch>
  )
}
