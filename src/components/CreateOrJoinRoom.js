import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { gsap } from "gsap";

const CreateRoom = ({ inputText, colors, setInputText, rooms }) => {
    const [showCreate, setShowCreate] = useState(false);
    let navigate = useNavigate();

    AnimateBtnsOnPageLoad(".btns");

    return (
        <div className="flex flex-col justify-between items-center h-[40%] sm:w-[20%] z-20 ease-in-out">

            {showCreate
                // If showCreate is true removes join room btn
                ? null
                : <Link className=" bg-[#FEF6EC] p-5 rounded-2xl shadow-xl font-semibold btns hover:border-[#A7E2E3] hover:border-4 hover:scale-20 transition-all ease-in-out duration-300 " to="/join">Join Room</Link>
            }

            {
                showCreate
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
                            // Checks so room with same name doesn't exist
                            rooms.find(room => room.name === inputText)
                                ? <p className=" font-thin">That name is taken</p>
                                : null
                        }
                        {/* Creates the new room, is disabled if input length is too short or room name is taken */}
                        <button disabled={inputText.length < 5 || rooms.find(room => room.name === inputText)} type="submit" onClick={(e) => {
                            e.preventDefault();
                            CreateNewRoom(inputText, SetRoomToLocalStorage, navigate);

                        }} className=" bg-[#FEF6EC] rounded-2xl shadow-xl font-semibold sm:h-9 w-[80%] hover:border-[#A7E2E3] hover:border-4 transition-all ease-in-out duration-300">Create</button>
                        <p onClick={() => {
                            setShowCreate(false)
                            // setTimeout(() => AnimateBtnsOnPageLoad(".btns"), 200)
                        }} className=" underline cursor-pointer hover:text-[#A7E2E3] transition-all ease-in-out duration-150">Cancel</p>
                    </form>
                    // Sets showCreate to true 
                    : <button onClick={() => setShowCreate(true)} className=" bg-[#FEF6EC] p-5 rounded-2xl shadow-xl font-semibold btns hover:border-[#A7E2E3] hover:border-4 hover:scale-20 transition-all ease-in-out duration-300 ">Create Room</button>
            }
        </div >
    )
};

const AnimateBtnsOnPageLoad = (target) => {
    gsap.fromTo(target, { x: 1000, }, { duration: 1, x: 0, ease: "circ", stagger: 0.1 });
};

// Sets room ID to localstorage to prevent crash on reload while in a room
const SetRoomToLocalStorage = (room) => {
    localStorage.setItem("room", room);
};

// creates a new room in the database and navigates to the new room
const CreateNewRoom = async (inputText, SetRoomToLocalStorage, navigate) => {
    let newRoom
    // Posts new room to DB
    try {
        const response = await axios.post(`/api/create`, {
            name: inputText,
        }, {});
        newRoom = response.data;
    } catch (err) {
        console.log(err);
    };

    // Sets room ID to localstorage to prevent crash on reload while in a room
    SetRoomToLocalStorage(newRoom._id)

    if (newRoom) {
        navigate(`/chat/${newRoom._id} `);
    };
};

export default CreateRoom;