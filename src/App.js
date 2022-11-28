import { Header } from './components/Header';
import { WelcomePage } from './components/WelcomePage';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [oAuth, setOAuth] = useState(false);
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])

  const registration = (user) => {
    setOAuth(true)
    setUser(user)
    setUsers(prev => [...prev, user])
  }

  const logIn = (user) => {
    setOAuth(true)
    setUser(user)
  }

  const logOut = () => {
    setOAuth(false)
    setUser({})
  }

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    const users = localStorage.getItem('users')
    if (users) {
      setUsers(JSON.parse(users))
    }
  }, [])


  return (
    <div className="App">
      <Header auth={oAuth} name={user.name} logOut={logOut} />
      <Routes>
        <Route path='/' element={<WelcomePage auth={oAuth} name={user.name} />} />
        <Route path='/sign-up' element={<SignUp submitValues={registration} />} />
        <Route path='/sign-in' element={<SignIn submitValues={logIn} users={users} />} />
        <Route path='/home' element={<Home auth={oAuth}/>} />
      </Routes>
    </div>
  );
}

export default App;
