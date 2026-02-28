<div align="center">

# 🚀 JobSeekz — AI-Powered Job Board

### Built at the **T-JHON Engineering College 24-Hour Hackathon**

<img src="public/imgs/t-jhon.jpeg" alt="T-JHON Engineering College Hackathon" width="600" style="border-radius: 12px;" />

<br />

**Team:** &nbsp; 👨‍💻 **Kupendra** &nbsp;&bull;&nbsp; 👨‍💻 **Faizan**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![NextAuth](https://img.shields.io/badge/NextAuth-v5_Beta-purple?style=for-the-badge)](https://authjs.dev/)

</div>

---

## 🏆 About the Project

**JobSeekz** is a modern, full-stack job board platform built in **24 hours** during the T-JHON Engineering College Hackathon by **Kupendra** and **Faizan**. It connects job seekers with employers through a sleek, animated interface powered by cutting-edge web technologies.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Smart Job Search** | Search jobs by title, keyword, company, or location |
| 🏷️ **Advanced Filters** | Filter by job type, proximity, skills, and domain |
| 📝 **Job Posting** | Companies can create and publish job listings |
| 🔐 **Google OAuth** | Secure authentication via NextAuth v5 with Google |
| 🌙 **Dark/Light Mode** | Seamless theme switching with `next-themes` |
| 🎬 **GSAP Animations** | High-end scroll-triggered animations throughout |
| 📱 **Fully Responsive** | Optimized for mobile, tablet, and desktop |
| ⚡ **Server Actions** | Next.js 14 server actions for form submissions |

---

## 🛠️ Tech Stack

```
┌─────────────────────────────────────────────────────┐
│                   FRONTEND                          │
│  Next.js 14  •  React 18  •  TypeScript             │
│  Tailwind CSS  •  shadcn/ui  •  GSAP Animations     │
├─────────────────────────────────────────────────────┤
│                   BACKEND                           │
│  Next.js API Routes  •  Server Actions              │
│  NextAuth v5 (Google OAuth)                         │
├─────────────────────────────────────────────────────┤
│                   DATABASE                          │
│  MongoDB  •  Mongoose ODM                           │
└─────────────────────────────────────────────────────┘
```

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Homepage with hero, jobs, languages
│   ├── layout.tsx                # Root layout with theme provider
│   ├── globals.css               # Global styles & CSS variables
│   ├── (auth)/
│   │   ├── login/page.tsx        # Login page (Google OAuth)
│   │   └── signup/page.tsx       # Registration page
│   └── (main)/
│       ├── jobs/page.tsx         # Jobs listing
│       ├── job/[slug]/page.tsx   # Job detail page
│       ├── job/new/page.tsx      # Create new job
│       ├── profile/page.tsx      # User profile
│       └── company/page.tsx      # Company page
├── components/
│   ├── animations/               # GSAP animation components
│   │   ├── GSAPProvider.tsx      # ScrollTrigger registration
│   │   ├── FadeInView.tsx        # Scroll-triggered fade-in
│   │   ├── AnimatedText.tsx      # Text reveal animations
│   │   ├── AnimatedCounter.tsx   # Number counter animation
│   │   ├── StaggerGrid.tsx       # Staggered grid entrance
│   │   └── MagneticButton.tsx    # Magnetic hover effect
│   ├── layout/
│   │   ├── Navbar.tsx            # Responsive animated navbar
│   │   └── Footer.tsx            # Animated footer
│   ├── ui/                       # shadcn/ui components
│   └── client/                   # Client-side interactive components
├── data/                         # Mock data for static demo
├── models/                       # Mongoose models (Job, User)
├── actions/                      # Server actions
└── lib/                          # Utility functions
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**
- **MongoDB** instance (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/jobseekz-app.git
cd jobseekz-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
MONGO_URI=mongodb+srv://your-connection-string
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
AUTH_SECRET=your-auth-secret
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## 🎬 Animation Highlights

| Animation | Component | Description |
|---|---|---|
| 📝 Text Reveal | `AnimatedText` | Words fly in with 3D rotation |
| 👀 Scroll Fade | `FadeInView` | Elements fade in from any direction on scroll |
| 🔢 Counter | `AnimatedCounter` | Numbers count up when scrolled into view |
| 🧲 Magnetic | `MagneticButton` | Buttons follow cursor with elastic snap-back |
| 📦 Stagger | `StaggerGrid` | Grid items appear one-by-one with scale effect |

---

## 🤝 Team

<table>
  <tr>
    <td align="center"><strong>Kupendra</strong><br/>Full Stack Developer</td>
    <td align="center"><strong>Faizan</strong><br/>Full Stack Developer</td>
  </tr>
</table>

Built with ❤️ at **T-JHON Engineering College** — 24 Hour Hackathon

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
