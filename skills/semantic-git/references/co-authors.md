# Co-authors and trailers

Some environments (including AI IDEs like Cursor) automatically add `Co-Authored-By` trailers to commit messages. This reference explains how to let `zagi` handle stripping those trailers without changing the commit flow in the `semantic-git` skill.

## Co-author stripping with zagi

When using `zagi` (directly or via a `git` → `zagi` alias), prefer configuring the environment so that `zagi` removes unwanted `Co-Authored-By` lines for you.

Configure your shell with:

```bash
export ZAGI_STRIP_COAUTHORS=1
```

This lets `zagi` strip automatically-added `Co-Authored-By:` trailers from commit messages, while the `semantic-git` skill continues to:

- Generate plain `git` commands
- Rely on any `git` → `zagi` integration in the shell
- Avoid mutating commit messages itself purely to manage co-authors
