# Stale Context Review Process

## Review Triggers

- Major architecture change.
- Framework upgrade.
- Dependency replacement.
- Security incident.
- Repeated AI hallucination caused by old context.
- New accessibility or design-system rules.

## Process

1. Identify stale or misleading instructions.
2. Remove obsolete examples.
3. Compress repeated rules.
4. Add only decision-relevant context.
5. Re-run a representative prompt and compare output quality.

## Anti-Patterns

- Keeping every historical decision in active context.
- Mixing global rules with task-specific notes.
- Including low-value examples that crowd out constraints.
