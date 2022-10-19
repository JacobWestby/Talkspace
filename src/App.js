import "./input.css";

const App = () => {
  return (
    <header className=" h-screen w-screen relative">
      <div className=" h-screen w-screen flex flex-col items-center bg-transparent absolute py-11">
        <div className=" flex flex-col items-center h-[18vh] justify-between">
          <h2 className=" font-semibold text-xl">Welcome to</h2>
          <h1 className=" font-semibold text-[2rem]">TalkSpace</h1>
        </div>
      </div>






      <div className=" absolute z-[-1]">
        <div className=" w-screen h-[35vh] bg-[#363946]" id="bg_top">{/*  Background top */}</div>
        <div className=" w-screen h-[65vh] bg-[#9381FF]" id="bg_bot">{/*  Background bottom */}</div>
      </div>

    </header>
  )
}

export default App