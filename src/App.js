import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

// Components
import Home from "./pages/Home";
import JoinRoomPage from './pages/JoinRoomPage';

import "./input.css";

const colors = {
  purple: "#9381FF",
  black: "#363946",
  white: "#FEF6EC",
  blue: "#A7E2E3"
};

const rooms =
  [
    {
      name: "Room 1",
      chatting: Math.floor(Math.random() * 6),
      id: uuidv4(),
    },
    {
      name: "Room 2",
      chatting: Math.floor(Math.random() * 6),
      id: uuidv4(),
    },
    {
      name: "News room",
      chatting: Math.floor(Math.random() * 6),
      id: uuidv4(),
    },
    {
      name: "Cool guys room",
      chatting: Math.floor(Math.random() * 6),
      id: uuidv4(),
    },
    {
      name: "Room for chicks",
      chatting: Math.floor(Math.random() * 6),
      id: uuidv4(),
    },
    {
      name: "Room for dudes",
      chatting: Math.floor(Math.random() * 6),
      id: uuidv4(),
    },
    {
      name: "Aliens only",
      chatting: Math.floor(Math.random() * 6),
      id: uuidv4(),
    },
    {
      name: "Are cows real?",
      chatting: Math.floor(Math.random() * 6),
      id: uuidv4(),
    },
    {
      name: "Hello world",
      chatting: Math.floor(Math.random() * 6),
      id: uuidv4(),
    },
    {
      name: "Goodmorning",
      chatting: Math.floor(Math.random() * 6),
      id: uuidv4(),
    },
  ];


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home colors={colors} />} />
        <Route path="/join" element={<JoinRoomPage rooms={rooms} colors={colors} />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App