import { useState } from "react";

import Phone from "../components/Phone";
import Background from "../components/Background";
import CreateRoom from "../components/CreateRoom";

const Home = ({ colors, rooms }) => {
    const [inputText, setInputText] = useState("Room Name");

    return (
        <header className=" h-screen w-screen relative">
            <div className=" h-screen w-screen flex flex-col items-center bg-transparent absolute py-11">
                <div className=" flex flex-col items-center h-[18vh] justify-between">
                    <h2 className=" font-semibold text-xl">Welcome to</h2>
                    <h1 className=" font-semibold text-[2rem]" style={{ color: colors.blue }}>TalkSpace</h1>
                </div>

                <div className="w-screen h-full flex justify-evenly items-center">
                    <Phone inputText={inputText} />
                    <CreateRoom rooms={rooms} inputText={inputText} colors={colors} setInputText={setInputText} />
                </div>
            </div>
            <Background />
        </header>
    )
}

export default Home