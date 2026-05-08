# AI Security Threat Model

## Threats

- Prompt injection
- Secrets leakage
- Customer data exposure
- Insecure tool/plugin design
- Excessive agent permissions
- Repository write access risk
- Dependency manipulation
- Generated vulnerable code
- Fake citations or unverifiable claims
- Destructive action approval

## Controls

- Minimize prompt data.
- Redact secrets and customer identifiers.
- Use least-privilege tool permissions.
- Require human approval for writes, commits, PRs, deployments, and destructive actions.
- Verify citations and framework APIs against primary sources.
- Review generated code with security checklists.
