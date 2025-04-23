import './App.css'
import Navbar from "./components/Navbar.tsx";
import LandingPage from "./LandingPage.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
    <>
      <div className={`flex w-full min-h-screen  flex flex-col bg-white`}>
        <Navbar></Navbar>
        <LandingPage></LandingPage>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
