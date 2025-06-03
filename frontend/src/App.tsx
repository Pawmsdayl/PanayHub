import './App.css'
import Navbar from "./components/Navbar.tsx";
import LandingPage from "./LandingPage.tsx";
import ChatbotPage from "./pages/ChatbotPage.tsx";
import Contact from "./pages/Contact.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import {
  Route, Routes
} from "react-router-dom";
import {ContributionGuide} from "@/pages/ContributionGuide.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";

function App() {

  return (
    <div className={`flex flex-col min-h-screen`}>
      <Navbar />
      <div className={`pt-32 flex-1`}>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/chatbot" element={<ChatbotPage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/contributionguide" element={
            <SidebarProvider>
              <ContributionGuide/>
            </SidebarProvider>
          }/>
        </Routes>
      </div>
    </div>
  );
}

export default App
