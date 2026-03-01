# IKI Property

A real estate investment platform connecting international buyers with Vietnamese properties through a broker network.

## Tech Stack

- **Backend**: Express.js + TypeScript + Prisma ORM + PostgreSQL
- **Frontend**: Next.js 16 + React 19 + Tailwind CSS

## Features

- 🏠 **Property Listings** — Browse and search Vietnamese real estate
- 👤 **User Authentication** — JWT-based auth with Buyer / Broker / Admin roles
- 💰 **Financial Tools** — Affordability calculator, ROI estimator, loan simulation
- 🤝 **Lead Management** — Track buyer-broker relationships and commissions
- 📊 **Broker Dashboard** — Manage leads, track earnings, monitor pipeline

## Project Structure

```
iki-property/
├── backend/           # Express API server
│   ├── prisma/        # Database schema & seeds
│   └── src/
│       ├── routes/    # API route handlers
│       └── services/  # Business logic
└── frontend/          # Next.js web app
    └── src/app/       # App router pages
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL

### Backend

```bash
cd backend
cp .env.example .env  # Configure database URL
npm install
npx prisma migrate dev
npx prisma db seed
npx ts-node src/index.ts
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## License

MIT
