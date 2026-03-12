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

The team page was designed to feel like a modern company website.
The UI focuses on clean layout, responsive design, and interactive team cards.

The backend API was built with FastAPI to provide simple REST endpoints for managing team members.
