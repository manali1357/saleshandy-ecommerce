# Saleshandy-Cart 🛍️

A premium, production-grade modern E-Commerce Platform frontend built as an SDE-2 assignment. 
Designed with a minimal aesthetic inspired by Apple, Stripe, and Linear, focusing on high-quality UX, smooth motion, and scalable architecture.

## ✨ Features

- **Premium UI/UX:** Clean typography, elegant whitespace, soft shadows, and a modern SaaS aesthetic.
- **Smooth Animations:** Integrated Framer Motion for page transitions, hover effects, and micro-interactions.
- **Responsive Architecture:** Fully mobile-first design ensuring a flawless experience across all devices.
- **State Management:** Robust local state handling using Zustand for Cart and Wishlist (with `localStorage` persistence).
- **Mock Data Layer:** Simulated API layer using TanStack Query (React Query) for realistic loading states, caching, and data fetching.
- **Dark Mode Support:** Seamless theme switching with `next-themes`.
- **Component System:** Built on top of Shadcn/UI and Radix UI primitives for accessible and highly customizable components.
- **SEO Optimized:** Next.js App Router providing excellent base for SEO and performance.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [Shadcn/UI](https://ui.shadcn.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🏗️ Architecture & Decisions

### 1. Folder Structure
The application follows a feature-driven, scalable architecture:
- `src/app`: Next.js App Router pages and layouts.
- `src/components`: UI components separated into `ui` (atomic Shadcn components) and `shared` (reusable blocks like Navbar, ProductCard).
- `src/services`: The simulated API layer (`mockData.ts`) demonstrating how a real backend integration would be structured.
- `src/store`: Zustand stores for global state (`useCartStore`, `useWishlistStore`).
- `src/types`: Global TypeScript interfaces ensuring type safety.

### 2. State Management Strategy
- **Zustand** was chosen for Cart and Wishlist over Context API due to its simpler boilerplate, better performance (no provider hell), and built-in `persist` middleware for `localStorage`.
- **TanStack Query** was used for data fetching to demonstrate enterprise-level data synchronization, caching, and loading state management, even with mock data.

### 3. Animations & UX
- `Framer Motion` is used deliberately to enhance, not distract. Elements fade up on scroll, page transitions are smooth, and the cart drawer slides in naturally. 

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📈 Performance & Accessibility

- **Images:** Utilized `next/image` for automatic optimization, WebP conversion, and lazy loading.
- **Accessibility:** Built with Radix UI primitives ensuring keyboard navigation, screen reader support, and ARIA compliance.
- **Hydration:** Proper handling of `suppressHydrationWarning` for `next-themes` to prevent flash of unstyled content.

## 🔮 Future Improvements
If this were a full-stack real-world application, the next steps would be:
- Integration with Stripe for actual payments.
- Headless CMS or DB integration (e.g., Prisma + PostgreSQL) for real product data.
- User Authentication (NextAuth.js).
- Algolia integration for advanced search filtering.
