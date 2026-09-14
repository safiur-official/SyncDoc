# SyncDoc Project State

## Project

SyncDoc — Collaborative Document Engine with AST Conflict Resolution

## Development Strategy

Build a production-quality full-stack collaborative document application
quickly using vertical feature slices.

## Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Monaco Editor
- Zustand
- TanStack Query
- React Router
- Lucide

### Backend

- Node.js
- Express
- TypeScript
- Socket.IO

### Platform

- Supabase
- PostgreSQL
- Supabase Auth
- Row Level Security

### AST

- unified
- remark-parse
- remark-stringify
- Custom AST diff
- Custom conflict detection
- Custom merge resolution

### Testing

- Vitest
- Supertest
- Playwright

### Deployment

- Vercel
- Render

### Future

- Progressive Web App
- Offline document support
- Reconnection synchronization

## Core Features

1. Authentication
2. User profiles
3. Workspaces
4. Workspace members and roles
5. Document CRUD
6. Document search
7. Favorites
8. Trash
9. Premium editor
10. Typography/font controls
11. Markdown editing
12. Version history
13. Real-time collaboration
14. Presence
15. Cursor synchronization
16. AST parsing
17. AST diff
18. Conflict detection
19. Conflict resolution
20. Merge history
21. Command palette
22. Keyboard shortcuts
23. Responsive UI
24. PWA support

## Database

Supabase PostgreSQL.

No migration framework will be implemented for the initial project.
The database will be managed directly through Supabase SQL Editor and
documented in docs/DATABASE.md.

## Git Strategy

main = integration branch owned by safiur-official.

Team members work through forks/feature branches and submit pull requests.

Do not merge old discarded member implementations into main.

## Current Phase

Backend foundation with Supabase.

## Next Feature

Authentication and Supabase client integration.

## Commit Convention

feat:
fix:
refactor:
test:
docs:
style:
chore:
perf:

Every completed development step must end with an explicit commit message.