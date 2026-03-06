# Shreya Portfolio

A modern developer portfolio for **Shreya Reddy Alluri** built with **Next.js (App Router)** and **Tailwind CSS**.  
It showcases experience, projects, skills, education, blog posts (optional via dev.to), and includes a working contact form that sends messages to Telegram.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript (React)
- **Styling:** Tailwind CSS, SCSS
- **UI:** React Icons, React Toastify, Lottie
- **Contact:** Next.js API route + Telegram Bot
- **Build/Tooling:** ESLint, PostCSS, Autoprefixer

---

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Shreyareddyalluri/ShreyaPortfolio.git
cd ShreyaPortfolio
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

## Environment Variables

Create `.env.local` in the project root:

```env
# Used for constructing absolute URLs in some parts of the app
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Contact form (Telegram bot)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_number_here

# (Optional) Google Tag Manager
NEXT_PUBLIC_GTM=GTM-XXXXXXX
```

### Telegram setup (for the contact form)

1. In Telegram, talk to **@BotFather**:
   - `/newbot` → follow prompts → copy the **HTTP API token** → `TELEGRAM_BOT_TOKEN`.
2. Start a chat with your bot, send it any message.
3. In a browser:

   ```text
   https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
   ```

   Copy the `"chat": { "id": ... }` value → `TELEGRAM_CHAT_ID`.

Now every contact form submission will be sent to your Telegram chat.

---

## Customization

Most of the content lives in `utils/data`:

- `utils/data/personal-data.js` – name, title, description, links, resume URL, optional `devUsername` (for dev.to blog feed).
- `utils/data/experience.js` – work experience.
- `utils/data/projects-data.js` – projects shown in the Projects section.
- `utils/data/educations.js` – education entries.
- `utils/data/contactsData.js` – contact detail display.

Update these files with your own information, then restart the dev server if needed.

---

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # run production build
npm run lint     # lint the project
```

---

## Deployment

The app is a standard Next.js project and can be deployed easily to:

- **Vercel** (recommended) – import the repo, set the same env vars as in `.env.local`, and deploy.
- Any other Node/Next hosting (Netlify, render.com, etc.) with `npm run build` and `npm run start`.

