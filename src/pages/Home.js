import { useState } from "react";
import { gsap } from "gsap";

// Components
import Phone from "../components/Phone";
import Background from "../components/Background";
import CreateOrJoinRoom from "../components/CreateOrJoinRoom";
import CreateUserModal from "../components/CreateUserModal";
import { useEffect } from "react";

const Home = ({ colors, rooms, setUser, user }) => {
    const [inputText, setInputText] = useState("Room Name");
    const [changeName, setChangeName] = useState(false);
    const [showModal, setShowModal] = useState(true);

    return (
        <>
            <CreateUserModal setUser={setUser} colors={colors} user={user} changeName={changeName} setChangeName={setChangeName} showModal={showModal} setShowModal={setShowModal} />
            <header className=" h-screen w-screen relative">
                {
                    // Displays the username and a button to change it in the top right corner IF username is ture
                    user.userName
                        ? <div className="fixed right-0 flex flex-col p-3 z-30">
                            <h3 className=" font-semibold text-xs">Username: {user.userName}</h3>
                            <button className=" font-thin text-xs hover:text-[#9381FF] transition-all duration-200 ease-in-out " onClick={() => {
                                setChangeName(true)
                                setShowModal(true)
                            }} >Change name</button>
                        </div>
                        : <div></div>
                }
                <div className=" h-screen w-screen flex flex-col items-center bg-transparent absolute py-11">
                    <div className=" flex flex-col items-center h-[18vh] justify-between">
                        <h2 className=" font-semibold text-xl">Welcome to</h2>
                        <h1 className=" font-semibold text-[2rem]" style={{ color: colors.blue }}>TalkSpace</h1>
                    </div>

                    <div className="w-screen h-full flex justify-evenly items-center">
                        <Phone AnimateOnPageLoad={AnimateOnPageLoad} />
                        <CreateOrJoinRoom rooms={rooms} inputText={inputText} colors={colors} setInputText={setInputText} />
                    </div>
                </div>
                <Background />
            </header>
        </>
    )
};

const AnimateOnPageLoad = (target) => {
    useEffect(() => {
        gsap.fromTo(target, { y: 150, opacity: 0 }, { duration: 1, y: 0, opacity: 1, ease: "circ" });
        // eslint-disable-next-line
    }, [])
};

export default Home