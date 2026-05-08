export interface PromptDefinition {
  slug: string;
  title: string;
  category: string;
  purpose: string;
  whenToUse: string;
  requiredInput: string[];
  prompt: string;
  expectedOutput: string;
  humanReview: string;
  failureModes: string[];
}

export const promptDefinitions: PromptDefinition[] = [
  {
    slug: "coding",
    title: "Small Feature Implementation",
    category: "Coding",
    purpose:
      "Generate a narrow implementation plan and patch for one feature slice.",
    whenToUse:
      "Use for small UI, utility, or testable behavior with clear requirements.",
    requiredInput: [
      "Requirement",
      "Affected files",
      "Constraints",
      "Acceptance criteria",
      "Test expectations",
    ],
    prompt:
      "Implement only this feature: [FEATURE]. Use these boundaries: [FILES]. Identify assumptions and risks before coding. After coding, summarize changed files, tests needed, and human review points. Do not introduce dependencies unless explicitly justified.",
    expectedOutput:
      "Small patch, assumptions, risk notes, and verification guidance.",
    humanReview: "Required before merge.",
    failureModes: [
      "Scope creep",
      "Hallucinated APIs",
      "Hidden behavior changes",
      "Weak tests",
    ],
  },
  {
    slug: "refactoring",
    title: "Behavior-Preserving Refactor",
    category: "Refactoring",
    purpose: "Improve structure without changing observable behavior.",
    whenToUse:
      "Use when extracting components, reducing duplication, or improving names.",
    requiredInput: [
      "Current behavior",
      "Target files",
      "Protected behaviors",
      "Test commands",
    ],
    prompt:
      "Refactor [FILES] without changing observable behavior. Preserve public APIs, accessibility behavior, tests, and route behavior. Flag anything that might alter behavior instead of changing it silently.",
    expectedOutput: "Behavior-preserving patch and verification notes.",
    humanReview: "Required, with special attention to hidden behavior changes.",
    failureModes: [
      "Accidental API changes",
      "Deleted edge cases",
      "Over-abstraction",
    ],
  },
  {
    slug: "pr-review",
    title: "Senior PR Review Support",
    category: "PR Review",
    purpose: "Assist a human reviewer in finding material PR risks.",
    whenToUse: "Use before or during human PR review.",
    requiredInput: [
      "PR summary",
      "Diff",
      "Acceptance criteria",
      "Architecture context",
    ],
    prompt:
      "Review this PR as support for a human reviewer. Prioritize bugs, regressions, security issues, accessibility issues, test gaps, and maintainability risks. Do not approve the PR. Return findings ordered by severity with file references.",
    expectedOutput: "Risk-focused findings and open questions.",
    humanReview: "AI review is advisory only.",
    failureModes: [
      "False positives",
      "Missed domain context",
      "Noisy style comments",
    ],
  },
  {
    slug: "security-review",
    title: "Security Risk Scan",
    category: "Security Review",
    purpose:
      "Identify security risks in code, prompts, agent workflows, or permissions.",
    whenToUse:
      "Use for auth, data handling, dependencies, agents, or external integrations.",
    requiredInput: [
      "Diff",
      "Data classes",
      "Permission model",
      "Trust boundaries",
    ],
    prompt:
      "Perform a security risk scan. Focus on data exposure, secrets handling, injection risk, auth boundaries, dependency risk, unsafe defaults, and excessive permissions. Do not claim the code is secure.",
    expectedOutput:
      "Threats, mitigations, exploit scenarios, and unresolved questions.",
    humanReview: "Security owner review required for high-risk changes.",
    failureModes: [
      "Missing business-specific threats",
      "Speculative findings",
      "False confidence",
    ],
  },
  {
    slug: "accessibility-review",
    title: "Accessibility Triage Support",
    category: "Accessibility Review",
    purpose: "Support human accessibility review for UI changes.",
    whenToUse:
      "Use for new components, changed flows, forms, navigation, and dashboards.",
    requiredInput: [
      "UI requirements",
      "Relevant code",
      "Expected user flow",
      "Known constraints",
    ],
    prompt:
      "Review this UI change for accessibility support. Check semantics, heading structure, labels, keyboard access, focus management, contrast risks, reduced-motion considerations, and screen reader concerns. Do not claim WCAG compliance.",
    expectedOutput:
      "Likely issues, manual tests, false-positive risks, and required human verification.",
    humanReview: "Mandatory for compliance-sensitive claims.",
    failureModes: [
      "False positives",
      "Missed assistive technology behavior",
      "Incomplete manual evidence",
    ],
  },
  {
    slug: "architecture-review",
    title: "Architecture Fit Review",
    category: "Architecture Review",
    purpose:
      "Evaluate whether a proposed change fits the existing architecture.",
    whenToUse:
      "Use for new modules, data flows, dependency boundaries, and cross-cutting changes.",
    requiredInput: [
      "Architecture context",
      "Proposed change",
      "Affected files",
      "Constraints",
    ],
    prompt:
      "Evaluate this proposal for architecture fit. Check separation of concerns, SOLID, DRY, KISS, dependency direction, testability, operational risk, and future maintenance. Return accepted parts, risks, alternatives, and human decision points.",
    expectedOutput: "Tradeoff analysis and human decision points.",
    humanReview: "Required before large or irreversible changes.",
    failureModes: [
      "Overengineering",
      "Ignoring delivery constraints",
      "Inventing missing architecture",
    ],
  },
  {
    slug: "token-optimized",
    title: "Concise Implementation Review",
    category: "Token Optimized",
    purpose: "Reduce token usage for low-risk review tasks.",
    whenToUse: "Use for small, low-risk changes with clear context.",
    requiredInput: ["Short diff", "Specific question", "Risk level"],
    prompt:
      'Brief review. Focus only on correctness bugs, type errors, accessibility regressions, and missing tests. Output findings only. If none, say "No findings."',
    expectedOutput: "Minimal findings.",
    humanReview: "Still required.",
    failureModes: [
      "Lost nuance",
      "Missed edge cases",
      "Unsafe for high-risk work",
    ],
  },
];

export function getPromptDefinition(slug: string) {
  return promptDefinitions.find((prompt) => prompt.slug === slug);
}
