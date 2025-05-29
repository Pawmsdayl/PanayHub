import React, {useState} from "react";


function InputBar({handleSendMessage}: {handleSendMessage: (message: string) => void}){
  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>){
    changeHeight(event);
    setValue(event.target.value);
  }

  function changeHeight(event: React.ChangeEvent<HTMLTextAreaElement>){
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  function handleClick(){
    const trimmedMessage = value.trim();
    if (!trimmedMessage) return;

    handleSendMessage(value);
    setValue("");
    console.log(value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>){
    if(event.key !== 'Enter') return;
    const trimmedMessage = value.trim();
    if (!trimmedMessage) return;

    handleSendMessage(value);
    setValue("");
    console.log(value);
  }

  return(
    <div className={`self-end max-h-100 w-full bg-chatbot-bg shadow-input-bar rounded-[80px]`}>
      <div className={`flex items-center justify-center pl-10 py-5 pr-5`}>
      <textarea
        onKeyDown={handleKeyDown}
        style={{
          maxHeight: "200px",
        }}
        className={`w-full flex items-center justify-center h-10 overflow-y-auto resize-none text-white placeholder-[#96C7FD] outline-none`}
        value={value}
        placeholder={`Ask anything...`}
        onChange={handleChange}

      >
      </textarea>
        {/*<AutosizeTextarea/>*/}
        <div className={`flex h-full `}>
          <button className={`size-15 self-end text-2xl text-black bg-white rounded-full cursor-pointer font-bold`}
                  type={`button`}
                  aria-label={`Send message`}
                  onClick={handleClick}>
            {`>`}
          </button>
        </div>
      </div>
    </div>
  );


}

export default InputBar;