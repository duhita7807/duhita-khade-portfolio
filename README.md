# Duhita Khade — Personal Portfolio

A professional MERN-stack portfolio for Duhita Khade, a Computer Science Engineering student.

## Tech stack

- **Frontend:** React, Vite, Tailwind CSS, React Router, Framer Motion, Lucide React
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **API:** `POST /api/contact`

## Project structure

```text
.
├── client/     React + Vite frontend
├── server/     Express API
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js 18 or later
- npm
- MongoDB running locally, or a MongoDB Atlas connection string

## Setup

From the project root:

```bash
npm install
npm run install:all
```

Create environment files if they are missing.

`server/.env`

```env
MONGO_URI=mongodb://127.0.0.1:27017/duhita_portfolio
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
CONTACT_RECEIVER=duhitakhade@gmail.com
```

`EMAIL_USER` / `EMAIL_PASSWORD` are the Gmail account that sends the notification. `CONTACT_RECEIVER` is where it lands (can be the same address). If you use Gmail with 2-Step Verification on, `EMAIL_PASSWORD` must be a 16-character [App Password](https://myaccount.google.com/apppasswords), not your normal login password — Gmail rejects the real password for SMTP.

If these three variables aren't set, the contact form still works and saves to MongoDB, but no email notification is sent (a warning is logged instead of crashing the server).

`client/.env`

```env
VITE_API_URL=http://localhost:5000
```

## Run locally

Start MongoDB, then run both apps from the project root:

```bash
npm run dev
```

Or start them separately:

```bash
npm run dev:server
npm run dev:client
```

- Frontend: http://localhost:5173
- Backend health check: http://localhost:5000/api/health

## Contact API

`POST http://localhost:5000/api/contact`

JSON body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "subject": "Hello",
  "message": "I would like to connect."
}
```

Messages are stored in MongoDB in the `contacts` collection, and an email notification is sent to `CONTACT_RECEIVER` if email is configured (see above). The request succeeds if either the database save or the email send works — it only fails if both fail.

### Testing the contact form end to end

1. Fill in `server/.env` with real `MONGO_URI` and `EMAIL_*` values, then run `npm run dev` from the project root.
2. Open http://localhost:5173, scroll to Contact, and submit the form with a real-looking name, email, subject, and message.
3. You should see a "Sending..." state, then a success message, and the form fields should clear.
4. Check the inbox at `CONTACT_RECEIVER` for the notification email (subject prefixed with `[Portfolio]`).
5. Optionally check MongoDB (e.g. via `mongosh` or MongoDB Compass) for a new document in the `contacts` collection.
6. To test failure handling, stop the backend and submit again — you should see a clear error message instead of the page breaking.

## Production build

```bash
npm run build
```

The frontend build output is in `client/dist`.

## Deployment

**Frontend (Vercel or Netlify)**

1. Import the `client` folder as the project root.
2. Build command: `npm run build` — output directory: `dist`.
3. Set the environment variable `VITE_API_URL` to your deployed backend URL (e.g. `https://portfolio-api.onrender.com`).
4. `client/vercel.json` already rewrites all routes to `index.html` so client-side routing works.

**Backend (Render, Railway, or any Node host)**

1. Deploy the `server` folder. `render.yaml` (repo root) is included as a starting point for Render.
2. Set environment variables: `MONGO_URI` (a MongoDB Atlas connection string works well for production), `PORT`, and `CLIENT_ORIGIN` (your deployed frontend URL, so CORS allows it).
3. Start command: `npm start`.

After both are live, update `VITE_API_URL` on the frontend to point at the real backend URL and redeploy.

## Notes

- Project GitHub and live demo links in `client/src/data/content.js` are placeholders (`github: ""`, `live: ""`). Fill these in with real URLs before publishing, or the "Code" / "Live" buttons on the Projects section will have nothing to link to.
- `robots.txt`, `sitemap.xml`, and the canonical URL in `index.html` reference `https://your-portfolio-domain.com` — replace this with your real domain once you have one.
- Never commit real MongoDB credentials. Keep them in `server/.env`, which is gitignored — only `.env.example` files are tracked.
