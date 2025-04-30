import './App.css'
import Navbar from "./components/Navbar.tsx";
import LandingPage from "./LandingPage.tsx";
import ChatbotPage from "./pages/ChatbotPage.tsx";
import {
  Route, Routes
} from "react-router-dom";
import Footer from "./components/Footer.tsx";

//
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar/>
//     children: [
//       {
//         path:"/",
//         element: <LandingPage/>
//       },
//       {
//         path: "/chatbot",
//         element: <ChatbotPage/>
//       }
//     ]
//
//   }
// ]);

function App() {

  return (
    <div className={`flex flex-col min-h-screen`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/chatbot" element={<ChatbotPage/>}/>
      </Routes>
    </div>
  );
}

export default App
