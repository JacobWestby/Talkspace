import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

// Components
import Home from "./pages/Home";
import JoinRoomPage from './pages/JoinRoomPage';
import ChatRoomPage from './pages/ChatRoomPage';

import "./input.css";
import axios from 'axios';

const colors = {
  purple: "#9381FF",
  black: "#363946",
  white: "#FEF6EC",
  blue: "#A7E2E3"
};

// const rooms =
//   [
//     {
//       name: "Room 1",
//       chatting: Math.floor(Math.random() * 6),
//       id: uuidv4(),
//       chat: [
//         {
//           name: "John",
//           message: "Hello world",
//           id: uuidv4(),
//           local: false,
//         },
//         {
//           name: "Sara",
//           message: "Hello John",
//           id: uuidv4(),
//           local: true,
//         },
//         {
//           name: "Sara",
//           message: "Hello John, i am so cool and i have a new hat",
//           id: uuidv4(),
//           local: true,
//         },
//       ]
//     },
//     {
//       name: "Room 2",
//       chatting: Math.floor(Math.random() * 6),
//       id: uuidv4(),
//       chat: [
//         {
//           name: "John",
//           message: "New Room who dis",
//           id: uuidv4(),
//           local: true,
//         },
//         {
//           name: "John",
//           message: "Wow that's soo cool dsadsadadsadsadsadsdsadsadasdsadas",
//           id: uuidv4(),
//           local: false,
//         },
//         {
//           name: "John",
//           message: "Can u feel it?!",
//           id: uuidv4(),
//           local: true,
//         },

//       ],
//     },
//     {
//       name: "News room",
//       chatting: Math.floor(Math.random() * 6),
//       id: uuidv4(),
//       chat: [],
//     },
//     {
//       name: "Cool guys room",
//       chatting: Math.floor(Math.random() * 6),
//       id: uuidv4(),
//       chat: [],
//     },
//     {
//       name: "Room for chicks",
//       chatting: Math.floor(Math.random() * 6),
//       id: uuidv4(),
//       chat: [],
//     },
//     {
//       name: "Room for dudes",
//       chatting: Math.floor(Math.random() * 6),
//       id: uuidv4(),
//       chat: [],
//     },
//     {
//       name: "Aliens only",
//       chatting: Math.floor(Math.random() * 6),
//       id: uuidv4(),
//       chat: [],
//     },
//     {
//       name: "Are cows real?",
//       chatting: Math.floor(Math.random() * 6),
//       id: uuidv4(),
//       chat: [],
//     },
//     {
//       name: "Hello world",
//       chatting: Math.floor(Math.random() * 6),
//       id: uuidv4(),
//       chat: [],
//     },
//     {
//       name: "Goodmorning",
//       chatting: Math.floor(Math.random() * 6),
//       id: uuidv4(),
//       chat: [],
//     },
//   ];


const App = () => {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState({ userName: "", id: "" });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }

    const getRooms = async () => {
      const res = await axios.get('/api/rooms');
      setRooms(res.data);
    };
    getRooms();
  }, []);

  console.log(user);

  // TODO: ADD ROOMS/CHATS TO MONGO DB AND GET THEM FROM THERE done
  // TODO: SETUP UP LOGIN OR AUTO COOKIE AND ID FOR USER doneISH
  // TODO: ADD USERS NAME TO NEW CHAT IN CHATROOMPAGE INSTEAD OF "SARA"
  // TODO: MAKE SURE YOU CAN RELOAD PAGE WITHOUT AN ERROR


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home colors={colors} rooms={rooms} setUser={setUser} user={user} />} />
        <Route path="/join" element={<JoinRoomPage rooms={rooms} colors={colors} />} />
        <Route path="/chat/:chatId" exact element={<ChatRoomPage colors={colors} rooms={rooms} user={user} />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App