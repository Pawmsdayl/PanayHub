import UserChatBubble from "@/components/UserChatBubble.tsx";
import BotResponse from "@/components/BotResponse.tsx";
import {Input} from "@/components/Input.tsx";
import InputBar from "@/components/InputBar.tsx";

function Chatbox(){
  return (
    // <div className={`bg-chatbot-chat flex flex-col w-full h-full rounded-4xl overflow-y-hidden p-4 `}>
    <div className={`bg-yellow-900 w-full h-full rounded-4xl overflow-y-hidden`}>
      <div className={`flex flex-col w-full h-full`}>
        <div className={`flex w-full h-full`}>
          <div className={`content-div overflow-y-scroll  flex flex-col gap-5 p-10`}>
            <h1 className={`text-3xl text-center`}>What knowledge do you seek?</h1>
            <UserChatBubble></UserChatBubble>
            <BotResponse></BotResponse>
            {/*<div className={`fixed text-white bottom-0`}>HI</div>*/}
            {/*<Input></Input>*/}
          </div>
        </div>
        {/*<Input></Input>*/}
        <InputBar></InputBar>
      </div>
    </div>
  );

}

export default Chatbox;