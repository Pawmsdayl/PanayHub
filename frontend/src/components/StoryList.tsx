import StoryListEntry from "@/components/StoryListEntry.tsx";
import {useContext} from "react";
import {StoriesContext} from "@/contexts/StoriesContext.ts";


function StoryList() {
  const storyListEntriesContext = useContext(StoriesContext);

  return (
    <div className={`bg-chatbot-light rounded-xl w-[934px] h-[509px] overflow-y-auto`}>
      <div className={`p-4 overflow-y-scroll`}>
        <div className={`grid grid-cols-4 w-full p-4 gap-2 font-bold text-center `}>
          <h2 className={`text-filter-blue-light`}>
            Title
          </h2>
          <h2 className={`text-filter-blue-light`}>
            Storyteller
          </h2>
          <h2 className={`text-filter-blue-light`}>
            Researcher
          </h2>
          <h2 className={`text-filter-blue-light`}>
            Library
          </h2>
          <div className={`col-span-4 col-start-1 h-full text-center overflow-y-hidden`}>
            <div className={`flex overflow-y-scroll`}>
              <ul className={`overflow-y-hidden`}>
                {storyListEntriesContext?.map((storyListEntry, index) => (
                  <li key={index + storyListEntry.title}>
                    <StoryListEntry storyListEntry={storyListEntry} index={index}/>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`p-4`}>

      </div>
    </div>
  );
}

export default StoryList;