import Chatbox from "@/components/Chatbox.tsx";
function ChatbotPage() {
  return (
    <div className={`w-full h-[calc(100vh-128px)] bg-(--chatbot-bg-color)`}>
     <div className={`flex w-full h-full items-center justify-center`}>
       <div className={`flex w-[1000px] h-full gap-3  place-content-center p-10`}>
         <Chatbox></Chatbox>
       </div>

     </div>
    </div>
  );
}

export default ChatbotPage;