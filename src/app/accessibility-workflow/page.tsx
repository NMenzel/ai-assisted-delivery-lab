import type { Metadata } from "next";

import { LabPageContent } from "@/components/content/LabPageContent";
import { getLabPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "AI-Assisted Accessibility Workflow",
  description:
    "Human-reviewed accessibility audit workflow with AI support for triage, report drafting, remediation guidance, and evidence collection.",
};

export default function AccessibilityWorkflowPage() {
  return <LabPageContent page={getLabPage("accessibility-workflow")!} />;
}
