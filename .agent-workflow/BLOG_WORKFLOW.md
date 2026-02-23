# Agent Workflow — Blog + Image Workflow (Aslam)

Purpose: Keep a repeatable process for writing/publishing blog posts in this repo without re-discovering steps each time.

## Scope
- Repo: `aslamabbas.github.io`
- Style: Aslam’s first-person, conversational, blunt, practical.
- Images: max 3 per article, lightweight assets for fast load.

## End-to-end workflow

### 1) Understand writing style
- Read 2–3 existing posts from `_posts/` before drafting.
- Prefer direct voice, specific experiences, practical takeaways.

### 2) Draft article
- Create post in `_posts/YYYY-MM-DD-title.markdown`
- Frontmatter minimum:
  - `layout: post`
  - `title`
  - `published: true`
  - `description`
  - `keywords`
  - `tags`
- Keep structure:
  - Hook
  - What worked / what failed
  - Real examples
  - Clear takeaway

### 3) Image prompt generation (max 3)
- Use concise prompts.
- Prefer **isometric 45° top-down** visual style.
- Brand style defaults:
  - deep navy/charcoal base
  - cyan glow accents
  - small electric-orange accents
  - minimal clutter
- Always specify:
  - composition
  - mood/style
  - color palette
  - constraints (no watermark/random text/distortion)
  - output ratio (usually 16:9)

### 4) Generate images with Gemini
- Use Gemini image model (`gemini-2.5-flash-image`) via API call.
- Save PNG originals in:
  - `assets/images/posts/<slug>/`
- Create compressed JPG versions for production.

### 5) Compression target
- Convert PNG → JPG using ffmpeg quality around `-q:v 8` (or tune lower/higher as needed).
- Aim small file size (typically ~40KB–120KB for blog inline/hero depending detail).
- Prioritize visual clarity + fast load.

### 6) Insert images into article
- Replace placeholders with final optimized files.
- Add meaningful alt text.
- Keep article image count <= 3.

### 7) Local preview
- Ensure local preview is running at `http://127.0.0.1:4000`
- Validate article path renders correctly.
- Check image load speed and layout.

### 8) SEO pass before publish
- Confirm:
  - unique title + description
  - canonical/meta present
  - internal links (at least 2 relevant links if possible)
  - image alt text

### 9) Commit plan
- Default: do not push without approval.
- When asked for anonymous/ghost-style commit intent, use local identity in repo:
  - `git config user.name "Ghost Contributor"`
  - `git config user.email "ghost@example.com"`
- Commit message format:
  - `feat(blog): publish <post-topic>`
  - `chore(images): add optimized assets for <post-topic>`

### 10) Publish handoff checklist
- [ ] Article reviewed by Aslam
- [ ] Images approved
- [ ] Local preview checked
- [ ] Commit created
- [ ] Push only on explicit "push" instruction

---

## Notes for future optimization
- Build reusable prompt snippets library by image type (hero, workflow, conclusion).
- Add one-command internal automation later if needed.
- Keep this doc updated as workflow evolves.
