# PayDay Pro - Payday Loan Website

## Overview

PayDay Pro is a full-stack web application for a payday loan company. It features a modern, responsive landing page with contact functionality. The application is built with React/TypeScript for the frontend and Express.js for the backend, using PostgreSQL for data storage.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React 18 with TypeScript, styled with Tailwind CSS and shadcn/ui components
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build System**: Vite for frontend bundling and esbuild for backend compilation
- **UI Framework**: shadcn/ui components built on Radix UI primitives

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom color variables for brand consistency
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL-based sessions
- **Development**: Hot reloading with Vite middleware integration

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contacts Table**: Contact form submissions (id, firstName, lastName, email, phone, message, createdAt)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated with Zod schema
   - POST request sent to `/api/contact`
   - Server validates and stores in PostgreSQL
   - Success/error response returned to client

2. **Development Storage**:
   - In-memory storage fallback for development
   - Automatic switching to PostgreSQL when DATABASE_URL is provided

## External Dependencies

### Frontend Dependencies
- React 18 with TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- TanStack Query for data fetching
- React Hook Form with Zod validation
- Wouter for routing

### Backend Dependencies
- Express.js for API server
- Drizzle ORM with PostgreSQL support
- Neon Database serverless driver
- connect-pg-simple for session management

### Development Tools
- Vite for frontend development and building
- esbuild for backend compilation
- TypeScript for type safety
- Drizzle Kit for database migrations

## Deployment Strategy

### Build Process
1. **Development**: `npm run dev` starts both frontend and backend with hot reloading
2. **Production Build**: 
   - Frontend: Vite builds to `dist/public`
   - Backend: esbuild compiles to `dist/index.js`
3. **Database**: Drizzle migrations managed via `npm run db:push`

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific environment variable

### Production Deployment
- Frontend served as static files from `dist/public`
- Backend runs as Node.js server from `dist/index.js`
- Database migrations applied via Drizzle Kit

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 08, 2025. Initial setup