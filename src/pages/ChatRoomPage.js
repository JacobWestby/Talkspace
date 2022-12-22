import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

// Components
import BackArrow from "../components/BackArrow";


const ChatRoomPage = ({ colors, user, socket }) => {
    const [currentRoom, setCurrentRoom] = useState({});
    const [newChat, setNewChat] = useState("");

    GetCurrentRoom(setCurrentRoom);

    UpdateScroll();

    useEffect(() => {
        socket.on("messageResponse", (message) => {
            // Checks if message is from current room
            if (message.roomID === currentRoom._id) {
                // Adds new message to currentRoom state
                setCurrentRoom(prevState => {
                    return {
                        ...prevState,
                        chat: [...prevState.chat, message]
                    }
                })
            }
            setTimeout(() => UpdateScroll(), 200);
        })
    }, [socket, currentRoom._id]);

    //  Adds new chat to DB
    const AddNewChatToDB = async () => {
        await axios.post(`/api/rooms/${currentRoom._id}`, {
            name: user.userName,
            message: newChat,
            chatID: user.id,
            id: uuidv4(),
            roomID: currentRoom._id,
            time: new Date().getTime(),
            socketID: socket.id,
        });
        // Resets input field
        setNewChat("");
    };

    return (
        <>
            <BackArrow path={"/join"} />
            {/* Checks if currentRoom is defined, if true displays chat */}
            {currentRoom._id ?
                <div className="flex flex-col w-screen h-screen justify-between items-center" style={{ backgroundColor: colors.white }}>
                    <h1 className=" w-screen text-center font-semibold py-4 border-[#d5d5d5] border-b rounded-b-2xl shadow-lg">{currentRoom.name ? currentRoom.name : "Nameless Room"}</h1>
                    <div className="px-3 sm:px-11 sm:w-[70%] flex flex-col gap-5 w-full overflow-y-scroll pb-5 h-full" id="chat">
                        {currentRoom.chat.map(message => {
                            // if chaID and userID match message is on right side else it's on left side.
                            return message.chatID === user.id
                                ? <div className=" flex flex-col self-end w-fit p-2 rounded-lg max-w-[50%]  shadow-md" style={{ backgroundColor: colors.blue }} key={message.id}>
                                    <h3 className=" font-semibold">{message.name}</h3>
                                    <p className=" w-fit h-fit max-w-full whitespace-normal break-words">{message.message}</p>
                                </div>
                                : <div className=" flex flex-col w-fit p-2 rounded-lg max-w-[50%]  shadow-md" style={{ backgroundColor: colors.blue }} key={message.id}>
                                    <h3 className=" font-semibold">{message.name}</h3>
                                    <p className=" w-fit h-fit max-w-full whitespace-normal break-words">{message.message}</p>
                                </div>
                        }
                        )}
                    </div>
                    <form action="submit" id="message" className="flex justify-between sm:justify-evenly h-[20%] sm:w-[80%] w-screen sm:h-[7%] sm:px-5 px-3 ">
                        <textarea form="message" autoFocus className=" w-[80%] h-fit min-h-[70%] resize-none p-1 whitespace-normal focus:outline-[#999ba0]" value={newChat} onChange={(e) => setNewChat(e.target.value)} onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                if (newChat.length > 0) {
                                    AddNewChatToDB();
                                }
                            }
                        }} ></textarea>
                        <button type="submit" onClick={(e) => {
                            e.preventDefault()
                            if (newChat.length > 0) {
                                AddNewChatToDB();
                            }
                        }} className=" mr-3 text-md hover:text-[#9381FF] transition-all duration-200 ease-in-out" >Send</button>
                    </form>
                </div>
                : <div className="flex flex-col w-screen h-screen justify-between items-center" style={{ backgroundColor: colors.white }}>
                    <h1 className=" w-screen text-center font-semibold py-4 border-[#d5d5d5] border-b rounded-b-2xl shadow-lg">{currentRoom.name ? currentRoom.name : "Nameless Room"}</h1>
                    <div>Try refresh</div>
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

//  Updates scroll location to bottom of chat
const UpdateScroll = () => {
    const div = document.querySelector('#chat');
    try {
        div.lastElementChild.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
        console.log(err);
    }
};

export default ChatRoomPage