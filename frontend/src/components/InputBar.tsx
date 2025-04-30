import  {useState} from "react";


function InputBar({handleSendMessage}: {handleSendMessage: (message: string) => void}){
// function InputBar(){
  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setValue(event.target.value);
    console.log(value);
  }

  return(
    <div className={`flex relative h-15 w-full bg-chatbot-bg shadow-[0px_-1px_30.6px_0px_#0D00FF] rounded-full`}>
      <input className={`w-full text-white p-2`} value={value} onChange={handleChange}></input>
      <button className={`top-1 right-1 absolute text-black bg-white rounded-full cursor-pointer`}
              type={`button`}
              onClick={() => handleSendMessage(value)}
      >
        Hello
      </button>
    </div>
  );


}

export default InputBar;