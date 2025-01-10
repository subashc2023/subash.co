# Subash Chandra's Portfolio Website

Welcome to my personal portfolio website repository! This site showcases my professional experience, skills, and projects as a Data Domain Architect at J.P. Morgan Chase.

🌐 **Live Site**: [subash.co](https://subash.co)

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: Dark/Light mode support using [next-themes](https://github.com/pacocoursey/next-themes)
- **Email**: [Resend](https://resend.com/) for contact form functionality

## ✨ Features

- Responsive design that works on all devices
- Dark/Light theme support
- SEO optimized with meta tags and sitemap
- Fast page loads with Next.js optimizations
- Interactive project showcase
- Professional experience timeline
- Skills and certifications display
- Contact form with email integration
- Modern UI with smooth animations

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/subashc2023/subash.co.git
   cd subash.co
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL=your_email@example.com
   ```

4. **Set up Resend for email functionality**
   - Create an account at [Resend](https://resend.com)
   - Go to your dashboard and get your API key
   - Add the API key to your `.env.local` file
   - Add your email address to the `CONTACT_EMAIL` variable in `.env.local`
   - Verify your domain in Resend dashboard (if using a custom domain)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/
│   ├── home/              # Main page components
│   └── theme/             # Theme components
├── config/
│   └── site.ts            # Central configuration
└── types/                 # TypeScript type definitions
```

## 🔧 Configuration

All site-wide configurations are centralized in `src/config/site.ts`. Update this file to modify:
- Personal information
- Social links
- SEO metadata
- Theme preferences

## 📝 Development

- Run `npm run dev` for development with hot-reload
- Run `npm run build` to create a production build
- Run `npm run start` to start the production server
- Run `npm run lint` to check for code style issues

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- Email: subashc2023@gmail.com
- LinkedIn: [subashchandra2023](https://www.linkedin.com/in/subashchandra2023/)
- GitHub: [subashc2023](https://github.com/subashc2023)
