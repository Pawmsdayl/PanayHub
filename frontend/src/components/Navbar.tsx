

function Navbar(){
  return (
    <>
      <div className={`h-32 w-full navbar`}>
        <header className={`bg-white w-full h-full flex items-center`}>
          <div className={`w-full flex flex-row justify-between mx-10 items-center`}>
            <h1 className={`text-black font-bold`}>
              PanayHub
            </h1>
            <div className={`text-black flex gap-9 items-center font-bold`}>
              <p>Home</p>
              <p>Contact Us</p>
              <p>Chatbot</p>
              <p>Dashboard</p>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;