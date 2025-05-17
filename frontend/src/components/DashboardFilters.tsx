import FilterDropdown from "@/components/FilterDropdown.tsx";

function DashboardFilters() {
  const filterNamesList: string[] = [
    "Province", "City/Municipality", "Barangay", "Narrative Type", "Narrative Subtype",
    "Researcher","Storyteller", "Library Location"
  ];

  return (
    <div className={`w-full`}>
      <ul className={`flex flex-col flex-wrap justify-center items-center gap-4`}>
        {filterNamesList.map((filterName, index) => (
          <li key={index + filterName}>
            <FilterDropdown filterName={filterName} />
          </li>
        ))}
      </ul>
    </div>
  );


}

export default DashboardFilters;