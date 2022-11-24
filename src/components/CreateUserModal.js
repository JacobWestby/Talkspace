import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const CreateUserModal = ({ colors, setUser, user, changeName, setChangeName, showModal, setShowModal }) => {
  const [userName, setUserName] = useState("");

  // * Creates a new user and saves it to local storage
  const createUser = () => {
    const id = uuidv4();
    localStorage.setItem("user", JSON.stringify({ userName, id }));
    setUser({ userName, id });
  }

  // * Changes the name of the user and saves it to local storage
  const updateUser = () => {
    let id = JSON.parse(localStorage.getItem('user'));
    id = id.id;
    localStorage.setItem("user", JSON.stringify({ userName, id }));
    setUser({ userName, id });
  }

  if (showModal && user.userName.length === 0) {

    return (
      <div className=" h-screen w-screen flex justify-center items-center bg-[#484848d6] fixed z-30">
        <div className=" h-[30vh] w-fit flex flex-col justify-between items-center rounded-2xl p-5" style={{ backgroundColor: colors.white }}>
          <div className=" flex flex-col items-center">
            <h1 className=" font-semibold text-lg ">Display Name</h1>
            <p className=" font-thin text-sm text-gray-500">This is the name other people will see</p>
          </div>
          <input className=" text-center rounded-2xl bg-slate-200 outline-none p-2" value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
          {
            userName.length > 0
              ? <button className=" py-3 px-5 rounded-2xl shadow-xl font-semibold border border-green-300 hover:bg-[#9381FF] transition-all duration-500 ease-in-out" onClick={() => {
                setShowModal(false)
                createUser()
              }} >Start chating</button>
              : <button className=" py-3 px-5 rounded-2xl shadow-xl font-semibold border border-red-300 hover:cursor-default" >Name Too Short!</button>
          }
        </div>
      </div>
    )
  } else if (showModal && changeName) {
    return (
      <div className=" h-screen w-screen flex justify-center items-center bg-[#484848d6] fixed z-30">
        <div className=" h-[30vh] w-fit flex flex-col justify-between items-center rounded-2xl p-5" style={{ backgroundColor: colors.white }}>
          <div className=" flex flex-col items-center">
            <h1 className=" font-semibold text-lg ">Display Name</h1>
            <p className=" font-thin text-sm text-gray-500">This is the name other people will see</p>
          </div>
          <input className=" text-center rounded-2xl bg-slate-200 outline-none p-2" value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
          {
            userName.length > 0 && userName !== user.userName
              ? <button className=" py-3 px-5 rounded-2xl shadow-xl font-semibold border border-green-300 hover:bg-[#9381FF] transition-all duration-500 ease-in-out" onClick={() => {
                setShowModal(false)
                setChangeName(false)
                updateUser()
              }} >Change Name</button>
              : <button className=" py-3 px-5 rounded-2xl shadow-xl font-semibold border border-red-300 hover:cursor-default" >Too Short or the same</button>
          }
        </div>
      </div>
    )
  }
}

export default CreateUserModal