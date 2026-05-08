import type { Metadata } from "next";

import { LabPageContent } from "@/components/content/LabPageContent";
import { getLabPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "Token Optimization Guide",
  description:
    "Practical token optimization patterns, concise prompting, context hygiene, and compression risk controls.",
};

export default function TokenOptimizationPage() {
  return <LabPageContent page={getLabPage("token-optimization")!} />;
}
