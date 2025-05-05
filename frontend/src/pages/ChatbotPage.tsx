import Chatbox from "@/components/Chatbox.tsx";

function ChatbotPage() {
  return (
    <div className={`w-full h-[calc(100vh-128px)] bg-(--chatbot-bg-color)`}>
     <div className={`flex w-full h-full`}>
       <div className={`flex w-full h-full gap-3  place-content-center p-10`}>
         <div className={`text-white bg-chatbot-light h-full w-full rounded-full text-center content-center`}>hello</div>
         <Chatbox></Chatbox>
         <div className={`text-white bg-chatbot-light h-full w-full text-center content-center`}>hello</div>
       </div>

     </div>
    </div>
  );
}

export default ChatbotPage;