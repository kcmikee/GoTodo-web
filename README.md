# 🎯 GoTodo Web

A modern, responsive web frontend for the GoTodo task manager API. Built with Next.js 16 and React 19.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss)

## Features

- ✅ Create, complete, and delete tasks
- 📊 Real-time stats with progress tracking
- 🎨 Beautiful dark theme UI
- 🔍 Filter by status (All / Pending / Completed)
- ⚡ Optimistic updates with React Query
- 📱 Fully responsive design

## Tech Stack

| Category         | Technology                   |
| ---------------- | ---------------------------- |
| Framework        | Next.js 16 (App Router)      |
| UI               | React 19, Tailwind CSS 4     |
| Data Fetching    | TanStack Query (React Query) |
| HTTP Client      | Axios                        |
| State Management | Zustand                      |
| Icons            | Lucide React                 |
| Language         | TypeScript                   |

## Prerequisites

- Node.js 18+ or Bun
- GoTodo API running (see [API README](../api/README.md))

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
bun install
```

### 2. Configure environment

Create a `.env.local` file in this directory:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

### 3. Start the development server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
web/
├── app/
│   ├── globals.css      # Global styles & Tailwind config
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Main todo page
│   └── providers.tsx    # React Query provider (client)
├── components/
│   ├── CreateTodoForm.tsx
│   ├── FilterTabs.tsx
│   ├── Stats.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── lib/
│   ├── api.ts           # Axios instance & API service
│   ├── hooks.ts         # React Query hooks
│   ├── store.ts         # Zustand store
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Environment Variables

| Variable                   | Description    | Default                 |
| -------------------------- | -------------- | ----------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | GoTodo API URL | `http://localhost:8080` |

## Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Set the **Root Directory** to `todo/web`
4. Add environment variable:
   - `NEXT_PUBLIC_API_BASE_URL` = Your deployed API URL

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Start the server:

```bash
npm run start
```

## API Integration

The frontend connects to these API endpoints:

| Method | Endpoint                   | Description         |
| ------ | -------------------------- | ------------------- |
| GET    | `/api/todos`               | Get all todos       |
| GET    | `/api/todos/pending`       | Get pending todos   |
| GET    | `/api/todos/completed`     | Get completed todos |
| POST   | `/api/todos`               | Create a todo       |
| PATCH  | `/api/todos/{id}/complete` | Mark as complete    |
| DELETE | `/api/todos/{id}`          | Delete a todo       |

## License

MIT
