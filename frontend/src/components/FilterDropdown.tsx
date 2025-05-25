import {useContext, useState} from "react";
import {FaCircleChevronUp} from "react-icons/fa6";
import {ActionType, UserChoiceDispatch} from "@/contexts/UserChoiceContext.ts";

function FilterDropdown(
  {
    filterName,
    filterList,
  }:
  {
    filterName: string,
    filterList: string[]|null,
  })
{
  // const context = useContext(UserContext);
  // context?.setProvinceFilter("test");
  const dispatch = useContext(UserChoiceDispatch);


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
        <div className={`bg-filter-gray w-[243px] overflow-x-hidden overflow-y-auto border`}>
          <ul>
            {filterList?.map((filter, index) => (
              <li key={index + filter} className={`text-body-font ${filter === value? `bg-filter-blue-dark text-white`: `bg-filter-blue-light`} hover:bg-filter-blue-light duration-300 ease-out`}>
                <button className={`hover:cursor-pointer w-full`}
                onClick={() => {
                  let type;
                  switch (filterName) {
                    case "Narrative Type":
                      type = ActionType.narrativeType;
                      break;
                    case "Narrative Subtype":
                      type = ActionType.narrativeSubtype;
                      break;
                    case "Researcher":
                      type = ActionType.researcher;
                      break;
                    default:
                      type = "Storyteller"
                      break;
                  }
                  if (value === filter) {
                    setValue(null);
                    if (dispatch) {
                      dispatch({
                        type: type,
                        payload: null,
                      })
                    }

                  }else {
                    setValue(filter)
                    if (dispatch) {
                        dispatch({
                          type: type,
                          payload: filter,
                        })
                    }
                  }
                }}
                >
                  <p className={`overflow-x-hidden`}>
                    {filter}
                  </p>
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