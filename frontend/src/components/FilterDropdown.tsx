import {useContext, useEffect, useState} from "react";
import {FaCircleChevronUp} from "react-icons/fa6";
import {ActionType, UserChoiceContext, UserChoiceDispatch} from "@/contexts/UserChoiceContext.ts";

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
  const dispatch = useContext(UserChoiceDispatch);
  const userChoiceContext = useContext(UserChoiceContext);


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const toggleDropdown = () => {
    if (userChoiceContext.narrativeType === null && filterName === "Narrative Subtype") {
      setValue("Must select a Narrative Type");
    }
    setIsDropdownOpen(prev => !prev);
  }

  useEffect(() => {
    const {
      narrativeType
    } = userChoiceContext;
    if("Narrative Subtype" === filterName && narrativeType === null) {
      setValue(null);
    }
  }, [filterName, userChoiceContext]);
  return (
    <div className={`flex flex-col`}>
      <button
        className={`hover:cursor-pointer rounded-sm p-4 ${value === null? `bg-filter-gray`: `bg-filter-blue-light`} w-[243px] h-[55px]`}
        onClick={toggleDropdown}
      >
        <div className={`flex items-center justify-center h-full w-full`}>
          <div className={`flex justify-between items-center w-full`}>
            <p className={`text-body-font font-bold`}>
              {filterName}
              <br/>
              <span className={`text-sm font-normal`}>
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
              <li key={index + filter} className={`text-body-font ${filter === value? `bg-orange-highlight-dark text-white`: `bg-filter-blue-light`} hover:bg-filter-blue-dark hover:text-white duration-300 ease-out`}>
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
                      type = ActionType.storyteller;
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

                  setIsDropdownOpen(false);
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