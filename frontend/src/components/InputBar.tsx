import {useState} from "react";


function InputBar(){
  const {value, setValue} = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setValue(event.target.value);
  }

  return(
    <div className={`flex h-15 w-full border border-input`}>
      <input className={`w-full`} value={value} onChange={handleChange}></input>
    </div>
  );

}

export default InputBar;