# Armatrix Team Page

A full-stack team management page built using Next.js and FastAPI.

## Live Demo

Frontend:
https://armatrix-team-page-y7wh.vercel.app/

Backend API Docs:
https://armatrix-backend-pq45.onrender.com/docs

---

## Tech Stack

Frontend

* React
* Next.js
* CSS

Backend

* Python
* FastAPI

Deployment

* Frontend deployed on Vercel
* Backend deployed on Render

---

## Features

* Displays team members on a responsive team page
* Add new team members
* Edit existing team members
* Delete team members
* Backend REST API for managing team data
* Responsive UI for desktop and mobile

---

## API Endpoints

GET /team
Fetch all team members

POST /team
Add a team member

PUT /team/{id}
Update a team member

DELETE /team/{id}
Delete a team member

---

## Running Locally

### Backend

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
npm install
npm run dev
```

---

## Design Notes

The team page was designed with a modern dark theme and vibrant neon accents to create a visually engaging experience. Animated team cards, glowing shadows, and smooth interactions give the page a dynamic feel while keeping the layout clean and responsive across devices.

Uses stylized robot avatars for team members to maintain a consistent and playful visual identity instead of real photos.


The backend was built using FastAPI to provide simple and efficient REST endpoints for fetching and managing team member data.
### Features

- Displays team members in animated profile cards
- Clicking a team card opens a popup with detailed member information
- Add, edit, and delete team members
- Uses stylized robot avatars for team members
- Responsive dark-themed UI with neon accents

