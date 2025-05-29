

export function CollageImage({className, img}:{className:string, img:string}){


  return(
    <div className={`${className} overflow-hidden rounded-xl bg-black`}>
      <div className={`overflow-hidden`}>
          <img src={img} alt={'panay pictures'} className={`object-none`}></img>
      </div>
    </div>
  );

}