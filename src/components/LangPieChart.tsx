import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { type GitHubRepo } from "@/interface";
import { useMemo } from "react";

const PALETTE = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--color-prussian-blue)",
  "var(--color-sunglow)",
  "var(--color-myrtle-green)",
];

export function LangPieChart({ repos }: { repos: GitHubRepo[] }) {
  const { chartData, chartConfig } = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const r of repos ?? []) {
      const lang = r.language ?? "Unknown";
      counts[lang] = (counts[lang] || 0) + 1;
    }

    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    const config: Record<string, any> = {
      visitors: { label: "Projects" },
    };

    const data = entries.map(([lang, count], idx) => {
      const key = lang.toLowerCase().replace(/\s+/g, "-");
      const color = PALETTE[idx % PALETTE.length];
      config[key] = { label: lang, color };
      return {
        browser: key,
        visitors: count,
        fill: color,
        _label: lang,
      };
    });

    return { chartData: data, chartConfig: config as ChartConfig };
  }, [repos]);

  return (
    <Card className="flex flex-col w-full shadow-none bg-transparent border-0">
      <CardHeader className="items-center pb-0">
        <CardTitle className="lg:text-center lg:text-2xl">
          Project Languages
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              stroke="0"
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center lg:text-lg"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
