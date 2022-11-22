import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const ChatRoomPage = ({ colors, rooms, user }) => {
    // const location = useLocation();
    // const { from } = location.state;
    const [currentRoom, setCurrentRoom] = useState({});
    const [newChat, setNewChat] = useState("");


    // * Gets current room from DB via ID saved to localstorage
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
    }, []);

    // * Updates scroll location to bottom of chat

    const updateScroll = () => {
        let element = document.getElementById("chat");
        element.scrollTop = element.scrollTop * 10;
    };

    // * adds new chat to chat and sends to DB

    const addNewChat = async () => {
        const response = await axios.post(`/api/rooms/${currentRoom._id}`, {
            name: user.userName,
            message: newChat,
            chatID: user.id,
            id: uuidv4(),
        }, {});

        const chat = response.data;

        setCurrentRoom({
            ...currentRoom,
            chat: [...currentRoom.chat, chat]
        });

        setNewChat("");
        updateScroll();
        updateScroll();
    };

    return (
        <>
        {/* Checks is currentRoom is defined, if true displays chat */}
            {currentRoom._id ?
                <div div className="flex flex-col w-screen h-screen justify-between items-center" style={{ backgroundColor: colors.white }
                }>
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
                    <div className="flex justify-between sm:justify-evenly h-[20%] sm:w-[80%] w-screen sm:h-[7%] sm:px-5 px-3 ">
                        <input type="text" className=" w-[80%] h-fit min-h-[90%] whitespace-normal" value={newChat} onChange={(e) => setNewChat(e.target.value)} />
                        <button type="submit" onClick={() => {
                            if (newChat.length > 0) {
                                addNewChat()
                            }
                        }} className=" mr-3">Send</button>
                    </div>
                </div > :

                <div></div>}

        </>
    )
}

export default ChatRoomPage