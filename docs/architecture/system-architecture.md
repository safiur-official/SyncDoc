# SyncDoc System Architecture

## Overview

SyncDoc is a collaborative document engine designed to allow multiple
users to edit documents in real time while resolving structural
conflicts using Abstract Syntax Tree (AST) analysis.

## Core Technologies

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Monaco Editor
- Zustand
- TanStack Query

### Backend

- Node.js
- Express
- TypeScript
- Socket.IO
- MongoDB
- Mongoose
- JWT
- bcrypt

### AST Engine

- unified
- remark-parse
- remark-stringify
- Custom AST diff
- Custom conflict detection
- Custom merge resolution

## High-Level Flow

```mermaid
flowchart LR
    A[User A] --> B[React Client]
    C[User B] --> D[React Client]

    B --> E[Socket.IO]
    D --> E

    E --> F[SyncDoc Server]

    F --> G[Document Service]
    F --> H[Collaboration Service]

    G --> I[(MongoDB)]

    H --> J[AST Engine]
    J --> K[Conflict Analyzer]
    K --> L[Merge Result]

    L --> F
    F --> B
    F --> D