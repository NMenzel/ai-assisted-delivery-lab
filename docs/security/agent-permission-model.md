# Agent Permission Model

Level 0: Read-only suggestions.

Level 1: Local file edits with human review.

Level 2: Branch commits with human review.

Level 3: PR creation with human review.

Level 4: Deployment proposal only.

Level 5: Production/destructive actions prohibited unless explicitly approved.

## Rule

Default to the lowest level that can complete the task. Increase permissions only with explicit scope, review requirements, and rollback expectations.
