import type { Metadata } from "next";

import { LabPageContent } from "@/components/content/LabPageContent";
import { getLabPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "Responsible AI Usage Policy",
  description:
    "Allowed use cases, restricted work, prohibited data sharing, human accountability, and incident response for AI-assisted delivery.",
};

export default function ResponsibleAiPolicyPage() {
  return <LabPageContent page={getLabPage("responsible-ai-policy")!} />;
}
