# TillCloud POS Monorepo

This repository uses npm workspaces to manage the POS SaaS application.

## Folder Structure

- `frontend/` - React / Next.js (UI)
- `backend/` - Node.js API
- `database/` - PostgreSQL schema / Prisma migrations
- `shared/` - Common utilities

## Running the application

From the root directory, you can run scripts for specific workspaces, for example:

```bash
# Run backend dev server
npm run dev -w backend

# Run frontend dev server
npm run dev -w frontend
```
