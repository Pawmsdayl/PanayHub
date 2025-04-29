function IslandPin () {

  return (
    <div className={`flex place-content-center  w-fit relative h-20 outline-3 outline-blue-300`}>
      <img className={``} src="src/assets/pin%201.png" alt={`pin`}/>
      <div className={`absolute w-fit top-0 left-10 outline-2 outline-red-200`}>
        <img className={`object-scale-down`} src={"src/assets/panayhub-logo.png"} alt={`inner image`}/>
      </div>
    </div>
  );
}

export default IslandPin;