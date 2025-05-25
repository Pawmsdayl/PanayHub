import {createContext} from "react";
import {StoryListEntryProps} from "@/components/StoryListEntry.tsx";

export const UserContext = createContext<ProviderValue|null>(null);

