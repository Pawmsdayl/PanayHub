import {useContext, useState} from "react";
import { FaCircleChevronUp } from "react-icons/fa6";
import {UserContext} from "@/pages/Dashboard.tsx";
function FilterDropdown(
  {
    filterName,
    filterList,
  }:
  {
    filterName: string,
    filterList: string[],
  })
{
  const context = useContext(UserContext);
  // context?.setProvinceFilter("test");


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  }

  return (
    <div className={`flex flex-col`}>
      <button
        className={`hover:cursor-pointer rounded-sm p-4 ${value === null? `bg-filter-gray`: `bg-filter-blue-light`} w-[243px] h-[55px]`}
        onClick={toggleDropdown}
      >
        <div className={`flex items-center justify-center h-full w-full`}>
          <div className={`flex justify-between items-center w-full`}>
            <p className={`text-body-font`}>
              {filterName}
              <br/>
              <span className={`text-sm`}>
                {value}
              </span>
            </p>
            <div className={`size-[31px]`}>
              <FaCircleChevronUp className={`text-white w-full h-full`}/>
            </div>
          </div>
        </div>
      </button>
      {isDropdownOpen && (
        <div className={`bg-filter-gray h-[100px] overflow-y-auto border`}>
          <ul>
            {filterList.map((filter, index) => (
              <li key={index + filter} className={`text-body-font ${filter === value? `bg-filter-blue-dark text-white`: `bg-filter-blue-light`} hover:bg-filter-blue-light duration-300 ease-out`}>
                <button className={`hover:cursor-pointer w-full`}
                onClick={() => {
                  if (value === filter) {
                    setValue(null);

                  }else {
                    setValue(filter)
                    if (context === null) {
                      console.log("Context is null");
                    }else {
                      context.setProvinceFilter(filter);
                      console.log(filter);
                    }
                  }
                }}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
}

export default FilterDropdown;