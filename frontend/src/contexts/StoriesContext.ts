import {createContext} from "react";
import {StoryListEntryProps} from "@/components/StoryListEntry.tsx";

export const StoriesContext = createContext<StoryListEntryProps[]|null>(null)
