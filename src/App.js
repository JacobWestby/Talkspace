import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Components
import Home from "./pages/Home";
import JoinRoomPage from './pages/JoinRoomPage';
import ChatRoomPage from './pages/ChatRoomPage';

import "./input.css";

const socket = io("https://talkspace-372421.ew.r.appspot.com/");

const App = () => {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState({ userName: "", id: "" });
  // eslint-disable-next-line
  const [colors, setColors] = useState({
    purple: "#9381FF",
    black: "#363946",
    white: "#FEF6EC",
    blue: "#A7E2E3"
  });

  GetUserFromLocalStorage(setUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home rooms={rooms} colors={colors} setUser={setUser} user={user} />} />
        <Route path="/join" element={<JoinRoomPage socket={socket} setRooms={setRooms} rooms={rooms} colors={colors} />} />
        <Route path="/chat/:chatId" exact element={<ChatRoomPage colors={colors} user={user} socket={socket} />} />
      </Routes>
    </BrowserRouter>
  )
};

// Checks localstorage for a user and sets the user state if true
const GetUserFromLocalStorage = (setUser) => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
    // eslint-disable-next-line
  }, []);
};

export default App