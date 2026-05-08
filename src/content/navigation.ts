export interface NavItem {
  title: string;
  href: string;
  description: string;
}

export const primaryNavigation: NavItem[] = [
  {
    title: "Operating Model",
    href: "/operating-model",
    description: "Workflow boundaries, roles, checkpoints, and metrics.",
  },
  {
    title: "Policy",
    href: "/responsible-ai-policy",
    description: "Responsible usage, data handling, and escalation rules.",
  },
  {
    title: "Prompt Library",
    href: "/prompt-library",
    description: "Governed prompts for delivery workflows.",
  },
  {
    title: "PR Review",
    href: "/ai-pr-review",
    description: "Senior review discipline for AI-generated code.",
  },
  {
    title: "Security",
    href: "/security",
    description: "Threat model and agent permission boundaries.",
  },
  {
    title: "Evaluation",
    href: "/evaluation",
    description: "Metrics and scoring for workflow quality.",
  },
];

export const secondaryNavigation: NavItem[] = [
  {
    title: "Context Engineering",
    href: "/context-engineering",
    description: "Reusable context templates and stale-context review.",
  },
  {
    title: "Token Optimization",
    href: "/token-optimization",
    description: "Compression patterns with risk controls.",
  },
  {
    title: "Accessibility Workflow",
    href: "/accessibility-workflow",
    description: "AI-assisted, human-reviewed accessibility workflow.",
  },
  {
    title: "Examples",
    href: "/examples",
    description: "Practical AI-assisted delivery examples.",
  },
];

export const allNavigation = [...primaryNavigation, ...secondaryNavigation];
