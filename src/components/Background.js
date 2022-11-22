import { useState } from "react";

const Background = () => {
    const [bg_top, setBg_Top] = useState("w-screen h-[35vh] bg-[#363946] transition-all ease-in-out duration-700");
    const [bg_bot, setBg_Bot] = useState("w-screen h-[65vh] bg-[#9381FF] transition-all ease-in-out duration-700");

    return (
        <div className=" absolute z-[-1]">
            <div className={bg_top}>{/*  Background top */}</div>
            <div className={bg_bot}>{/*  Background bottom */}</div>
        </div >
    )
}

export default Background