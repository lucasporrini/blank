"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { TrackChart } from "./track-chart";
import { TrackItem, TrackItemProps } from "./track-item";

const TrackItems: TrackItemProps[] = [
  {
    title: "Revenue Growth",
    progress: 87,
    color: "blue",
  },
  {
    title: "Operational Costs",
    progress: 58,
    color: "violet",
  },
  {
    title: "Top Performing Products",
    progress: 76,
    color: "green",
  },
];

export default function TrackProgress() {
  return (
    <div className="flex flex-col items-center justify-center w-fit bg-gray-200/50 p-1 rounded-xl gap-1">
      <div className="w-full flex items-center justify-between gap-2 p-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-md p-2">
            <span className="w-full h-full bg-white rounded-full p-2" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold tracking-tight">Track Progress</h1>
            <span className="text-sm text-gray-400 tracking-tight">
              Statistical or detailed figures.
            </span>
          </div>
        </div>
        <Button variant="outline" size="sm">
          Add new <PlusIcon />
        </Button>
      </div>

      <div className="w-full flex flex-col gap-1">
        {TrackItems.map((item, index) => (
          <TrackItem
            key={index}
            title={item.title}
            progress={item.progress}
            color={item.color}
          />
        ))}
      </div>

      <div className="w-full flex flex-col gap-1">
        <TrackChart title="Operational Costs" />
      </div>
    </div>
  );
}
