# AI Workflow Incident Response

## Triggers

- Secret pasted into an AI tool.
- Customer data shared without approval.
- AI agent performed an unexpected write.
- Generated code introduced a security vulnerability.
- AI output included fabricated citations or unsafe claims.

## Response Steps

1. Stop the workflow.
2. Preserve relevant evidence.
3. Notify the responsible engineering owner.
4. Rotate exposed credentials if applicable.
5. Remove sensitive material from prompts, logs, examples, and docs where possible.
6. Review tool permissions and data-retention settings.
7. Document corrective actions.
8. Update policy, prompts, or agent permissions.

## Post-Incident Review

Record what happened, why existing controls failed, what changed, and how recurrence will be detected.
