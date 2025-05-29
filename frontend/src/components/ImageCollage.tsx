import {CollageImage} from "@/components/CollageImage.tsx";


export function ImageCollage() {
  return (
    <div className={`grid grid-cols-8 grid-rows-9 gap-5 w-full h-full`}>
      <CollageImage img="/Atis_Panay_970322.webp" className={"row-start-1 row-span-4 col-start-4 col-span-4"}/>
      <CollageImage img={`/2019926.jpg`} className={"row-start-5 row-span-4 col-start-4 col-span-2"}/>
      <CollageImage img={"/02-PB-Attire-1024x691.jpg"} className={"row-start-5 row-span-2 col-start-6 col-span-1"}/>
      <CollageImage img={`/1_paSVirX5sTPYHChDJe4pbQ.jpg`} className={"row-start-6 row-span-2 col-start-7 col-span-1"}/>
      <CollageImage img={`/Atis_Panay_0302.webp`} className={"row-start-2 row-span-4 col-start-1 col-span-3"}/>
      <CollageImage img={`/Weaving-Western-Visayas.jpg`} className={"row-start-6 row-span-3 col-start-1 col-span-3"}/>
      {/*<CollageImage className={"row-start-6 row-span-4 col-start-4 col-span-4"}/>*/}
    </div>
  );
}