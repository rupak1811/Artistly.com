﻿# Artistly.com
# Artistly Platform

Artistly Platform is a modern web application designed to showcase, discover, and connect with talented artists across various categories. Built with Next.js, React, and Tailwind CSS, the platform offers a seamless and visually appealing experience for both artists and users seeking creative talent.

## Features

- **Artist Discovery:** Browse and filter artists by category, view detailed profiles, and explore featured talent.
- **Dashboard:** Manage artist profiles, view analytics, and access platform insights.
- **Onboarding:** Simple onboarding process for new artists to join and set up their profiles.
- **Responsive Design:** Fully responsive UI for optimal experience on all devices.
- **Modern UI Components:** Built with reusable and accessible components using Tailwind CSS and custom UI elements.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript & JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Package Manager:** pnpm
- **State Management:** React Context & Hooks

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (install via `npm install -g pnpm`)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd artistly-platform
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   ```
3. **Run the development server:**
   ```sh
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```
artistly-platform/
├── app/                # Next.js app directory (pages, layouts, routes)
├── components/         # Reusable React components & UI elements
├── data/               # Static data files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, logos)
├── styles/             # Global styles
├── package.json        # Project metadata and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── ...
```

## Scripts

- `pnpm dev` — Start the development server
- `pnpm build` — Build the application for production
- `pnpm start` — Start the production server
- `pnpm lint` — Run linter

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

---

**Artistly Platform** — Empowering artists. Inspiring audiences.
