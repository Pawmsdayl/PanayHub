
function FilterDropdown({filterName}: {filterName: string}) {

  return (
    <div className={`flex hover:cursor-pointer items-center justify-center rounded-[56px] p-4 bg-filter-blue-light w-[243px] h-[55px]`}>
      <div className={`flex justify-between items-center w-full`}>
        <p className={`text-body-font`}>{filterName}</p>
        <div className={`bg-white rounded-full size-[31px] text-center`}>^</div>
      </div>
    </div>
  );
}

export default FilterDropdown;