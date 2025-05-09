# RSMT2D - Professional Next.js Project

A modern, professional Next.js application with TypeScript, Tailwind CSS, and best practices.

## Features

- ⚡️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🔒 TypeScript for type safety
- 📝 ESLint and Prettier for code quality
- 🧪 Jest and React Testing Library for testing
- 📦 Husky for git hooks
- 🔄 Conventional Commits
- 🎯 Path aliases
- 🌙 Dark mode support
- 📱 Responsive design
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/furidngrt/rsmt2d.git
cd rsmt2d
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── app/              # App router pages
├── components/       # React components
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
├── styles/          # Global styles
├── types/           # TypeScript types
├── services/        # API services
├── constants/       # Constants and configs
├── contexts/        # React contexts
└── __tests__/       # Test files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
