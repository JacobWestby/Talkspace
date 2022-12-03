import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateRoom = ({ inputText, colors, setInputText, rooms }) => {
    const [showCreate, setShowCreate] = useState(false);
    let navigate = useNavigate();

    // Sets room ID to localstorage to prevent crash on reload while in a room
    const setRoomToLocalStorage = (room) => {
        localStorage.setItem("room", room);
    };

    // creates a new room in the database and navigates to the new room
    const newRoom = async (e) => {
        e.preventDefault();
        let newRoom
        // Posts new room to DB
        try {
            const response = await axios.post(`/api/create`, {
                name: inputText,
            }, {});
            newRoom = response.data;
        } catch (err) {
            console.log(err);
        }

        setRoomToLocalStorage(newRoom._id)

        if (newRoom) {
            navigate(`/chat/${newRoom._id} `);
        }
    };

    return (
        <div className="flex flex-col justify-between items-center h-[40%] sm:w-[20%] z-20 transition-all duration-300 ease-in-out">

            {showCreate
            // If showCreate is true removes join room btn
                ? null
                : <button className=" p-5 rounded-2xl shadow-xl font-semibold" style={{ backgroundColor: colors.white }}><Link to="/join">Join Room</Link></button>
            }

            {showCreate
            // If showCreate is true displays create new room modal
                ? <form action="submit" className=" h-[70%] w-[80%] sm:w-full flex flex-col justify-between items-center">
                    <label htmlFor="Name" className="text-center font-semibold text-lg" style={{ color: colors.white }}>Room Name</label>
                    <input type="text" className=" rounded-2xl sm:h-9 focus:outline-none px-2 text-center w-[80%]" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    {
                        // Checks room name length
                        inputText.length < 5
                            ? <p className=" font-thin">At least 5 characters</p>
                            : null
                    }
                    {
                        // Checks so room with same name doesnt exist
                        rooms.find(room => room.name === inputText)
                            ? <p className=" font-thin">That name is taken</p>
                            : null
                    }
                    {/* Creates the new room and is disabled if input length is too short or room name is taken */}
                    <button disabled={inputText.length < 5 || rooms.find(room => room.name === inputText)} type="submit" onClick={(e) => newRoom(e)} className="rounded-2xl shadow-xl font-semibold sm:h-9 w-[80%]" style={{ backgroundColor: colors.white }}>Create</button>
                    <p onClick={() => setShowCreate(false)} className=" underline cursor-pointer hover:text-[#A7E2E3] transition-all ease-in-out duration-150">Cancel</p>
                </form>
                // Sets showCreate to true 
                : <button onClick={() => setShowCreate(true)} className=" p-5 rounded-2xl shadow-xl font-semibold" style={{ backgroundColor: colors.white }}>Create Room</button>
            }
        </div>
    )
};

export default CreateRoom