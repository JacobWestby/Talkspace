import { useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ChatRoomPage = ({ colors, rooms, user }) => {
    const location = useLocation();
    const { from } = location.state;

    const [currentRoom, setCurrentRoom] = useState(rooms.find(room => room.id === from));
    const [newChat, setNewChat] = useState("");

    const addNewChat = () => {
        const newChatObject = {
            name: "Sara",
            message: newChat,
            id: uuidv4(),
            local: true,
        };

        setCurrentRoom({
            ...currentRoom,
            chat: [...currentRoom.chat, newChatObject]
        });

        setNewChat("");
    };

    return (
        <div className="flex flex-col w-screen h-screen justify-between items-center" style={{ backgroundColor: colors.white }}>
            <h1 className=" w-screen text-center font-semibold py-4 border-[#d5d5d5] border-b rounded-b-2xl shadow-lg">{currentRoom.name ? currentRoom.name : "Nameless Room"}</h1>
            <div className="px-3 sm:px-11 sm:w-[70%] flex flex-col gap-5 self-end justify-self-end w-full overflow-y-scroll pb-3 h-full sm:justify-end">
                {currentRoom.chat.map(message => {
                    return message.local
                        ? <div className=" flex flex-col self-end w-fit p-2 rounded-lg max-w-[50%]" style={{ backgroundColor: colors.blue }} key={message.id}>
                            <h3 className=" font-semibold">{message.name}</h3>
                            <p className=" w-fit h-fit max-w-full whitespace-normal break-words">{message.message}</p>
                        </div>
                        : <div className=" flex flex-col w-fit p-2 rounded-lg max-w-[50%]" style={{ backgroundColor: colors.blue }} key={message.id}>
                            <h3 className=" font-semibold">{message.name}</h3>
                            <p className=" w-fit h-fit max-w-full whitespace-normal break-words">{message.message}</p>
                        </div>
                }
                )}
            </div>
            <div className="flex justify-between h-[8%] w-screen">
                <input type="text" className=" w-[80%]" value={newChat} onChange={(e) => setNewChat(e.target.value)} />
                <button onClick={() => addNewChat()} className=" mr-3">Send</button>
            </div>
        </div>
    )
}

export default ChatRoomPage