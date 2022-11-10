import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const CreateUserModal = ({ colors, setUser, user }) => {
  const [userName, setUserName] = useState("");

  const createUser = () => {
    const id = uuidv4();
    localStorage.setItem("user", JSON.stringify({ userName, id }));
    setUser({ userName, id });
  }

  if (user.userName.length > 0) {
    return
  }


  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-[#484848d6] fixed z-30">
      <div className=" h-[30vh] w-fit flex flex-col justify-between items-center rounded-2xl p-5" style={{ backgroundColor: colors.white }}>
        <div className=" flex flex-col items-center">
          <h1 className=" font-semibold text-lg ">Display Name</h1>
          <p className=" font-thin text-sm text-gray-500">This is the name other people will see</p>
        </div>
        <input className=" text-center rounded-2xl bg-slate-200 outline-none p-2" value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
        <button className=" py-3 px-5 rounded-2xl shadow-xl font-semibold" onClick={() => createUser()} >Start chatting</button>
      </div>
    </div>
  )
}

export default CreateUserModal