import { useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const ChatRoomPage = ({ colors, rooms, user }) => {
    const location = useLocation();
    const { from } = location.state;

    const [currentRoom, setCurrentRoom] = useState(rooms.find(room => room._id === from));
    const [newChat, setNewChat] = useState("");

    // const addNewChat = () => {
    //     const newChatObject = {
    //         name: user.userName,
    //         message: newChat,
    //         chatID: user.id,
    //         id: uuidv4(),
    //     };

    // setCurrentRoom({
    //     ...currentRoom,
    //     chat: [...currentRoom.chat, newChatObject]
    // });

    //     setNewChat("");
    //     updateScroll();
    //     updateScroll();
    // };

    const updateScroll = () => {
        let element = document.getElementById("chat");
        element.scrollTop = element.scrollTop * 10;
    };

    const addNewChat = async () => {
        const response = await axios.post(`/api/rooms/${currentRoom._id}`, {
            name: user.userName,
            message: newChat,
            chatID: user.id,
            id: uuidv4(),
        }, {});

        const chat = response.data

        console.log(chat);

        setCurrentRoom({
            ...currentRoom,
            chat: [...currentRoom.chat, chat]
        });

        setNewChat("");
        updateScroll();
        updateScroll();
    };

    return (
        <div className="flex flex-col w-screen h-screen justify-between items-center" style={{ backgroundColor: colors.white }}>
            <h1 className=" w-screen text-center font-semibold py-4 border-[#d5d5d5] border-b rounded-b-2xl shadow-lg">{currentRoom.name ? currentRoom.name : "Nameless Room"}</h1>
            <div className="px-3 sm:px-11 sm:w-[70%] flex flex-col gap-5 w-full overflow-y-scroll snap-y snap-proximity pb-3 h-full" id="chat">
                {currentRoom.chat.map(message => {
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
            <div className="flex justify-between sm:justify-evenly h-[20%] sm:w-[80%] w-screen sm:h-[7%] sm:px-5 px-3 ">
                <input type="text" className=" w-[80%] h-fit min-h-[90%] whitespace-normal" value={newChat} onChange={(e) => setNewChat(e.target.value)} />
                <button onClick={() => {
                    if (newChat.length > 0) {
                        addNewChat()
                    }
                }} className=" mr-3">Send</button>
            </div>
        </div>
    )
}

export default ChatRoomPage