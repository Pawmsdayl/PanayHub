import {useState} from "react";


function InputBar({handleSendMessage}: {handleSendMessage: (message: string, sender: string) => void}){
  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setValue(event.target.value);
  }

  function handleClick(){
    handleSendMessage(value, "user");
    setValue("");
    console.log(value);
  }

  return(
    <div className={`flex relative self-start h-15 w-full bg-chatbot-bg shadow-[0px_-1px_30.6px_0px_#0D00FF] rounded-full`}>
      <input className={`w-full text-white p-2`}
             value={value}
             type={`text`}
             onChange={handleChange}>
      </input>
      <button className={`top-1 right-1 absolute text-black bg-white rounded-full cursor-pointer`}
              type={`button`}
              aria-label={`Send message`}
              onClick={handleClick}>
        Send
      </button>
    </div>
  );


}

export default InputBar;