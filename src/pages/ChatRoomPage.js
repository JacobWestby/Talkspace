import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

import BackArrow from "../components/BackArrow";

const ChatRoomPage = ({ colors, user }) => {
    const [currentRoom, setCurrentRoom] = useState({});
    const [newChat, setNewChat] = useState("");

    GetCurrentRoom(setCurrentRoom);

    return (
        <>
            <BackArrow path={"/join"} />
            {/* Checks if currentRoom is defined, if true displays chat */}
            {currentRoom._id ?
                <div className="flex flex-col w-screen h-screen justify-between items-center" style={{ backgroundColor: colors.white }}>
                    <h1 className=" w-screen text-center font-semibold py-4 border-[#d5d5d5] border-b rounded-b-2xl shadow-lg">{currentRoom.name ? currentRoom.name : "Nameless Room"}</h1>
                    <div className="px-3 sm:px-11 sm:w-[70%] flex flex-col gap-5 w-full overflow-y-scroll snap-y snap-proximity pb-3 h-full" id="chat">
                        {currentRoom.chat.map(message => {
                            // if chaID and userID match message is on right side else it's on left side.
                            return message.chatID === user.id
                                ? <div className=" flex flex-col self-end w-fit p-2 rounded-lg max-w-[50%] snap-end shadow-md" style={{ backgroundColor: colors.blue }} key={message.id}>
                                    <h3 className=" font-semibold">{message.name}</h3>
                                    <p className=" w-fit h-fit max-w-full whitespace-normal break-words">{message.message}</p>
                                </div>
                                : <div className=" flex flex-col w-fit p-2 rounded-lg max-w-[50%] snap-end shadow-md" style={{ backgroundColor: colors.blue }} key={message.id}>
                                    <h3 className=" font-semibold">{message.name}</h3>
                                    <p className=" w-fit h-fit max-w-full whitespace-normal break-words">{message.message}</p>
                                </div>
                        }
                        )}
                    </div>
                    <form action="submit" className="flex justify-between sm:justify-evenly h-[20%] sm:w-[80%] w-screen sm:h-[7%] sm:px-5 px-3 ">
                        <input type="text" className=" w-[80%] h-fit min-h-[90%] whitespace-normal" value={newChat} onChange={(e) => setNewChat(e.target.value)} />
                        <button type="submit" onClick={(e) => {
                            e.preventDefault()
                            if (newChat.length > 0) {
                                AddNewChatToDB(user, currentRoom, newChat, setNewChat, setCurrentRoom)
                                UpdateScroll()
                            }
                        }} className=" mr-3">Send</button>
                    </form>
                </div>
                : <div className="flex flex-col w-screen h-screen justify-between items-center" style={{ backgroundColor: colors.white }}>
                    <h1 className=" w-screen text-center font-semibold py-4 border-[#d5d5d5] border-b rounded-b-2xl shadow-lg">{currentRoom.name ? currentRoom.name : "Nameless Room"}</h1>
                    <div></div>
                </div>
            }
        </>
    )
};

//  Gets current room from DB via ID saved to localstorage to prevet crash on refresh
const GetCurrentRoom = (setCurrentRoom) => {
    useEffect(() => {
        try {
            const getRoom = async () => {
                const res = await axios.get(`/api/rooms/${localStorage.getItem("room")}`);
                const dbRoom = res.data;

                setCurrentRoom(dbRoom);
            };
            getRoom();

        } catch (err) {
            console.log(err);
        }
        // eslint-disable-next-line
    }, []);
};

//  Adds new chat to DB and updates state to show new chat on screen
const AddNewChatToDB = async (user, currentRoom, newChat, setNewChat, setCurrentRoom) => {
    const response = await axios.post(`/api/rooms/${currentRoom._id}`, {
        name: user.userName,
        message: newChat,
        chatID: user.id,
        id: uuidv4(),
        time: new Date().getTime()
    }, {});

    // Updates room state to show same chat as DB
    const chat = response.data;
    setCurrentRoom({
        ...currentRoom,
        chat: [...currentRoom.chat, chat]
    });

    // Resets input field
    setNewChat("");
};

//  Updates scroll location to bottom of chat
const UpdateScroll = () => {
    setTimeout(() => {
        let element = document.getElementById("chat");
        element.scrollTop = element.scrollTop * 10;
    }, 500);
};

export default ChatRoomPage