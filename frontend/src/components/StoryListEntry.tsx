
export interface StoryListEntryProps {
  title: string;
  researcher: string;
  libraryLocation: string;
}
function StoryListEntry({storyListEntry, index}: {storyListEntry: StoryListEntryProps, index: number}) {
  return (
    <div className={`${index % 2 === 0 ? "bg-storylist-blue-light" : "bg-storylist-peach"}`}>
      <div className={`flex justify-around`}>
        <p>
          {storyListEntry.title}
        </p>
        <p>
          {storyListEntry.researcher}
        </p>
        <p>
          {storyListEntry.libraryLocation}
        </p>
      </div>
    </div>
  );

}

export default StoryListEntry;