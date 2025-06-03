function IslandPin ({className, imagePath}: {className:string, imagePath: string}) {

  return (
    <div className={`${className} group`}>
      <img className={`scale-75 group-hover:scale-100 group-hover:z-100 ease-out duration-300`} alt={`pin`} src={imagePath} />
    </div>
  );
}

export default IslandPin;