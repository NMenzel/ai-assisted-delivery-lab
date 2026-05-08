# Secrets Handling Rules

- Never paste secrets, credentials, private keys, tokens, or session cookies into AI tools.
- Rotate any secret that may have been exposed.
- Use placeholders in examples.
- Keep `.env.local` and production secrets out of prompts and commits.
- Do not ask AI to infer or reconstruct secrets.
- Review logs and generated docs for accidental secret inclusion.
