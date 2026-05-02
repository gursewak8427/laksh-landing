# Laksh Landing Page

Mobile-first, Hinglish-first waitlist landing page for **Laksh** — AI-powered govt form filler for Indian exam aspirants (SSC, Railway, Police, Banking).

**Live:** https://laksh.prismaple.com  
**Repo:** https://github.com/gursewak8427/laksh-landing

## Local development

```bash
npm install
npm run dev
```

## Deploy to production (laksh.prismaple.com)

Server: Prismonic SSH · Caddy serves `/var/www/laksh/dist`

```bash
# SSH into the server, then:
cd /var/www/laksh
git pull
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 20
npm install --legacy-peer-deps
npm run build
```

Caddy picks up the new `dist/` immediately — no restart needed.

## Stack

- **Vite + React 19** — build tooling
- **Inline CSS-in-JS** — all styles are inline, no CSS framework
- **Fonts** — Plus Jakarta Sans (English) + Hind (Hinglish/Devanagari) via Google Fonts
- **Waitlist** — stored in `localStorage` under `laksh_waitlist` (replace with Supabase/Sheets for production)

## Folder structure

```
src/
  components/
    AutoFillDemo.jsx   animated form auto-fill demo
    BusUseCase.jsx     "bus mein ho" scenario section
    ExamsStrip.jsx     scrolling exam name ticker
    FeaturesSection.jsx
    FinalCTA.jsx
    Footer.jsx
    Hero.jsx
    Icons.jsx          all SVG icons
    ProblemSection.jsx
    StickyBottomBar.jsx
    TopNav.jsx
    WaitlistModal.jsx  signup modal (name + phone + exam)
  constants/
    copy.js            all page text (Hinglish)
  App.jsx
  main.jsx
  index.css            global styles + keyframe animations
public/
  assets/
    bus-scene.png      hero photo for bus use-case section
```
