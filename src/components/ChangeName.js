// import { useState } from "react";

// const ChangeName = ({ user, setUser, colors }) => {
//     const [newUserName, setNewUserName] = useState("");
//     const [changeName, setChangeName] = useState(false);

//     const updateUser = () => {
//         localStorage.setItem("user", JSON.stringify({ newUserName }));
//         setUser({ newUserName });
//     }



//     return (
//         <>
//             {
//                 changeName
//                     ? <div className=" h-screen w-screen flex justify-center items-center bg-[#484848d6] fixed z-30">
//                         <div className=" h-[30vh] w-fit flex flex-col justify-between items-center rounded-2xl p-5" style={{ backgroundColor: colors.white }}>
//                             <div className=" flex flex-col items-center">
//                                 <h1 className=" font-semibold text-lg ">Display Name</h1>
//                                 <p className=" font-thin text-sm text-gray-500">This is the name other people will see</p>
//                             </div>
//                             <input className=" text-center rounded-2xl bg-slate-200 outline-none p-2" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} type="text" />
//                             {
//                                 newUserName.length > 0
//                                     ? <button className=" py-3 px-5 rounded-2xl shadow-xl font-semibold border border-green-300 hover:bg-[#9381FF] transition-all duration-500 ease-in-out" onClick={() => updateUser()} >Start chating</button>
//                                     : <button className=" py-3 px-5 rounded-2xl shadow-xl font-semibold border border-red-300 hover:cursor-default" >Name Too Short!</button>
//                             }
//                         </div>
//                     </div>
//                     : <div></div>
//             }
            
//         </>
//     )
// }

// export default ChangeName