import {StoryListEntryProps} from "@/components/StoryListEntry.tsx";
import {Chart} from "@/components/Chart.tsx";


interface ChartData {
  researcher?: string;
  storyteller?: string;
  provenance?: string;
  count: number;
}

export function ChartDiv({storyList, provenances}: { storyList:StoryListEntryProps[], provenances: string[]}) {
  // interface ResearchChartDataItem{
  //   researcher: string;
  //   count: number;
  // }
  //
  // interface StorytellerChartDataItem {
  //   storyteller: string;
  //   count: number;
  // }
  //
  // interface ProvenanceChartDataItem {
  //   provenance: string;
  //   count: number;
  // }

  const researchersData: ChartData[] = [];
  storyList.forEach((story) => {
    const existing = researchersData.find(item => item.researcher === story.researcher);
    if (existing) {
      existing.count += 1;
    } else {
      researchersData.push({ researcher: story.researcher, count: 1 });
    }
  });

  const storytellersData: ChartData[] = [];
  storyList.forEach((story) => {
    const existing = storytellersData.find(item => item.storyteller === story.storyteller);
    if (existing) {
      existing.count += 1;
    } else {
      storytellersData.push({ storyteller: story.storyteller, count: 1 });
    }
  });

  const provenanceData: ChartData[] = [];
  provenances.forEach((provenance) => {
    const existing = provenanceData.find(item => item.provenance === provenance);
    if (existing) {
      existing.count += 1;
    } else {
      provenanceData.push({ provenance: provenance, count: 1 });
    }
  });

  // const topProvenances =
  //   provenanceData.sort((a, b) => b.count - a.count).slice(0, 5);
  // const topStorytellers =
  //   storytellersData.sort((a, b) => b.count -a.count).slice(0, 5);
  const topProvenances =
    provenanceData.length > 5
      ? provenanceData.sort((a, b) => b.count - a.count).slice(0, 5)
      : provenanceData;

  const topStorytellers =
    storytellersData.length > 5
      ? storytellersData.sort((a, b) => b.count - a.count).slice(0, 5)
      : storytellersData;




  console.log(researchersData);

    return (
      <div className={`overflow-y-scroll h-[600px]`}>
        <div className={` border-2 border-black flex flex-col`}>
          <Chart title={"Count of Researchers"} chartData={researchersData} xDataKey={"count"} yDataKey={"researcher"}>
          </Chart>
          <Chart title={"Top 5 Count of Storytellers"} chartData={topStorytellers} xDataKey={"count"} yDataKey={"storyteller"}/>
          <Chart title={"Top 5 Count of Provenances"} chartData={topProvenances} xDataKey={"count"} yDataKey={"provenance"}/>
        </div>
       </div>
    );

}