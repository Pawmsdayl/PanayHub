import StoryListEntry, {StoryListEntryProps} from "@/components/StoryListEntry.tsx";


function StoryList() {
  const a: StoryListEntryProps = {
    title: "Title",
    researcher: "Researcher",
    libraryLocation: "Library Location"
  }

  const storyListEntries: StoryListEntryProps[] = [
    {
      title: "Title 1",
      researcher: "Researcher 1",
      libraryLocation: "Library Location 1"
    },
    {
      title: "Title 2",
      researcher: "Researcher 2",
      libraryLocation: "Library Location 2"
    }
  ];

  return (
    <div className={`bg-chatbot-light rounded-xl w-[934px] h-[509px]`}>
      <div className={`p-4`}>
        <div className={`grid grid-cols-3 w-full p-4 gap-2 font-bold text-center border`}>
          <h2>
            Title
          </h2>
          <h2>
            Researcher
          </h2>
          <h2>
            Library
          </h2>
          <div className={`col-span-3 col-start-1 text-center`}>
            <ul>
              {storyListEntries.map((storyListEntry, index) => (
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