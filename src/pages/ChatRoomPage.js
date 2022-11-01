
const ChatRoomPage = ({ roomName, colors, chat }) => {
    return (
        <div className="flex flex-col w-screen h-screen justify-between items-center" style={{ backgroundColor: colors.white }}>
            <h1 className=" w-screen text-center font-semibold py-4 border-[#d5d5d5] border-b rounded-b-2xl shadow-lg">{roomName ? roomName : "Nameless Room"}</h1>
            <div className="px-3 sm:px-11 sm:w-[70%] flex flex-col gap-5 overflow-y-scroll pb-3 sm:h-full sm:justify-end">
                {chat.map(message => {
                    return message.local
                        ? <div className=" flex flex-col self-end w-fit p-2 rounded-lg max-w-[50%]" style={{ backgroundColor: colors.blue }} key={message.id}>
                            <h3 className=" font-semibold">{message.name}</h3>
                            <p>{message.message}</p>
                        </div>
                        : <div className=" flex flex-col w-fit p-2 rounded-lg max-w-[50%]" style={{ backgroundColor: colors.blue }} key={message.id}>
                            <h3 className=" font-semibold">{message.name}</h3>
                            <p>{message.message}</p>
                        </div>
                }
                )}
            </div>
            <div className="flex justify-between h-[8%] w-screen">
                <input type="text" className=" w-[80%]" />
                <button className=" mr-3">Send</button>
            </div>
        </div>
    )
}

export default ChatRoomPage