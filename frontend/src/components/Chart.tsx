import {Bar, BarChart, XAxis, YAxis, } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"


export function Chart({chartData, xDataKey, yDataKey, title}) {

  const chartConfig = {
  [xDataKey]: {
      label: "Count",
      color: "#60a5fa",
    },
  } satisfies ChartConfig


  console.log("Chart Data", chartConfig);
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