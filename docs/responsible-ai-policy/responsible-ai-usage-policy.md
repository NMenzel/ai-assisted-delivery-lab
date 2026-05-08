# Responsible AI Usage Policy

## Allowed Use Cases

- Drafting implementation plans.
- Explaining unfamiliar code.
- Generating test ideas.
- Drafting documentation.
- Suggesting refactors.
- Supporting PR review.
- Supporting security and accessibility triage.

## Restricted Use Cases

- Security-sensitive code generation.
- Authentication or authorization changes.
- Dependency selection.
- Customer-impacting product decisions.
- Legal, compliance, medical, or employment decisions.
- Production incident response.

Restricted use requires explicit human review and documented assumptions.

## Prohibited Use Cases

- Sharing secrets, credentials, private keys, or tokens.
- Sharing confidential customer data without an approved data-processing setup.
- Using AI output as final legal, compliance, security, or accessibility certification.
- Allowing AI to approve production deployments without human approval.
- Granting broad destructive permissions to autonomous agents.

## Hard Data Rule

No confidential customer data, secrets, credentials, private keys, proprietary code, or sensitive business information may be shared with AI tools unless the tool, contract, and data-processing setup explicitly allow it.

## Confidential Data Handling

Use anonymized, minimized, and synthetic examples wherever possible. Remove identifiers, secrets, internal URLs, customer names, and business-sensitive details before prompting.

## Customer Data Handling

Customer data must not be pasted into AI tools unless approved by contract, data-processing agreement, access controls, retention policy, and security review.

## Source Code Privacy Rules

Private source code can only be shared with AI systems approved for that repository and data class. Generated output must be reviewed for license, security, and architectural risks.

## Legal And Compliance Escalation

Escalate any legal, regulatory, contractual, privacy, employment, or accessibility conformance claim to qualified human reviewers.

## Human Accountability

AI output is not an authority. Engineers remain accountable for what is merged, shipped, documented, and communicated.

## AI-Generated Code Review Rules

AI-generated code must be reviewed for correctness, maintainability, test coverage, security, accessibility, hallucinated APIs, overengineering, and hidden behavior changes.

## Incident Response

If sensitive data may have been exposed, stop the workflow, preserve evidence, notify the responsible owner, rotate affected credentials if needed, document the incident, and review tool configuration before resuming.
