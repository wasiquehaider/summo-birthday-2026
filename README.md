# Birthday site

Static Next.js site: countdown to midnight (Karachi time), then a reveal with confetti, a letter, a "git log" of your story, photos and a time capsule of letters that unlock on future birthdays.

## 1. Edit content
Open `content.ts` and change names, age, letter, commits, capsules, photos.
Put photos/audio in `public/media/` and list them in `content.ts`.

## 2. Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000?preview=1 to skip the countdown and see the reveal.
Without `?preview=1` you see the countdown until `unlockAt`.

## 3. Deploy (free)
```bash
npm run build      # creates the static site in ./out
```
- Vercel: `npx vercel` (or import the repo), or
- Cloudflare Pages / Netlify: build command `npm run build`, output directory `out`.

Then point a domain at it and renew it for as many years as you can.

## Notes
- The time-capsule lock is a client-side date check, so someone who changes their device clock could open a letter early. If a letter must stay truly secret, don't put its text in `content.ts` until its year (add it in a new commit each birthday).
- Each birthday: add a "commit" to `content.ts`, fill in that year's capsule, redeploy.
