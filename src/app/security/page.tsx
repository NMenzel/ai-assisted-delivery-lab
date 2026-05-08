import type { Metadata } from "next";

import { LabPageContent } from "@/components/content/LabPageContent";
import { getLabPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "AI Security Threat Model",
  description:
    "Prompt injection, secrets leakage, excessive agent permissions, repository write risk, and destructive action controls.",
};

export default function SecurityPage() {
  return <LabPageContent page={getLabPage("security")!} />;
}
