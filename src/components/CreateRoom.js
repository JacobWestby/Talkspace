import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';



const CreateRoom = ({ inputText, colors, setInputText, rooms }) => {
    const [showCreate, setShowCreate] = useState(false);
    let navigate = useNavigate();

    const newRoom = () => {
        rooms.push({
            name: inputText,
            chatting: 0,
            id: uuidv4(),
            chat: [
                {
                    name: "Sara",
                    message: "This room was just created",
                    id: uuidv4(),
                    local: true,
                },
            ]
        });
        console.log(rooms);
        const newRoomLink = rooms.find(room => room.name === inputText);
        navigate(`/chat/${newRoomLink.id} `, { state: { from: newRoomLink.id } });
        console.log(newRoomLink.id);
    };



    return (
        <div className="flex flex-col justify-between items-center h-[40%] sm:w-[20%] z-20 transition-all duration-300 ease-in-out">
            {showCreate
                ? null
                : <button className=" p-5 rounded-2xl shadow-xl font-semibold" style={{ backgroundColor: colors.white }}><Link to="/join">Join Room</Link></button>
            }

            {showCreate
                ? <form className=" h-[60%] w-[80%] sm:w-full flex flex-col justify-between">
                    <label htmlFor="Name" className="text-center font-semibold text-lg" style={{ color: colors.white }}>Room Name</label>
                    <input type="text" className=" rounded-2xl sm:h-9 focus:outline-none px-2 text-center" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <button type="button" onClick={() => newRoom()} className="rounded-2xl shadow-xl font-semibold sm:h-9" style={{ backgroundColor: colors.white }}>Create</button>
                </form>
                : <button onClick={() => setShowCreate(true)} className=" p-5 rounded-2xl shadow-xl font-semibold" style={{ backgroundColor: colors.white }}>Create Room</button>
            }
        </div>
    )
}

export default CreateRoom