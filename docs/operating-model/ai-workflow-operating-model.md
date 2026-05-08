# AI Workflow Operating Model

## Workflow Overview

AI assistance is allowed in planning support, code drafting, refactoring proposals, documentation drafts, test ideation, PR review support, security review support, and accessibility triage support. AI output is treated as a reviewed contribution, not as an approved decision.

## Roles And Responsibilities

- Engineer: owns implementation quality, tests, and documented assumptions.
- Reviewer: validates architecture fit, hidden behavior changes, test evidence, and maintainability.
- Security reviewer: evaluates data exposure, generated vulnerable code, dependency risk, and tool permissions.
- Accessibility reviewer: validates keyboard behavior, semantics, contrast, manual findings, and WCAG interpretation.
- Product owner: approves customer impact, scope, and release readiness.

## Human-In-The-Loop Checkpoints

- Requirement approval before prompting.
- Context approval before AI-assisted implementation.
- Architecture review before large changes.
- Code review before merge.
- Security and privacy review for risky workflows.
- Accessibility review for user-facing UI.
- Release approval before production change.

## AI Usage Boundaries

AI can propose, draft, summarize, and accelerate. Humans remain accountable for architecture, security, compliance, customer impact, and production approval.

AI must not be used to bypass review, approve production releases, make legal conclusions, handle secrets, or decide customer-impacting tradeoffs without human approval.

## Governance Rhythm

- Review prompt library monthly.
- Retire stale context after major architecture changes.
- Review security incidents after any data exposure concern.
- Track hallucination and correction rates.
- Update examples when tooling or framework behavior changes.

## Escalation Rules

Escalate when AI output references unknown APIs, asks for broad permissions, suggests sharing sensitive data, changes authentication or authorization behavior, introduces dependencies, changes public contracts, or makes compliance claims.

## Metrics

- code quality score
- review quality score
- hallucination rate
- human correction rate
- rework rate
- security issue detection rate
- accessibility issue detection rate
- token efficiency
- developer time saved
