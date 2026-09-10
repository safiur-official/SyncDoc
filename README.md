# SyncDoc
Collaborative Document Engine with AST Conflict Resolution

## Aim of the Project
SyncDoc is a collaborative document editor that solves a core problem in multi-user editing: when two people edit the same document at once, plain text merging causes destructive overwrites and lost work. SyncDoc represents documents as an AST (Abstract Syntax Tree) — breaking content into structural blocks (paragraphs, headings, code blocks, tables) — and uses CRDT-based conflict resolution (via Yjs) so concurrent edits from multiple users merge safely without overwriting each other, with live visual indicators showing who's editing what.

## Problem Statement
Multi-user text editors frequently suffer from destructive overwrites and sync conflicts. Plain text merging is insufficient for complex structural documents, leading to lost work when multiple users edit the same document simultaneously.

## Key Modules
- AST Database (Express & Mongoose) — nested schemas for document structural nodes with pre-save hook validation
- Synchronization Engine (Node.js & Yjs) — WebSocket routing layer using CRDT architecture
- Custom Editor UI (React) — block-based text interface
- Transformation Pipeline (Node.js & DOMPurify) — compiles AST trees into PDF/HTML safely

## Week 1 Task: AST Modeling & Editor Foundations

Backend (AST Modeling):
- Design nested MongoDB schemas for document structural nodes (blocks)
- Write recursive Mongoose pre-save hooks to trace block parent-child relationships

Frontend (Editor Foundations):
- Build React UI for browsing documents
- Set up base components for block-level text rendering

Goal for Week 1: Establish the data foundation (schema) and UI shell (document browsing + block rendering) that later weeks build on — CRDT sync (Week 2), transformation/export (Week 3), and security hardening (Week 4) all depend on this being solid.

## Team & Task Assignments (Week 1)

| Task | Owner | Branch | Status |
|---|---|---|---|
| Schema Design | Dariha | dariha_dev | Done |
| Relationship Hooks | TBD | — | Open |
| Document Browsing UI | chirra praveen | — | In progress |
| Block Rendering | putta praveen | praveen/block-rendering | In progress |
| Integration/Contracts | TBD | — | Open |

## Project Structure

SyncDoc/
├── syncdoc-backend/
│   └── models/
│       ├── blockModel.js
│       └── documentModel.js
├── syncdoc-frontend/
└── README.md

## Getting Started
Pull the latest from dariha_dev before starting your task to avoid conflicts.

cd syncdoc-backend && npm install
cd ../syncdoc-frontend && npm install
