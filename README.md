# Retro Portfolio - Windows XP / Mac OS X Aqua Era Aesthetic

A software developer portfolio website built with React (Vite) and Tailwind CSS, featuring a nostalgic late 1990s–early 2000s web UI aesthetic.

## Features

- 🪟 Window-style sections mimicking classic OS windows
- 🎨 Skeuomorphic UI elements with soft gradients and glossy buttons
- 📊 Animated skill progress bars
- 🖼️ Project gallery with framed cards
- 📧 Contact form with retro styling
- ⏰ Status bar styled like an OS taskbar with live clock
- 📱 Responsive design (desktop-first)

## Tech Stack

- **Framework:** React 19 with Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Render

### Option 1: Static Site

1. Create a new **Static Site** on Render
2. Connect your GitHub repository
3. Configure build settings:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Click "Create Static Site"

### Option 2: Using render.yaml

Create a `render.yaml` file in your project root:

```yaml
services:
  - type: web
    name: retro-portfolio
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    headers:
      - path: /*
        name: Cache-Control
        value: public, max-age=31536000
```

Then:
1. Push to GitHub
2. Go to Render Dashboard → New → Blueprint
3. Connect your repository
4. Render will auto-detect the `render.yaml` and deploy

### Environment Variables

No environment variables required for basic deployment.

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   ├── Header.tsx
│   ├── StatusBar.tsx
│   ├── Window.tsx
│   ├── RetroButton.tsx
│   ├── ProjectCard.tsx
│   └── SkillBar.tsx
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

### Colors
Edit the CSS variables in `src/index.css` to customize the color palette:

```css
:root {
  --window-title-start: #0a246a;
  --window-title-end: #a6caf0;
  --button-face: #d4d0c8;
  /* ... */
}
```

### Content
Update the content in each section component:
- `HeroSection.tsx` - Name, title, bio
- `AboutSection.tsx` - Personal details, experience
- `ProjectsSection.tsx` - Project cards
- `SkillsSection.tsx` - Skills and tech stack
- `ContactSection.tsx` - Social links, email

## License

MIT License - feel free to use this for your own portfolio!
