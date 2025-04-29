
function ChatbotPage() {
  return (
    <div className={`w-full min-h-screen bg-(--chatbot-bg-color) `}>
      <div className={`h-screen grid grid-cols-3 gap-3 place-items-center p-10`}>
        <div className={`bg-(--chatbot-light-color) h-full w-full rounded-4xl`}>
        </div>
        <div className={`bg-(--chatbot-chat-section-bg-color) h-full w-full rounded-4xl`}>
          <div className={`content-div p-10 flex items-center justify-center h-full w-full outline-2 outline-red-200`}>
            <h1 className={`font-bold text-center`}>What knowledge do you seek?</h1>
            {/*<input></input>*/}
          </div>
        </div>
        <div className={`bg-(--chatbot-light-color) h-full w-full rounded-4xl`}>
        </div>
      </div>

    </div>
  );
}

export default ChatbotPage;