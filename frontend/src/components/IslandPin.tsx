function IslandPin ({className}: {className:string}) {

  return (
    <div className={className}>
      <div className={`flex place-content-center  w-fit relative h-20`}>
        <img className={``} src="src/assets/pin%201.png" alt={`pin`}/>
        <div className={`absolute w-fit top-0 left-10`}>
          <img className={`object-scale-down`} src={"src/assets/panayhub-logo.png"} alt={`inner image`}/>
        </div>
      </div>
    </div>
  );
}

export default IslandPin;