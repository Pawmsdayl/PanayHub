
function UserChatBubble({message}: {message: string}) {
  return (
    <div className={`self-end`}>
      <div className={`rounded-4xl bg-chatbot-bubble px-4 py-2 w-fit`}>
        <p className={`text-white`}>{message}</p>
      </div>
    </div>
  );
}

export default UserChatBubble;