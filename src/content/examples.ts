export const accessibleComponentWorkflow = {
  title: "Accessible Button Component Delivery",
  eyebrow: "Example workflow",
  description:
    "A complete AI-assisted delivery flow that keeps requirements, implementation, review, accessibility evidence, testing, and sign-off under human control.",
  steps: [
    {
      title: "1. Human requirement",
      description:
        "Create a reusable button that supports keyboard operation, disabled state, visible focus, accessible names, and consistent visual variants.",
    },
    {
      title: "2. AI planning prompt",
      description:
        "Plan a small accessible button implementation. Include requirements, risks, files, tests, and human review checkpoints. Do not code yet.",
    },
    {
      title: "3. AI implementation prompt",
      description:
        "Implement the approved button plan using existing primitives. Preserve semantic button behavior and return changed files and review points.",
    },
    {
      title: "4. Human architecture review",
      description:
        "Confirm the component belongs in the UI primitive layer and does not introduce unnecessary dependencies or duplicate existing behavior.",
    },
    {
      title: "5. Code review checklist",
      description:
        "Review type safety, variants, hidden side effects, accessible interaction behavior, tests, and design-token usage.",
    },
    {
      title: "6. Accessibility checks",
      description:
        "Verify keyboard activation, visible focus, accessible name, disabled state, and reduced-motion impact where relevant.",
    },
    {
      title: "7. Test checklist",
      description:
        "Cover rendering, accessible name, disabled state, variant behavior, and composition behavior.",
    },
    {
      title: "8. Final PR summary",
      description:
        "Summarize what changed, test evidence, accessibility evidence, risks, and remaining human decision points.",
    },
    {
      title: "9. Human sign-off",
      description:
        "Human reviewer approves only after code, accessibility, security, and test evidence are verified.",
    },
  ],
};
