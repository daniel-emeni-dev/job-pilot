# Memory - Initial JobPilot Scaffold

Last updated: 2026-06-19 16:10 UTC

## What was built

The repository has an initial Next.js 16/Tailwind v4 scaffold with `app/page.tsx`, `app/layout.tsx`, and `app/globals.css`.

`app/page.tsx` currently contains a homepage-style UI with navbar, hero, dashboard preview image, feature sections, testimonial, final CTA, and footer. `app/layout.tsx` imports Inter via `next/font/google` and applies the `--font-sans` variable. `app/globals.css` defines the JobPilot `@theme` tokens and two custom utility backgrounds: `jp-soft-wash` and `jp-stripe-separator`.

This memory save session did not implement new product code.

## Decisions made

Project context files are physically located at `context/context/*`, even though `AGENTS.md` lists them as `context/*`.

The app is still following the documented Next.js 16 App Router direction, Tailwind v4 `@theme` token approach, top navbar layout, and strict no-hardcoded-component-colors rule from the context files.

## Problems solved

The required context read order initially failed at `context/project-overview.md` because the actual files are nested under `context/context/`. Future sessions should read the nested paths unless the directory is moved.

## Current state

`progress-tracker.md` shows no completed features yet; Feature 01 Homepage is not checked off.

`ui-registry.md` is still empty, so the existing homepage UI patterns have not been registered through `/imprint`.

There is no auth, dashboard, profile, find-jobs page, API route, backend client, database wiring, PostHog setup, or agent logic in the current `app/` tree.

The working tree is largely untracked initial project content. `README.md` is modified, and many project files/directories are untracked.

## Next session starts with

Run `/remember restore`, then decide whether to finish and verify Feature 01 Homepage or reconcile the existing homepage against `build-plan.md`, `ui-rules.md`, and `ui-registry.md`.

If treating the current homepage as Feature 01 work, verify it in the browser, fix any Next.js image path issues, then update `context/context/progress-tracker.md` and `context/context/ui-registry.md`.

## Open questions

Should Feature 01 Homepage be considered complete after visual verification, or does it need changes first to match the build plan exactly?

Should the context directory be moved from `context/context/` to `context/`, or should `AGENTS.md` be updated to reflect the actual nested path?
