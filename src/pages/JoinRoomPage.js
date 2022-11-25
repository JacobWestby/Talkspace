import { useState } from "react";
import { Link } from "react-router-dom"
import BackArrow from "../components/BackArrow";
import axios from "axios";

const JoinRoomPage = ({ rooms, colors }) => {
    const [updateChatting, setUpdateChatting] = useState(true);


    const setRoom = (room) => {
        localStorage.setItem("room", room)
    };

    const updateChat = async (id) => {
        try {
            const res = await axios.post(`/api/updatechat/${id}`, { chatting: updateChatting });
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <BackArrow path={"/"} />
            <div className=" flex flex-col items-center h-screen justify-between" style={{ backgroundColor: colors.black }}>
                <h1 className="pt-5 font-semibold sm:text-2xl mt-2 sm:mt-10" style={{ color: colors.blue }}>Join a Room</h1>
                <div className="flex flex-col items-center h-[80%] gap-8 w-screen sm:w-[70%] overflow-y-scroll scroll-smooth rounded-t-2xl shadow-xl" style={{ backgroundColor: colors.white }}>
                    <h2 className=" w-full text-center font-semibold border-b border-[#5d5d5d] py-4 sticky top-0 sm:text-xl" style={{ backgroundColor: colors.white }}>Active Rooms {rooms.length}</h2>
                    {rooms.map(room => (
                        <Link to={`/chat/${room._id}`} onClick={() => {
                            updateChat(room._id)
                            setRoom(room._id)
                        }} className="w-full flex justify-evenly border-b border-t border-[#d5d5d5] py-4 hover:bg-[#A7E2E3] transition-all duration-150 ease-in-out" key={room._id}>
                            <h3 className=" w-[50%] ">{room.name}</h3>
                            <h3 className=" w-[30%] "> Chatting: {room.chatting}</h3>
                        </Link>
                    ))}
                </div>
            </div >
        </>
    )
}

export default JoinRoomPage