export interface ContentSection {
  title: string;
  body?: string;
  items?: string[];
}

export interface LabPage {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  sections: ContentSection[];
  cta?: {
    label: string;
    href: string;
  };
}

export const labPages: LabPage[] = [
  {
    slug: "operating-model",
    eyebrow: "Operating model",
    title: "AI workflow operating model",
    description:
      "A practical delivery model that defines where AI can assist, where humans decide, who is accountable, and what gets measured.",
    sections: [
      {
        title: "Workflow overview",
        body: "AI is allowed to support planning, drafting, summarization, review support, test ideation, and documentation. AI is not a release authority.",
      },
      {
        title: "Roles and responsibilities",
        items: [
          "Engineers own implementation quality and test evidence.",
          "Reviewers validate architecture fit, maintainability, and hidden behavior changes.",
          "Security reviewers evaluate data exposure, generated vulnerabilities, and permission boundaries.",
          "Accessibility reviewers validate manual evidence and final interpretation.",
        ],
      },
      {
        title: "Human-in-the-loop checkpoints",
        items: [
          "Requirement approval",
          "Context approval",
          "Architecture review",
          "Implementation review",
          "Security and privacy review",
          "Accessibility review",
          "Release approval",
        ],
      },
      {
        title: "Governance rhythm",
        body: "Prompt quality, stale context, incident learnings, hallucination rate, and correction rate should be reviewed on a recurring cadence.",
      },
    ],
    cta: { label: "Review the PR checklist", href: "/ai-pr-review" },
  },
  {
    slug: "responsible-ai-policy",
    eyebrow: "Policy",
    title: "Responsible AI usage policy",
    description:
      "A production-style policy for allowed use cases, restricted work, data handling, escalation, and incident response.",
    sections: [
      {
        title: "Allowed use cases",
        items: [
          "Planning support",
          "Code drafting with review",
          "Documentation drafts",
          "Test ideation",
          "PR review support",
          "Security and accessibility triage support",
        ],
      },
      {
        title: "Hard data rule",
        body: "No confidential customer data, secrets, credentials, private keys, proprietary code, or sensitive business information may be shared with AI tools unless the tool, contract, and data-processing setup explicitly allow it.",
      },
      {
        title: "Restricted use cases",
        items: [
          "Security-sensitive code generation",
          "Authentication or authorization changes",
          "Dependency selection",
          "Production incident response",
          "Legal, compliance, or accessibility conformance claims",
        ],
      },
      {
        title: "Incident response",
        body: "Stop the workflow, preserve evidence, notify the owner, rotate affected credentials if needed, review tool configuration, and document corrective action.",
      },
    ],
    cta: { label: "Inspect security guardrails", href: "/security" },
  },
  {
    slug: "ai-pr-review",
    eyebrow: "Review discipline",
    title: "AI-generated code review guidelines",
    description:
      "A senior-level checklist for reviewing AI-assisted changes without lowering the engineering bar.",
    sections: [
      {
        title: "Core review areas",
        items: [
          "Architecture fit, SOLID, DRY, KISS, and separation of concerns",
          "Type safety, error handling, observability, and maintainability",
          "Security, accessibility, performance, and dependency risk",
          "Test coverage, documentation, and hidden behavior changes",
          "Hallucinated API detection and overengineering detection",
        ],
      },
      {
        title: "Reviewer posture",
        body: "AI review is advisory only. Human reviewers must verify findings, reject noise, and approve only when evidence supports the change.",
      },
      {
        title: "Example comment tone",
        body: "Comments should be direct, professional, specific, and actionable. They should explain the risk and the expected correction.",
      },
    ],
    cta: { label: "View governed prompts", href: "/prompt-library" },
  },
  {
    slug: "context-engineering",
    eyebrow: "Context engineering",
    title: "Context engineering framework",
    description:
      "Templates and rules for keeping AI context short enough to stay usable and complete enough to prevent architectural drift.",
    sections: [
      {
        title: "Context layers",
        items: [
          "Global rules for non-negotiable behavior",
          "Project context for architecture and standards",
          "Task context for the immediate delivery unit",
          "Examples only when they improve output quality",
        ],
      },
      {
        title: "Templates",
        items: [
          "Project instructions",
          "Architecture context",
          "PR context",
          "Issue context",
          "Design-system rules",
          "Coding standards",
          "Stale context review",
        ],
      },
      {
        title: "Anti-patterns",
        items: [
          "Keeping obsolete decisions in active context",
          "Mixing task instructions with untrusted content",
          "Using long context to compensate for unclear requirements",
        ],
      },
    ],
    cta: { label: "Open token guidance", href: "/token-optimization" },
  },
  {
    slug: "security",
    eyebrow: "Security",
    title: "AI workflow security threat model",
    description:
      "A practical security model for prompt injection, secrets leakage, excessive permissions, generated vulnerabilities, and destructive action control.",
    sections: [
      {
        title: "Threats",
        items: [
          "Prompt injection",
          "Secrets leakage",
          "Customer data exposure",
          "Insecure tool/plugin design",
          "Excessive agent permissions",
          "Repository write access risk",
          "Dependency manipulation",
          "Generated vulnerable code",
          "Fake citations or unverifiable claims",
          "Destructive action approval",
        ],
      },
      {
        title: "Agent permission model",
        items: [
          "Level 0: Read-only suggestions",
          "Level 1: Local file edits with human review",
          "Level 2: Branch commits with human review",
          "Level 3: PR creation with human review",
          "Level 4: Deployment proposal only",
          "Level 5: Production/destructive actions prohibited unless explicitly approved",
        ],
      },
    ],
    cta: {
      label: "Read responsible AI policy",
      href: "/responsible-ai-policy",
    },
  },
  {
    slug: "token-optimization",
    eyebrow: "Token optimization",
    title: "Token optimization guide",
    description:
      "Practical guidance for reducing token cost without removing the context needed for safe engineering decisions.",
    sections: [
      {
        title: "Techniques",
        items: [
          "Short-output prompting",
          "Structured outputs",
          "Context hygiene",
          "Reusable rules",
          "Summarization checkpoints",
          "Minimal prompt templates",
          "Caveman-style concise prompting for low-risk work",
        ],
      },
      {
        title: "Risk warning",
        body: "Do not aggressively compress prompts for high-risk work such as security, legal, compliance, architecture decisions, destructive actions, medical topics, or production incident response.",
      },
      {
        title: "Tradeoff",
        body: "Compression improves cost and speed, but it can remove nuance, constraints, and review evidence. Use compression only when risk is low and human review remains in place.",
      },
    ],
    cta: {
      label: "View token-optimized prompts",
      href: "/prompt-library/token-optimized",
    },
  },
  {
    slug: "evaluation",
    eyebrow: "Evaluation",
    title: "AI workflow evaluation framework",
    description:
      "A scoring system for measuring whether AI-assisted workflows improve delivery quality without increasing review burden or risk.",
    sections: [
      {
        title: "Metrics",
        items: [
          "Code quality",
          "Review quality",
          "Bug detection",
          "Security issue detection",
          "Accessibility issue detection",
          "Documentation quality",
          "Token efficiency",
          "Developer time saved",
          "Hallucination rate",
          "Human correction rate",
          "Rework rate",
        ],
      },
      {
        title: "Scoring",
        body: "Score outputs from 1 to 5. Production workflows should average at least 4 in correctness, security, maintainability, and review usefulness before being considered mature.",
      },
      {
        title: "Monthly review cycle",
        body: "Run benchmark tasks, score outputs, record hallucinations and corrections, revise prompts, and update examples.",
      },
    ],
    cta: {
      label: "View example workflow",
      href: "/examples/accessible-component-delivery",
    },
  },
  {
    slug: "accessibility-workflow",
    eyebrow: "Accessibility",
    title: "AI-assisted accessibility audit workflow",
    description:
      "A human-reviewed accessibility workflow where AI supports triage, drafting, and remediation planning without replacing expertise.",
    sections: [
      {
        title: "Positioning",
        body: "AI supports accessibility audit workflows. It does not replace human accessibility expertise, manual testing, or final compliance judgment.",
      },
      {
        title: "Where AI can help",
        items: [
          "WCAG issue triage support",
          "Report drafting support",
          "Remediation guidance support",
          "Evidence organization",
          "Client-facing explanation drafts",
        ],
      },
      {
        title: "Human review is mandatory",
        items: [
          "Manual keyboard testing",
          "Assistive technology checks where relevant",
          "Severity assignment",
          "WCAG interpretation",
          "Final client deliverables",
        ],
      },
    ],
    cta: {
      label: "Read accessible delivery example",
      href: "/examples/accessible-component-delivery",
    },
  },
];

export function getLabPage(slug: string) {
  return labPages.find((page) => page.slug === slug);
}
