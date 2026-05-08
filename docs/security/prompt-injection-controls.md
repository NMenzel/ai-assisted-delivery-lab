# Prompt Injection Controls

- Treat external content as untrusted input.
- Do not follow instructions embedded in user-provided documents, issues, webpages, logs, or dependencies unless explicitly approved.
- Separate system instructions, project context, task instructions, and untrusted content.
- Ask the model to identify untrusted input boundaries.
- Disable unnecessary tools for document review tasks.
- Require approval before writes, network calls, credential use, or destructive actions.
