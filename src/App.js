import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';

// Components
import Home from "./pages/Home";
import JoinRoomPage from './pages/JoinRoomPage';
import ChatRoomPage from './pages/ChatRoomPage';

import "./input.css";

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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  // * Room shows time passed since last chat

  // TODO: Remove userID when page is closed (Clear local storage)?? Maybe not

  // TODO: Delete rooms..??
  // ? Use userID to check if user is creator of room?
  // ? What if user lost their ID?
  // ? Rooms delete themselfs after set amount of time?

  // TODO: Redsign phone-svg to remove image circles

  // TODO: Animations on home/JoinRoomPage/ChatRoomPage

  // * Add Goback btn to JoinRoomPage and ChatRoomPage DONE

  // * Message send on Enter DONE
  // ? Needs to be a form to send on enter

  // * Character limit on Username and Roomname DONE


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home rooms={rooms} colors={colors} setUser={setUser} user={user} />} />
        <Route path="/join" element={<JoinRoomPage setRooms={setRooms} rooms={rooms} colors={colors} />} />
        <Route path="/chat/:chatId" exact element={<ChatRoomPage colors={colors} rooms={rooms} user={user} />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App