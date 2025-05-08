import './App.css'
import Navbar from "./components/Navbar.tsx";
import LandingPage from "./LandingPage.tsx";
import ChatbotPage from "./pages/ChatbotPage.tsx";
import Contact from "./pages/Contact.tsx";
import {
  Route, Routes
} from "react-router-dom";

function App() {

  return (
    <div className={`flex flex-col min-h-screen`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/chatbot" element={<ChatbotPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App
