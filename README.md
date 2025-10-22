# Modern Portfolio Website

A sleek, minimalistic portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS featuring an off-campus style layout with sliding panels.

## 🚀 Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Styled with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 🎯 Sliding panels with Headless UI (Off-campus style)
- 📱 Fully responsive design
- 🎯 Type-safe with TypeScript
- ✨ Minimalistic grayish design
- 🔥 Fast and optimized

## 🎪 Off-Campus Style Navigation

This portfolio features a unique navigation system where clicking on navigation items opens sliding panels from the right side instead of scrolling to sections. This creates an immersive, app-like experience:

- **About**: Opens a detailed about panel with experience, education, and interests
- **Projects**: Opens a project showcase panel with detailed information
- **Contact**: Opens a contact form panel with social links

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Personal Information

1. **Profile & Name**: Edit `src/components/Sidebar.tsx` and `src/components/Hero.tsx`
2. **Projects**: Modify the projects array in `src/components/Projects.tsx`
3. **Tech Stack**: Update technologies in `src/components/TechStack.tsx`
4. **Social Links**: Change URLs in `src/components/Sidebar.tsx` and `src/components/Contact.tsx`

### Update Images

- **Profile Picture**: Replace the Unsplash URL in `Sidebar.tsx`
- **Project Images**: Update image URLs in `Projects.tsx`

### Update Content

- **Hero Section**: Edit text in `src/components/Hero.tsx`
- **Contact Email**: Update in `src/components/Contact.tsx`

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── Hero.tsx          # Hero section
│   ├── Projects.tsx      # Projects showcase
│   ├── TechStack.tsx     # Tech stack display
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer component
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Build for Production

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js and Tailwind CSS
