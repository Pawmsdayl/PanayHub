import {Bar, BarChart, XAxis, YAxis, } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"


interface ChartData {
  researcher?: string;
  storyteller?: string;
  provenance?: string;
  count: number;

}


export function Chart({chartData, xDataKey, yDataKey, title}: {chartData: ChartData[], xDataKey:string, yDataKey:string, title:string}) {

  const chartConfig = {
  [xDataKey]: {
      label: "Count",
      color: "#60a5fa",
    },
  } satisfies ChartConfig


  return (
    <div className={`flex flex-col`}>
      <h1 className={`text-black font-bold`}>{title}</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] border  ">
        <BarChart accessibilityLayer layout={`vertical`} data={chartData}>
          <XAxis  className={`text-black`} type={"number"} dataKey={xDataKey}/>
          <YAxis
            dataKey={yDataKey}
            type={`category`}
            tickLine={false}
          />
          <Bar dataKey={xDataKey} fill="#60a5fa" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}