import {useState} from "react";


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
    <div className={`flex relative self-end h-15 w-full bg-chatbot-bg shadow-[0px_-1px_30.6px_0px_#0D00FF] rounded-full`}>
      <input className={`w-full text-white p-5 placeholder-[#96C7FD] outline-none`}
             value={value}
             type={`text`}
             placeholder={`Ask anything...`}
             onChange={handleChange}>
      </input>
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