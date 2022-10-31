import { useState } from "react";
import { Link } from "react-router-dom";

import Phone from "../components/Phone";
import Background from "../components/Background";

const Home = ({ colors }) => {
    const [showCreate, setShowCreate] = useState(false);
    const [inputText, setInputText] = useState("Room Name");

    return (
        <header className=" h-screen w-screen relative">
            <div className=" h-screen w-screen flex flex-col items-center bg-transparent absolute py-11">
                <div className=" flex flex-col items-center h-[18vh] justify-between">
                    <h2 className=" font-semibold text-xl">Welcome to</h2>
                    <h1 className=" font-semibold text-[2rem]" style={{ color: colors.blue }}>TalkSpace</h1>
                </div>

                <div className="w-screen h-full flex justify-evenly items-center">
                    <Phone createRoom={inputText} />
                    <div className="flex flex-col justify-between items-center h-[40%] sm:w-[20%] z-20 transition-all duration-300 ease-in-out">
                        {showCreate
                            ? null
                            : <button className=" p-5 rounded-2xl shadow-xl font-semibold" style={{ backgroundColor: colors.white }}><Link to="/join">Join Room</Link></button>
                        }

                        {showCreate
                            ? <form className=" h-[60%] w-[80%] sm:w-full flex flex-col justify-between">
                                <label htmlFor="Name" className="text-center font-semibold text-lg" style={{ color: colors.white }}>Room Name</label>
                                <input type="text" className=" rounded-2xl sm:h-9 focus:outline-none px-2 text-center" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                                <button className="rounded-2xl shadow-xl font-semibold sm:h-9" style={{ backgroundColor: colors.white }}>Create</button>
                            </form>
                            : <button onClick={() => setShowCreate(true)} className=" p-5 rounded-2xl shadow-xl font-semibold" style={{ backgroundColor: colors.white }}>Create Room</button>
                        }
                    </div>
                </div>
            </div>
            <Background />
        </header>
    )
}

export default Home