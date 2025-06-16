"use client";

import TrackProgressPage from "@/features/track-progress/track-progress-page";
import { useParams } from "next/navigation";

export default function ComponentPage() {
  const { component } = useParams();
  console.log(component);

  switch (component) {
    case "track-progress":
      return <TrackProgressPage />;
    default:
      return <div>Component not found</div>;
  }
}
