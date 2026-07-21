# Leafy Project - Git Commit Rules & Best Practices

To maintain a clean, readable, and maintainable project history, please adhere to the following rules and best practices when committing code.

## 1. Commit Message Format
We follow the **Conventional Commits** specification. Commit messages should be structured as follows:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Allowed Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation-only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries (e.g., updating dependencies, adding `.gitignore`)

### Description Guidelines
- Use the imperative mood (e.g., "add", "fix", "change" instead of "added", "fixes", "changing").
- Limit the first line (subject line) to 50-72 characters.
- Do not end the subject line with a period.
- Focus on **why** the change was made in the body, rather than just **what** was changed.

---

## 2. Commit Best Practices

### Keep Commits Atomic
- A commit should be a single logical unit of work. Do not bundle unrelated changes (e.g., fixing a bug and refactoring an unrelated class) into a single commit.
- Smaller, focused commits make code reviews easier, regression tracking faster, and reverting changes safer.

### Never Commit Secrets
- **Crucial Rule:** Never commit secrets, API keys, private passwords, token keys, or local credentials.
- Ensure `.env` or other configuration files containing credentials are added to `.gitignore`.

### Ignore Generated Files
- Avoid committing IDE configuration folders (such as `.idea/` or `.vscode/`) or compiler output folders (such as `target/` or `build/`).
- Always check `git status` and configure your `.gitignore` to prevent committing noise.

### Run Tests and Linters Before Commits
- Ensure the project builds successfully and all tests pass before making a commit. Do not commit broken states to shared branches.

### Review Your Changes
- Always review your changes with `git diff` or `git diff --staged` before committing. Ensure there is no leftover debugging code or temporary comments (e.g., `console.log`, `TODO` tags that are not meant to remain, etc.).
