
export interface StoryListEntryProps {
  title: string;
  storyteller: string;
  researcher: string;
  libraryLocation: "Center for West Visayan Studies";
}

function StoryListEntry({storyListEntry, index}: {storyListEntry: StoryListEntryProps, index: number}) {
  return (
    <div className={`${index % 2 === 0 ? "bg-storylist-blue-light" : "bg-storylist-peach"}`}>
      <div className={`grid grid-cols-4 col-span-4 place-items-center `}>
        <p>
          {storyListEntry.title}
        </p>
        <p>
          {storyListEntry.storyteller}
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