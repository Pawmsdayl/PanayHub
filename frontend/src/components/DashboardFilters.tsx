import FilterDropdown from "@/components/FilterDropdown.tsx";

function DashboardFilters({}:{}) {
  const filterNamesList: string[] = [
    "Narrative Type", "Narrative Subtype", "Researcher","Storyteller"
  ];

  return (
    <div className={`w-[300px] overflow-y-auto h-[600px]`}>
      <ul className={`flex flex-col flex-wrap justify-center items-center gap-4`}>
        <li>
          <FilterDropdown filterName={"Narrative Type"} filterList={filterNamesList}/>
        </li>
        <li>
          <FilterDropdown filterName={"Narrative Subtype"} filterList={filterNamesList}/>
        </li>
        <li>
          <FilterDropdown filterName={"Researcher"} filterList={filterNamesList}/>
        </li>
        <li>
          <FilterDropdown filterName={"Storyteller"} filterList={filterNamesList}/>
        </li>
      </ul>
    </div>
  );


}

export default DashboardFilters;