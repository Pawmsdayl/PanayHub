import {useState} from "react";
import AutoResizingTextarea, {AutosizeTextarea} from "@/components/AutosizeTextArea.tsx";


function InputBar({handleSendMessage}: {handleSendMessage: (message: string) => void}){
  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setValue(event.target.value);
  }

  function handleClick(){
    const trimmedMessage = value.trim();
    if (!trimmedMessage) return;

    handleSendMessage(value);
    setValue("");
    console.log(value);
  }

  return(
    <div className={`flex relative self-end h-15 w-full bg-chatbot-bg shadow-input-bar rounded-full`}>
      <AutoResizingTextarea className={`w-full h-20 resize-none text-white p-5 placeholder-[#96C7FD] outline-none`}
             value={value}
             placeholder={`Ask anything...`}
             // onInput={handleChange}
      >
      </AutoResizingTextarea>
      {/*<AutosizeTextarea/>*/}
      <button className={`top-1 right-1 size-12 absolute text-black bg-white rounded-full cursor-pointer font-bold`}
              type={`button`}
              aria-label={`Send message`}
              onClick={handleClick}>
        {`>`}
      </button>
    </div>
  );


}

export default InputBar;