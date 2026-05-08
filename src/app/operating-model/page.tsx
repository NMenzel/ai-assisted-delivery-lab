import type { Metadata } from "next";

import { LabPageContent } from "@/components/content/LabPageContent";
import { getLabPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "AI Workflow Operating Model",
  description:
    "Workflow boundaries, roles, checkpoints, governance rhythm, escalation rules, and metrics for responsible AI-assisted delivery.",
};

export default function OperatingModelPage() {
  return <LabPageContent page={getLabPage("operating-model")!} />;
}
