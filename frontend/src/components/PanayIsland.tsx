import IslandPin from "./IslandPin.tsx";

function PanayIsland () {
  return (
    <div className={`grid grid-rows-6 grid-cols-6 place-items-center`}>
      <img className={`col-span-full row-span-full object-scale-down`} src="src/assets/panay-island.png" alt={`panay island`}/>
      <IslandPin className={`row-start-1 col-start-1 col-span-2`}></IslandPin>
      <IslandPin className={`row-start-3 col-start-2 col-span-2 mr-10`}></IslandPin>
      <IslandPin className={`row-start-4 col-start-3 row-span-2 self-end mb-10`}></IslandPin>
      <IslandPin className={`row-start-4 col-start-4 row-span-2 mb-5`}></IslandPin>
      <IslandPin className={`row-start-2 col-start-5 row-span-2 mb-10`}></IslandPin>
      <div className={`flex items-center justify-center bg-white size-40 rounded-full col-start-3 row-start-2 row-span-3 col-span-2 m`}>
        <img className={`size-20`} src={"src/assets/panayhub-logo.png"} alt={`inner image`}/>
      </div>
    </div>
  );

}

export default PanayIsland;