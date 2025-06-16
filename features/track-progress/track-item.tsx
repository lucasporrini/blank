"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useCallback } from "react";

interface TrackItemProps {
  title: string;
  progress: number;
  color: "blue" | "violet" | "green";
}

function TrackItem({ title, progress, color }: TrackItemProps) {
  const BAR_COUNT = 34;

  const checkProgressRender = useCallback((progress: number) => {
    return Math.floor((progress * BAR_COUNT) / 100);
  }, []);

  return (
    <div className="flex flex-col items-start p-3 bg-white w-full rounded-xl gap-2">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-medium tracking-tight text-sm">{title}</h2>
        <span
          className={cn(
            "text-sm font-semibold",
            color === "blue" && "text-blue-400",
            color === "violet" && "text-violet-400",
            color === "green" && "text-green-400",
          )}
        >
          {progress}%
        </span>
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="flex items-center gap-1 h-full w-full">
          {Array.from({ length: BAR_COUNT }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className={cn(
                "h-8 w-2 rounded-full ring-0 border-1 transition-all duration-300",
                index < checkProgressRender(progress) &&
                  color === "blue" &&
                  "ring-blue-400 bg-blue-400 border-blue-400 shadow-[inset_1px_0_1px_rgb(255,255,255,0.3),_inset_-1px_0_1px_rgb(0,121,226,0.5)]",
                index < checkProgressRender(progress) &&
                  color === "violet" &&
                  "ring-violet-400 bg-violet-400 border-violet-400 shadow-[inset_1px_0_1px_rgb(255,255,255,0.3),_inset_-1px_0_1px_rgb(121,121,226,0.5)]",
                index < checkProgressRender(progress) &&
                  color === "green" &&
                  "ring-green-400 bg-green-400 border-green-400 shadow-[inset_1px_0_1px_rgb(255,255,255,0.3),_inset_-1px_0_1px_rgb(15,162,11,0.5)]",
                (index === checkProgressRender(progress) ||
                  index > checkProgressRender(progress)) &&
                  "ring-gray-200 bg-gray-200 border-gray-200 shadow-[inset_1px_0_1px_rgb(0,0,0,0.2),_inset_-1px_0_1px_rgb(255,255,255,0.6)]",
              )}
            />
          ))}
        </div>
        <div className="flex items-center justify-between w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} className="text-xs text-gray-400">
              {index * 20}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TrackItem, type TrackItemProps };
