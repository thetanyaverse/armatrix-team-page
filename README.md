# Armatrix Team Page

A modern dark-themed team showcase built with **Next.js** and **FastAPI**, featuring animated team cards, glowing neon accents, and a simple REST API for managing team members.

---

## Live Demo

**Frontend:**
https://armatrix-team-page-y7wh.vercel.app/

**Backend API Docs:**
https://armatrix-backend-pq45.onrender.com/docs

---

## Tech Stack

**Frontend**

* React
* Next.js
* CSS

**Backend**

* Python
* FastAPI

**Deployment**

* Frontend deployed on Vercel
* Backend deployed on Render

---

## Features

* Displays team members in animated profile cards
* Clicking a team card opens a popup with detailed member information
* Add, edit, and delete team members
* Backend REST API for managing team data
* Responsive UI for desktop and mobile
* Dark-themed interface with vibrant neon accents and glowing card shadows
* Uses stylized robot avatars instead of real photos to keep the interface visually consistent

---

## API Endpoints

**GET /team**
Fetch all team members

**POST /team**
Add a team member

**PUT /team/{id}**
Update a team member

**DELETE /team/{id}**
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

The team page was designed with a **modern dark theme and vibrant neon accents** to create a visually engaging experience. Animated profile cards, glowing shadows, and smooth interactions give the interface a dynamic feel while keeping the layout clean and responsive across devices.

The backend was built using **FastAPI** to provide simple and efficient REST endpoints for fetching and managing team member data.
