import type { Metadata } from "next";

import { LabPageContent } from "@/components/content/LabPageContent";
import { getLabPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "AI PR Review Guidelines",
  description:
    "Senior-level code review checklist for AI-generated code, including architecture, security, accessibility, tests, and hallucinated API detection.",
};

export default function AiPrReviewPage() {
  return <LabPageContent page={getLabPage("ai-pr-review")!} />;
}
