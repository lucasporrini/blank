"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <Link href="/track-progress">
        <Button variant="outline">Track Progress</Button>
      </Link>
    </main>
  );
}
