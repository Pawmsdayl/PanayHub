
export function ContributionImage({src}:{src:string}){

  return(
    <div className={`flex justify-center items-center my-10`}>
      <div className={``}>
        <img className={`max-w-200`} alt={``} src={src}/>
      </div>
    </div>
  );
}