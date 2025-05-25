import Footer from "@/components/Footer.tsx";
import 'heatmap.js';
import Heatmap from "@/components/Heatmap.tsx";
import DashboardFilters from "@/components/DashboardFilters.tsx";
import StoryList from "@/components/StoryList.tsx";
import {useReducer, useState} from "react";
import {StoryListEntryProps} from "@/components/StoryListEntry.tsx";
import {StoriesContext} from "@/contexts/StoriesContext.ts";
import {reducer, UserChoiceContext, UserChoiceDispatch} from "@/contexts/UserChoiceContext.ts";
import {ResearchersContext} from "@/contexts/ResearchersContext.ts";
import {StorytellersContext} from "@/contexts/StorytellersContext.ts";
import {createQuery, withNarrativeType} from "@/functions/Queries.ts";

function Dashboard() {
  const [userChoiceState, userChoiceDispatch] = useReducer(reducer, {
    narrativeType: null,
    narrativeSubtype: null,
    researcher: null,
    storyteller: null
  })

  const [researchersList, setResearchersList] = useState<string[]>([
    "Asd", "Asd", "Ad,", "Asd"
  ]);
  const [storytellersList, setStorytellersList] = useState<string[]>([
    "Asd", "Asd", "Ad,", "Asd"
  ]);
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


      const statement = createQuery(userChoiceState);
      const cypherQuery = {
        // "statement": "MATCH (n:ns0__AnimalTales) RETURN n LIMIT 25;"
        "statement": statement
      };

      console.log(statement);

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



  return (
    <div className={`min-h-screen bg-white`}>
      <div className={`p-10`}>
        <section>
          <h1 className={`font-serif font-bold text-7xl gradient-text-highlight`}>
            Dashboard
          </h1>
        </section>

        <section className={`my-10`}>
          <div className={`grid grid-cols-3 place-items-center gap-4`}>
            <div className={`flex flex-col`}>
              <UserChoiceContext.Provider value={userChoiceState}>
                <UserChoiceDispatch.Provider value={userChoiceDispatch}>
                  <ResearchersContext.Provider value={{researchers: researchersList}}>
                    <StorytellersContext.Provider value={{storytellers: storytellersList}}>
                      <DashboardFilters/>
                    </StorytellersContext.Provider>
                  </ResearchersContext.Provider>
                </UserChoiceDispatch.Provider>
              </UserChoiceContext.Provider>
              <button
                disabled={
                    userChoiceState.narrativeType === null  &&
                      userChoiceState.narrativeSubtype === null &&
                      userChoiceState.researcher === null &&
                    userChoiceState.storyteller === null
                }
                className={`bg-chatbot-light text-white p-2 rounded-lg hover:cursor-pointer duration-300 transition-ease-out hover:bg-black`}
                onClick={queryNeo4j}>
                Run Query
              </button>
            </div>
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