# AutoRent - Car Rental React App

A modern, responsive frontend application for a car rental platform built with React, Vite, and Tailwind CSS. This project demonstrates professional UI/UX design with a fully functional customer-facing interface.

> **⚠️ Note:** This is a **frontend-only** application. Backend API integration is not included in this version.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Future Enhancements](#future-enhancements)

## Features

✅ **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Fully responsive navigation (desktop & mobile menu)
- Optimized for all screen sizes

✅ **Key Pages & Sections**
- **Home Page** — Hero section with car search form, featured vehicles, video testimonials, features showcase, and footer
- **Login Page** — Professional email/password login with "Remember me" checkbox, forgot password link, and social login placeholders
- **Registration Page** — User signup form (ready for expansion)
- **Navigation** — Sticky header with responsive mobile hamburger menu

✅ **Modern UI Components**
- Search form with location dropdown, pickup date picker, and duration selector
- Featured cars carousel/grid display
- Video section for testimonials
- Features/benefits section
- Icon-based design using Lucide React

✅ **Developer Experience**
- Built with Vite for fast development and optimized production builds
- Tailwind CSS for utility-first styling
- React Router for seamless page navigation
- Clean, maintainable component structure

## Tech Stack

| Tool | Purpose |
|------|---------|
| **React 19.2** | UI library |
| **Vite 7.2** | Build tool & dev server |
| **React Router 7.6** | Client-side routing |
| **Tailwind CSS 4.1** | Utility-first CSS framework |
| **@tailwindcss/vite 4.1** | Tailwind Vite plugin |
| **Lucide React 0.525** | Icon library |
| **ESLint 9.39** | Code quality |

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/fastodigama/car-rental-app.git
   cd car-rental-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## Getting Started

### Development Mode
```bash
npm run dev
```
Starts the Vite dev server with hot module replacement (HMR).

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality and style.

## Project Structure

```
car-rental-react-app/
├── src/
│   ├── componants/          # Reusable components
│   │   ├── Hero.jsx         # Hero section with search form
│   │   ├── Nav.jsx          # Navigation bar (responsive)
│   │   ├── Layout.jsx       # Main layout wrapper
│   │   ├── Home.jsx         # Home page composition
│   │   ├── FeaturedCars.jsx # Featured vehicles display
│   │   ├── VideoSection.jsx # Video testimonials
│   │   ├── Features.jsx     # Features/benefits section
│   │   └── Footer.jsx       # Footer component
│   ├── pages/               # Page components
│   │   ├── Login.jsx        # Login page
│   │   └── Register.jsx     # Registration page
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # React entry point
│   ├── App.css              # Global styles
│   └── index.css            # Tailwind directives
├── public/                  # Static assets
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies & scripts
└── README.md                # This file
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (with HMR) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all files |

## Customization

### Update App Branding
- **Logo & Name:** Edit `src/componants/Nav.jsx` and `src/pages/Login.jsx` (replace `AutoRent`)
- **Colors:** Modify Tailwind classes or update `tailwind.config.js` theme colors
- **Icons:** Replace Lucide icons with your preferred icon library

### Add New Pages
1. Create a new file in `src/pages/` (e.g., `src/pages/About.jsx`)
2. Add a route in `src/App.jsx`:
   ```jsx
   <Route path="/about" element={<About />} />
   ```
3. Update the navigation menu in `src/componants/Nav.jsx`

### Connect to Backend
To integrate with a backend API:
1. Install axios: `npm install axios`
2. Create API service files in `src/services/`
3. Update component logic to fetch data and handle authentication
4. Implement form submission handling in Login/Register pages

## Future Enhancements

- [ ] Backend API integration (authentication, user profiles, bookings)
- [ ] Redux or Context API for state management
- [ ] Advanced date/time picker library (React DatePicker)
- [ ] Payment gateway integration (Stripe, PayPal)
- [ ] User dashboard for bookings and profile management
- [ ] Admin panel for vehicle and booking management
- [ ] Email verification and password reset functionality
- [ ] Map integration for location selection
- [ ] Real-time availability checking
- [ ] Review and rating system

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Author

Developed as a learning project for full-stack web development.

---

**Questions or Contributions?** Feel free to open an issue or submit a pull request!
