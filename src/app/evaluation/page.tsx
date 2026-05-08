import type { Metadata } from "next";

import { LabPageContent } from "@/components/content/LabPageContent";
import { getLabPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "AI Workflow Evaluation Framework",
  description:
    "Metrics, scoring rubric, benchmark tasks, monthly review cycle, and pass thresholds for AI workflow quality.",
};

export default function EvaluationPage() {
  return <LabPageContent page={getLabPage("evaluation")!} />;
}
