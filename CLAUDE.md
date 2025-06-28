# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start the development server with hot module replacement
- `pnpm build` - Build for production (runs TypeScript compilation first, then Vite build)
- `pnpm lint` - Run ESLint on all files
- `pnpm preview` - Preview the production build locally

## Project Architecture

This is a React 19 + TypeScript + Vite application with Tailwind CSS for styling. Key architectural details:

### Tech Stack
- **Build Tool**: Vite with SWC for fast compilation and hot reload
- **Frontend**: React 19 with TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v4 (using the new Vite plugin)
- **Package Manager**: pnpm with workspace configuration
- **Linting**: ESLint with TypeScript, React hooks, and React refresh plugins

### Project Structure
- `src/main.tsx` - Application entry point with React.StrictMode
- `src/App.tsx` - Main application component
- `src/index.css` - Global styles
- `index.html` - HTML template with Vite dev server integration

### Configuration Files
- `vite.config.ts` - Vite configuration with React SWC and Tailwind plugins
- `eslint.config.js` - ESLint configuration using the new flat config format
- `tsconfig.json` - Composite TypeScript configuration referencing app and node configs
- `pnpm-workspace.yaml` - PNPM workspace setup ignoring Tailwind's native dependency

### Development Notes
- Uses the newer Tailwind CSS v4 with native CSS support via `@tailwindcss/vite`
- ESLint uses the new flat configuration format with TypeScript integration
- TypeScript configuration is split into separate configs for app and Node.js environments
- Hot module replacement is configured for optimal development experience