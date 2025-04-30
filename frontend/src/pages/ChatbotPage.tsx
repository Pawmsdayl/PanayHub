import UserChatBubble from "@/components/UserChatBubble.tsx";
import BotResponse from "@/components/BotResponse.tsx";
import {Input} from "@/components/Input.tsx";
import Chatbox from "@/components/Chatbox.tsx";

function ChatbotPage() {
  return (
    // <div className={`w-full max-h-screen min-h-full bg-(--chatbot-bg-color)`}>
    <div className={`w-full h-[calc(100vh-128px)] bg-(--chatbot-bg-color)`}>
      <div className={`w-full h-full outline-2 outline-red-200 p-10`}>
        <div className={`grid grid-cols-3 gap-5 place-items-center h-full`}>
          <div className={`bg-(--chatbot-light-color) h-full w-full rounded-4xl`}>
            hello
          </div>
          {/*<div className={`flex`}>*/}
            <Chatbox></Chatbox>
          {/*</div>*/}
          <div className={`bg-(--chatbot-light-color) h-full w-full rounded-4xl`}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatbotPage;