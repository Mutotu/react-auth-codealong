import NavBar from './components/NavBar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🔑 React Auth! 🔓</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
