

function Navbar(){
  return (
    <div>
      <nav className={`h-32 w-full navbar sticky z-50`}>
        <header className={`bg-white w-full h-full flex items-center`}>
          <div className={`w-full flex flex-row justify-between mx-10 items-center`}>
            <div className={`text-black font-bold text-4xl flex gap-3 place-content-center`}>
              <img src="src/assets/panayhub-logo.png" alt={`panayhub logo`}/>
              <h1>PanayHub</h1>
            </div>
            <div className={`text-(--body-font-color) flex gap-9 items-center font-bold`}>
              <p>Home</p>
              <p>Contact Us</p>
              <p>Chatbot</p>
              <p>Dashboard</p>
            </div>
          </div>
        </header>
      </nav>
    </div>
  );
}

export default Navbar;