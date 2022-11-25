import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Home from "./pages/Home";
import JoinRoomPage from './pages/JoinRoomPage';
import ChatRoomPage from './pages/ChatRoomPage';

import "./input.css";

// const rooms = [
//   "Room 1": {

//   }
// ]

// const rooms =
//   [
//     {
//       name: "Room 1",
//       chatting: 0,
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

    const getRooms = async () => {
      const res = await axios.get('/api/rooms');
      setRooms(res.data);
    };

    getRooms();
  }, []);

  // TODO: Update chatting number depending on amount of people in room
  // ? If a user clicks a room add one to chatting? How to remove one from chatting? 
  // ? Check number of people in a room using currentRoom?
  // ? Start in Joinroom pass to Chatroom 
  // ? Room is active: Display time since last message in chatroom

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
        <Route path="/join" element={<JoinRoomPage rooms={rooms} colors={colors} />} />
        <Route path="/chat/:chatId" exact element={<ChatRoomPage colors={colors} rooms={rooms} user={user} />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App