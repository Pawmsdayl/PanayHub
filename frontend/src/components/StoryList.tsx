import StoryListEntry, {StoryListEntryProps} from "@/components/StoryListEntry.tsx";
import {useContext} from "react";
import {StoriesContext} from "@/pages/Dashboard.tsx";


function StoryList() {
  const storyListEntriesContext = useContext(StoriesContext);

  return (
    <div className={`bg-chatbot-light rounded-xl w-[934px] h-[509px]`}>
      <div className={`p-4`}>
        <div className={`grid grid-cols-3 w-full p-4 gap-2 font-bold text-center `}>
          <h2 className={`text-filter-blue-light`}>
            Title
          </h2>
          <h2 className={`text-filter-blue-light`}>
            Researcher
          </h2>
          <h2 className={`text-filter-blue-light`}>
            Library
          </h2>
          <div className={`col-span-3 col-start-1 text-center`}>
            <ul>
              {storyListEntriesContext?.map((storyListEntry, index) => (
                <li key={index + storyListEntry.title}>
                  <StoryListEntry storyListEntry={storyListEntry} index={index}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={`p-4`}>

      </div>
    </div>
  );
}

export default StoryList;