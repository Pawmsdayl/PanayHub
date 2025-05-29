import Chatbox from "@/components/Chatbox.tsx";
function ChatbotPage() {
  return (
    <div className={`w-full h-[calc(100vh-128px)] bg-(--chatbot-bg-color)`}>
     <div className={`flex w-full h-full items-center justify-center`}>
       <div className={`grid grid-cols-3 grid-rows-1 border w-full h-full gap-3  place-content-center p-10`}>
         <div className={`col-start-2 h-full`}
         >
          <Chatbox/>

         </div>
         <div className={`h-full flex flex-col justify-center gap-4`}>
           <h1 className={`t bg-gradient-to-r from-[#FFFFFF] to-[#80BCFD] bg-clip-text text-transparent font-bold  font-serif text-3xl text-center`}>
             Some possible questions to ask:
           </h1>
           <p className={`text-white text-center italic text-xl`}>"Give me a random story"</p>
           <p className={`text-white text-center italic text-xl`}>"Give me a random story"</p>
         </div>
       </div>

     </div>
    </div>
  );
}

export default ChatbotPage;