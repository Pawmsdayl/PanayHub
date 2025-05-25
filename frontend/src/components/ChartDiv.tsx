import {StoryListEntryProps} from "@/components/StoryListEntry.tsx";
import {Chart} from "@/components/Chart.tsx";
import {Record} from "neo4j-driver";
import {ChartConfig} from "@/components/ui/chart.tsx";


const chartConfig = {
  researcher: {
    label: "Researcher",
    color: "#2563eb",
  },
  // mobile: {
  //   label: "Mobile",
  //   color: "#60a5fa",
  // },
} satisfies ChartConfig;
export function ChartDiv({children , storyList, provenances}: {children: React.ReactNode, storyList:StoryListEntryProps[], provenances: string[]}) {
  interface ResearchChartDataItem{
    researcher: string;
    count: number;
  }

  interface StorytellerChartDataItem {
    storyteller: string;
    count: number;
  }

  interface ProvenanceChartDataItem {
    provenance: string;
    count: number;
  }

  const researchersData: ResearchChartDataItem[] = [];
  storyList.forEach((story) => {
    const existing = researchersData.find(item => item.researcher === story.researcher);
    if (existing) {
      existing.count += 1;
    } else {
      researchersData.push({ researcher: story.researcher, count: 1 });
    }
  });

  const storytellersData: StorytellerChartDataItem[] = [];
  storyList.forEach((story) => {
    const existing = storytellersData.find(item => item.storyteller === story.storyteller);
    if (existing) {
      existing.count += 1;
    } else {
      storytellersData.push({ storyteller: story.storyteller, count: 1 });
    }
  });

  const provenanceData: ProvenanceChartDataItem[] = [];
  provenances.forEach((provenance) => {
    const existing = provenanceData.find(item => item.provenance === provenance);
    if (existing) {
      existing.count += 1;
    } else {
      provenanceData.push({ provenance: provenance, count: 1 });
    }
  });

    // console.log(researchersCount);

  console.log(researchersData);
    // const researchersChartConfig = {
    //
    // } satisfies  ChartConfig;

    return (
      <div className={`overflow-y-scroll h-[550px]`}>
        <div className={`flex flex-col`}>
          <Chart title={"Count of Researchers"} chartData={researchersData} xDataKey={"count"} yDataKey={"researcher"}>
          </Chart>
          <Chart title={"Count of Storytellers"} chartData={storytellersData} xDataKey={"count"} yDataKey={"storyteller"}/>
          <Chart title={"Count of Provenances"} chartData={provenanceData} xDataKey={"count"} yDataKey={"provenance"}/>
        </div>
      </div>
    );

}