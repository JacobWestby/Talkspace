import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';

// Components
import Home from "./pages/Home";
import JoinRoomPage from './pages/JoinRoomPage';
import ChatRoomPage from './pages/ChatRoomPage';

import "./input.css";


// TODO: Redsign phone-svg to remove image circles

// TODO: Animations on home/JoinRoomPage/ChatRoomPage

// * Refactor code to use custom hooks and functions should just do one thing

// *Fix scroll issue in chatroom. Scroll needs to be locked to bottom of screen Fixed for now

// * Room shows time passed since last chat

// * Add Goback btn to JoinRoomPage and ChatRoomPage DONE

// * Message send on Enter DONE

// * Character limit on Username and Roomname DONE


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
        <Route path="/join" element={<JoinRoomPage setRooms={setRooms} rooms={rooms} colors={colors} />} />
        <Route path="/chat/:chatId" exact element={<ChatRoomPage colors={colors} rooms={rooms} user={user} />} />
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