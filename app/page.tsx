"use client";

import TrackProgress from "@/features/track-progress/track-progress";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <TrackProgress />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-10 items-center justify-center"
      >
        <div className="flex items-center gap-2">
          <Image
            src="https://pbs.twimg.com/profile_images/1893312104918401025/3S7nlXP6_400x400.jpg"
            alt="profile"
            width={20}
            height={20}
            className="rounded-full w-10 h-10"
          />
          <div className="flex flex-col items-start justify-center">
            <span className="text-sm font-medium">Farhan</span>
            <span className="text-xs text-gray-500">Designer</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="https://pbs.twimg.com/profile_images/1802634784469917696/URfPqL3O_400x400.jpg"
            alt="profile"
            width={20}
            height={20}
            className="rounded-full w-10 h-10"
          />
          <div className="flex flex-col items-start justify-center">
            <span className="text-sm font-medium">Lucas</span>
            <span className="text-xs text-gray-500">Developer</span>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
