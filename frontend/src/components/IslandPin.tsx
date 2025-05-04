function IslandPin ({className, imagePath}: {className:string, imagePath: string}) {

  return (
    // <div className={className}>
    //   <div className={`flex items-center justify-center  w-fit relative h-20 border-2 border-red-900`}>
    //     <img className={``} src="src/assets/pin%201.png" alt={`pin`}/>
    //     <div className={`absolute flex items-center self-start w-fit border-2 border-red-200`}>
    //       <img className={`object-scale-down`} src={imagePath} alt={`inner image`}/>
    //     </div>
    //   </div>
    // </div>


    <div className={`${className} hover:scale-125  ease-out duration-300 group`}>
      <div className={`grid grid-rows-1 grid-cols-1 place-items-center h-fit`}>
        <img className={`row-span-full row-start-1 col-start-1`} src="src/assets/pin%201.png" alt={`pin`}/>
        <div className={`row-start-1 col-start-1 flex content-center justify-center mb-5 w-full `}>
          <img className={`object-scale-down`} src={imagePath} alt={`inner image`}/>
        </div>
      </div>
    </div>
  );
}

export default IslandPin;