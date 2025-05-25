import FilterDropdown from "@/components/FilterDropdown.tsx";
import {useContext} from "react";
import {UserChoiceContext} from "@/contexts/UserChoiceContext.ts";
import {StorytellersContext} from "@/contexts/StorytellersContext.ts";

function DashboardFilters() {
  const userChoiceContext = useContext(UserChoiceContext);
  const storytellersContext = useContext(StorytellersContext);
  enum NarrativeTypes {
    folkTales = "Folktales",
    legends = "Legends",
    myths = "Myths"
  }
  const {
    narrativeType
  } = userChoiceContext;


  const {
    storytellers
  } = storytellersContext;

  const narrativeTypesList: string[] = [
    "Folktales",
    "Legends",
    "Myths"
  ];

  const folktalesSubtypesList: string[] = [
    "Animal Tales",
    "Didactic Tales",
    "Fables",
    "Jocular Tales",
    "Marchen or Tales of Magic",
    "Miscellaneous Tales",
    "Novelistic Tales",
  ];
  const legendsSubtypesList: string[] = [
    "How Places and Things Got Their Names",
    "Origin of Animals",
    "Origin of Plants",
    "Heroic Legends",
    "Legends on Supernatural Beings",
    "Miscellaneous Legends",
    "Religious Legends",
  ];
  const mythsSubtypesList: string[] = [
    "Creation Myths",
    "Death Myths",
    "Miscellaneous Myths",
    "Mythological Stories",
    "Mythology and Deities",
    "Myths on Human Nature",
    "Myths on Natural Phenomena",
    "Myths on Pestilence",
    "Myths on Supernatural Creatures"
  ];

  let subtypesList;
  switch (narrativeType){
    case NarrativeTypes.folkTales:
      subtypesList = folktalesSubtypesList;
      break;
    case NarrativeTypes.legends:
      subtypesList = legendsSubtypesList;
      break;
    case NarrativeTypes.myths:
      subtypesList = mythsSubtypesList;
      break;
    default:
      subtypesList = null;
  }

  const researchersList = [
    "Alicia P Magos",
    "Bel Sobrevega",
    "Eliodora L Dimzon",
    "F. Landa Jocano",
    "Maximo Ramos",
    "Randy Madrid"
  ];

  return (
    <div className={`w-[300px] overflow-y-auto h-[550px]`}>
      <ul className={`flex flex-col flex-wrap justify-center items-center gap-4`}>
        <li>
          <FilterDropdown filterName={"Narrative Type"} filterList={narrativeTypesList}/>
        </li>
        <li>
          <FilterDropdown filterName={"Narrative Subtype"} filterList={subtypesList}/>
        </li>
        <li>
          <FilterDropdown filterName={"Researcher"} filterList={researchersList}/>
        </li>
        <li>
          <FilterDropdown filterName={"Storyteller"} filterList={storytellers}/>
        </li>
      </ul>
    </div>
  );


}

export default DashboardFilters;