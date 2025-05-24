import Footer from "@/components/Footer.tsx";
import 'heatmap.js';
import Heatmap from "@/components/Heatmap.tsx";
import DashboardFilters from "@/components/DashboardFilters.tsx";
import StoryList from "@/components/StoryList.tsx";
import {useEffect, useState} from "react";
import {createContext, useContext} from "react";
import {StoryListEntryProps} from "@/components/StoryListEntry.tsx";

interface ProviderValue {
  setProvinceFilter: (province: string | null) => void;
}
export const UserContext = createContext<ProviderValue|null>(null);
export const StoriesContext = createContext<StoryListEntryProps[]|null>(null)

function Dashboard() {
  const [provinceFilter, setProvinceFilter] = useState<string | null>(null);
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [barangayFilter, setBarangayFilter] = useState<string | null>(null);
  const [narrativeTypeFilter, setNarrativeTypeFilter] = useState<string | null>(null);
  const [narrativeSubtypeFilter, setNarrativeSubtypeFilter] = useState<string | null>(null);
  const [researcherFilter, setResearcherFilter] = useState<string | null>(null);
  const [storytellerFilter, setStorytellerFilter] = useState<string | null>(null);
  const [libraryLocationFilter, setLibraryLocationFilter] = useState<string | null>(null);
  const [storyListEntries, setStoryListEntries] = useState<StoryListEntryProps[]>([
    {
      title: "Title 1",
      researcher: "Researcher 1",
      libraryLocation: "Library Location 1"
    },
    {
      title: "Title 2",
      researcher: "Researcher 2",
      libraryLocation: "Library Location 2asd"
    }
  ]);


    const queryNeo4j = async () => {
      const url = "https://85be2d53.databases.neo4j.io/db/neo4j/query/v2"; // or your server URL
      const credentials = "bmVvNGo6eFFNUktCYjJJeGMtUFJhTVU4RUlZYjNUendtcjlYVFdzbUQ4cXRGYjh5cw=="
// Base64 encode
      const cypherQuery = {
        "statement": "MATCH (n:ns0__AnimalTales) RETURN n LIMIT 25;"
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${credentials}`,
          },
          body: JSON.stringify(cypherQuery),
        });

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const result = await response.json();
        console.log("Query Result:", result);
        // setData(result);
      } catch (err) {
        // setError(err.message);
      }
    };



  const providerValue: ProviderValue = {
    setProvinceFilter,
  };
  return (
    <div className={`min-h-screen bg-white`}>
      <div className={`p-10`}>
        <section>
          <h1 className={`font-serif font-bold text-7xl gradient-text-highlight`}>
            Dashboard
            {provinceFilter}
          </h1>
          <button onClick={queryNeo4j}>Run Query</button>
        </section>

        <section className={`my-10`}>
          <div className={`grid grid-cols-3 place-items-center gap-4`}>
            <UserContext.Provider value={providerValue}>
              <DashboardFilters/>
            </UserContext.Provider>
            <div>
              <Heatmap/>
            </div>
            <div>
              charts
            </div>
          </div>
        </section>
        <section className={`w-full  flex justify-center items-center`}>
          <StoriesContext.Provider value={storyListEntries}>
            <StoryList/>
          </StoriesContext.Provider>

        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;