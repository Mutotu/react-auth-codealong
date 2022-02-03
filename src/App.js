import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import env from "react-dotenv";

function App() {
  const [user, setUser] = useState({});

  const fetcUser = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      // console.log(localStorage.getItem("userId"));
      axios
        .get(`${env.BACKEND_URL}/users/verify`, {
          headers: {
            Authorization: userId,
          },
        })
        .then((response) => {
          console.log(response);
          setUser(response.data.user);
        });
    }
  };

  useEffect(fetcUser, []);
  return (
    <div className='App'>
      <h1>🔑 React Auth! 🔓</h1>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='*' element={<Home />} />

        <Route path='/' element={<Home />} />
        {/* <Route
          path='/signup'
          element={<Signup user={user} setUser={setUser} />}
        /> */}
        <Route
          path='signup'
          element={
            user.id ? <Navigate to='/profile' /> : <Signup setUser={setUser} />
          }
        />

        {/* <Route
          path='/login'
          element={<Login user={user} setUser={setUser} />}
        /> */}
        <Route
          path='/login'
          element={
            user.id ? <Navigate to='/profile' /> : <Login setUser={setUser} />
          }
        />
        {/* <Route
          path='/profile'
          element={<Profile user={user} setUser={setUser} />}
        /> */}
        <Route
          path='/profile'
          element={
            !user.id ? (
              <Navigate to='/' />
            ) : (
              <Profile setUser={setUser} user={user} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
