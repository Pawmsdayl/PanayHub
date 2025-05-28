import Footer from "@/components/Footer.tsx";
import 'heatmap.js';
import Heatmap from "@/components/Heatmap.tsx";
import DashboardFilters from "@/components/DashboardFilters.tsx";
import StoryList from "@/components/StoryList.tsx";
import {useEffect, useReducer, useState} from "react";
import {StoryListEntryProps} from "@/components/StoryListEntry.tsx";
import {StoriesContext} from "@/contexts/StoriesContext.ts";
import {reducer, UserChoiceContext, UserChoiceDispatch} from "@/contexts/UserChoiceContext.ts";
import {StorytellersContext} from "@/contexts/StorytellersContext.ts";
import {queryNeo4j, storytellersOnly} from "@/functions/Queries.ts";
import {addSpacesBeforeCapitals, cleanUris, createStoryListEntries} from "@/utils.ts";
import {ChartDiv} from "@/components/ChartDiv.tsx";

function Dashboard() {
  const [userChoiceState, userChoiceDispatch] = useReducer(reducer, {
    narrativeType: null,
    narrativeSubtype: null,
    researcher: null,
    storyteller: null
  })


  const [storytellersList, setStorytellersList] = useState<string[]>([]);
  const [storyListEntries, setStoryListEntries] = useState<StoryListEntryProps[]>([]);
  const [provenances, setProvenances] = useState<string[]>([]);

  useEffect(() => {
    if (storytellersList.length === 0) {
      storytellersOnly().then(r =>{
        const cleanNames:string[] = [];
        const cleanUri = cleanUris(r.data.values)
        cleanUri.forEach((uri) => {
          cleanNames.push(addSpacesBeforeCapitals(uri));
        });
        cleanNames.sort((a, b) => a.localeCompare(b));
        setStorytellersList(cleanNames);
      });
    }
    if(!userChoiceState.narrativeSubtype && !userChoiceState.narrativeType && !userChoiceState.researcher) return;


  }, [userChoiceState.narrativeType, userChoiceState.narrativeSubtype, userChoiceState.researcher]);

  const handleOnClick = async () => {
    const response = await queryNeo4j(userChoiceState);
    const {storyListEntries: arr,
      provenances: provs
    } = createStoryListEntries(response);
    console.log(arr);
    setStoryListEntries(arr);
    setProvenances(provs);
  }

  return (
    <div className={`min-h-screen bg-white`}>
      <div className={`p-10`}>
        <section>
          <h1 className={`font-serif font-bold text-7xl gradient-text-highlight`}>
            Dashboard
          </h1>
        </section>

        <section className={`my-10`}>
          <div className={`grid grid-cols-3 place-items-center  gap-4`}>
            <div className={`flex flex-col`}>
              <UserChoiceContext.Provider value={userChoiceState}>
                <UserChoiceDispatch.Provider value={userChoiceDispatch}>
                  <StorytellersContext.Provider value={{storytellers: storytellersList}}>
                    <DashboardFilters/>
                  </StorytellersContext.Provider>
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
                onClick={handleOnClick}>
                Run Query
              </button>
            </div>
            <div>
              <Heatmap/>
            </div>
            <div>
              {
                provenances.length !== 0 &&
                  <ChartDiv provenances={provenances} storyList={storyListEntries}/>
              }

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