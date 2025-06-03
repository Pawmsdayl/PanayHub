import UserChatBubble from "@/components/UserChatBubble.tsx";
import BotResponse from "@/components/BotResponse.tsx";
import InputBar from "@/components/InputBar.tsx";
import {useState} from "react";

interface Message {
  sender: string;
  message: string;
}

function Chatbox(){

  const [messages , setMessages] = useState<Message[]>([]);

  async function handleSendMessage(message: string){
    const userMessage = {sender: "user", message: message};
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const response = await fetch('https://mammal-live-treefrog.ngrok-free.app/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "sender": "user",
          "message": message,
        }),
      });

      const data = await response.json();
      const botResponse = data[0];

      const {
        text
      } = botResponse;
      const apiResponse = {sender: "bot", message: text};
      setMessages(prevMessages => [...prevMessages, apiResponse]);

    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (

    <div className={`bg-chatbot-chat rounded-4xl h-full w-full grid grid-rows-1 grid-cols-1 p-5 gap-3`}>
      {/*// render a div if there are no messages*/}
      {messages.length === 0 &&
          <div className={`flex flex-col justify-center gap-5`}>
              <h1
                  className={`text-center w-full text-4xl bg-gradient-to-r from-[#FFFFFF] to-[#80BCFD] bg-clip-text text-transparent`}
              >
                What knowledge do you seek?
              </h1>
              <InputBar handleSendMessage={handleSendMessage}></InputBar>
          </div>
      }

      <div className={`overflow-y-auto h-full flex flex-col gap-3 p-5`}>
        {messages.map((obj) => obj.sender === "user" ?
          <UserChatBubble message={obj.message}/> :
          <BotResponse message={obj.message}/>)}
      </div>
      {messages.length!==0 && <InputBar handleSendMessage={handleSendMessage}></InputBar>}
    </div>
  );

}

export default Chatbox;