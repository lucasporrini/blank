import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

// Generate random data
const generateRandomData = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months.map((month) => ({
    month,
    revenueGrowth: Math.floor(Math.random() * 50000) + 50000, // $50k-$100k
    operationalCosts: Math.floor(Math.random() * 30000) + 20000, // $20k-$50k
    topPerformingProducts: Math.floor(Math.random() * 40000) + 40000, // $40k-$80k
  }));
};

const chartData = generateRandomData();

const chartConfig = {
  revenueGrowth: {
    label: "Revenue Growth",
    color: "rgb(96, 165, 250)", // blue-400
  },
  operationalCosts: {
    label: "Operational Costs",
    color: "rgb(167, 139, 250)", // violet-400
  },
  topPerformingProducts: {
    label: "Top Performing Products",
    color: "rgb(74, 222, 128)", // green-400
  },
} satisfies ChartConfig;

interface TrackChartProps {
  title: string;
}

function TrackChart({ title }: TrackChartProps) {
  return (
    <div className="flex flex-col items-start p-3 bg-white w-full rounded-xl gap-4">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-medium tracking-tight text-sm">{title}</h2>
        <Select defaultValue="6">
          <SelectTrigger className="py-1">
            <SelectValue placeholder="Select a chart" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3 month</SelectItem>
            <SelectItem value="6">6 month</SelectItem>
            <SelectItem value="12">1 year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ChartContainer config={chartConfig} className="w-full">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="revenueGrowth"
            type="linear"
            stroke="rgb(96, 165, 250)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="operationalCosts"
            type="linear"
            stroke="rgb(167, 139, 250)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="topPerformingProducts"
            type="linear"
            stroke="rgb(74, 222, 128)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}

export { TrackChart };
