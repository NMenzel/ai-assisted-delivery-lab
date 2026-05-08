import type { Metadata } from "next";

import { LabPageContent } from "@/components/content/LabPageContent";
import { getLabPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "Context Engineering Framework",
  description:
    "Project, architecture, PR, issue, design-system, coding standard, and stale-context templates for AI-assisted delivery.",
};

export default function ContextEngineeringPage() {
  return <LabPageContent page={getLabPage("context-engineering")!} />;
}
