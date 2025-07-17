# Company Showcase Website

A professional, animated showcase website built with React TypeScript and Express.

## Features

- Immersive animations and interactions
- Smooth scrolling experience
- Responsive design for all devices
- Contact form with backend integration
- Interactive sections with reveal effects

## Tech Stack

### Frontend
- React with TypeScript
- TailwindCSS for styling
- Framer Motion for animations
- Lenis.js for smooth scrolling
- React Router for navigation

### Backend
- Node.js
- Express
- Cors for cross-origin support

## Project Structure

```
/
├── src/                  # Frontend source code
│   ├── components/       # UI components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI components
│   ├── contexts/         # React contexts
│   ├── pages/            # Page components
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── server/               # Backend code
│   └── index.js          # Express server
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Development Server

To start both frontend and backend:

```
npm run dev:all
```

Or run them separately:

- Frontend only:
  ```
  npm run dev
  ```

- Backend only:
  ```
  npm run server
  ```

## Building for Production

```
npm run build
```

This will create optimized production files in the `dist` directory.

## Customization

- Update colors in `tailwind.config.js`
- Modify animations in the Framer Motion components
- Change content in the section components
- Add additional routes in both frontend and backend as needed

## License

[MIT](LICENSE)