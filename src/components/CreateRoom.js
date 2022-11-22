import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const CreateRoom = ({ inputText, colors, setInputText }) => {
    const [showCreate, setShowCreate] = useState(false);
    let navigate = useNavigate();

    const setRoom = (room) => {
        localStorage.setItem("room", room)
    };

    const newRoom = async () => {
        let newRoom

        try {
            const response = await axios.post(`/api/create`, {
                name: inputText,
            }, {});

            newRoom = response.data;
        } catch (err) {
            console.log(err);
        }

        setRoom(newRoom._id)

        if (newRoom) {
            navigate(`/chat/${newRoom._id} `);
        }
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