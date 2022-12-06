import { useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";

// Components
import BackArrow from "../components/BackArrow";

const JoinRoomPage = ({ setRooms, rooms, colors }) => {

    GetRoomsFromDB(setRooms, rooms);

    // Sets room ID to localstorage to prevent crash on reload while in a room
    const setRoomToLocalStorage = (room) => {
        localStorage.setItem("room", room);
    };

    return (
        <>
            <BackArrow path={"/"} />
            <div className=" flex flex-col items-center h-screen justify-between" style={{ backgroundColor: colors.black }}>
                <h1 className="pt-5 font-semibold sm:text-2xl mt-2 sm:mt-10" style={{ color: colors.blue }}>Join a Room</h1>
                <div className="flex flex-col items-center h-[80%] gap-8 w-screen sm:w-[70%] overflow-y-scroll scroll-smooth rounded-t-2xl shadow-xl" style={{ backgroundColor: colors.white }}>
                    <h2 className=" w-full text-center font-semibold border-b border-[#5d5d5d] py-4 sticky top-0 sm:text-xl" style={{ backgroundColor: colors.white }}>Active Rooms {rooms.length}</h2>
                    {rooms.map(room => (
                        <Link to={`/chat/${room._id}`} onClick={() => setRoomToLocalStorage(room._id)} className="w-full flex justify-evenly border-b border-t border-[#d5d5d5] py-4 hover:bg-[#A7E2E3] transition-all duration-150 ease-in-out" key={room._id}>
                            <h3 className=" w-[50%] ">{room.name}</h3>
                            <h3 className=" w-[30%] "> Last Chat: {DisplayElapsedTime(room)} </h3>
                        </Link>
                    ))}
                </div>
            </div >
        </>
    )
};

// Gets the rooms from the database and updates the rooms state
const GetRoomsFromDB = (setRooms) => {
    useEffect(() => {
        const getRooms = async () => {
            try {
                const res = await axios.get('/api/rooms');
                setRooms(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        getRooms();
    }, [setRooms]);
};

// Calculates time to display based on newst chat in a given room then displays that in just now, mins, hrs, days
const DisplayElapsedTime = (room) => {
    try {
        const currentTime = new Date().getTime();
        const chatTime = room.chat.sort((a, b) => b.time - a.time)[0].time;

        let displayTime = Math.floor((currentTime - chatTime) / 1000);

        if (displayTime < 60) {
            return 'Just now';
        } else if (displayTime >= 60 && displayTime < 3600) {
            return `${Math.floor(displayTime / 60)} minute(s) ago`;
        } else if (displayTime >= 3600 && displayTime < 86400) {
            return `${Math.floor(displayTime / 3600)} hour(s) ago`;
        } else if (displayTime >= 86400 && displayTime < 604800) {
            return `${Math.floor(displayTime / 86400)} day(s) ago`;
        }
    } catch (err) {
        console.log(err)
    }
};


export default JoinRoomPage