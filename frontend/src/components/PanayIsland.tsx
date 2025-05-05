import IslandPin from "./IslandPin.tsx";

function PanayIsland () {
  return (
    <div className={`grid grid-rows-6 grid-cols-6 place-items-center`}>
      <img className={`col-span-full row-span-full object-scale-down`} src="src/assets/panay-island.png" alt={`panay island`}/>
      <IslandPin imagePath="src/assets/monster.png" className={`row-start-1 col-start-2 row-span-2 mb-15 col`}></IslandPin>
      <IslandPin imagePath="src/assets/bukig.png" className={`row-start-3 col-start-2 col-span-2`}></IslandPin>
      <IslandPin imagePath="src/assets/upv.png" className={`row-start-4 col-start-3 row-span-2 col-span-2 mr-8`}></IslandPin>
      <IslandPin imagePath="src/assets/cwvs.png" className={`row-start-4 col-start-3 row-span-2 mb-9 ml-22 col-span-2`}></IslandPin>
      <IslandPin imagePath="src/assets/monster.png" className={`row-start-2 col-start-4 row-span-2 col-span-2 ml-20`}></IslandPin>
      <div className={`flex items-center justify-center bg-white size-40 rounded-full col-start-3 row-start-2 row-span-3 col-span-2 m`}>
        <img alt={`panayhub circle`} src={`src/assets/panayhub-circle.png`}/>
      </div>
    </div>
  );

}

export default PanayIsland;