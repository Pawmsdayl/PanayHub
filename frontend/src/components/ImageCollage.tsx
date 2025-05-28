import {CollageImage} from "@/components/CollageImage.tsx";


export function ImageCollage() {
  return (
    <div className={`grid grid-cols-8 grid-rows-9 gap-5 w-full h-full`}>
      <CollageImage className={"row-start-1 row-span-4 col-start-4 col-span-4"}/>
      <CollageImage className={"row-start-5 row-span-4 col-start-4 col-span-2"}/>
      <CollageImage className={"row-start-5 row-span-2 col-start-6 col-span-1"}/>
      <CollageImage className={"row-start-6 row-span-2 col-start-6 col-span-1"}/>
    </div>
  );
}