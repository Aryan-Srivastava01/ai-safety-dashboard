# AI Safety Dashboard

This is a Frontend Intern assignment project built using React, TypeScript, and Vite. It includes ESLint configuration for clean, type-safe, and maintainable code.

## 🔗 Live Demo

[Click here to view the live project](https://ai-safety-dashboard.vercel.app/)

## 🚀 Tech Stack

- React
- TypeScript
- Vite
- ESLint
- Vercel (for deployment)

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Aryan-Srivastava01/ai-safety-dashboard.git
cd ai-safety-dashboard
```

### 2. Install Dependencies

Make sure you have Node.js installed. Then install the project dependencies:

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

This will start the app on `http://localhost:5173` (or the next available port).

---

## 🧹 Linting & Code Quality

This project uses ESLint with strict and type-aware rules for TypeScript and React.

### Run Linter

```bash
npm run lint
```

---

## 🛠️ Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```bash
.
├── public/             # Static assets
├── src/                # Main source code
│   ├── assets/         # Images and icons
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   └── main.tsx        # App entry point
├── index.html
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ✅ ESLint Configuration

For strict and type-aware linting, this project uses:

- `@typescript-eslint`
- `eslint-plugin-react-x`
- `eslint-plugin-react-dom`

### To expand ESLint configuration (optional):

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

---

## 📤 Deployment

The app is deployed using Vercel. To deploy your own version:

1. Push the project to a GitHub repository.
2. Connect the repo to [Vercel](https://vercel.com/import).
3. Set build command: `npm run build`
4. Set output directory: `dist`

---

## 📞 Contact

Aryan Srivastava  
📧 aryansrivastava.aps@gmail.com  
📱 +91 7800383043  
[GitHub](https://github.com/Aryan-Srivastava01)

---
