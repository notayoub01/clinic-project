# HealthFirst Medical Clinic

## CSCI390: Web Programming Project - Phase 2

A modern, responsive, and functional medical clinic website built with ReactJS and Bootstrap. This project demonstrates web design principles, responsive UI/UX, version control with Git, and deployment skills.

---

## Project Description

HealthFirst Medical Clinic is a comprehensive healthcare web application that provides patients with an intuitive platform to:
- Learn about the clinic's services and medical team
- Explore detailed medical departments and specialties
- Contact the clinic through a validated form
- Book appointments online with real-time form validation
- Access emergency contact information

The website features a modern dark-themed design with gradient accents, smooth animations, and full mobile responsiveness.

---

## Features

### Pages (5 Total)
1. **Home** - Hero section, statistics, services preview, why choose us, testimonials, CTA
2. **About** - Clinic story, mission/vision, core values, timeline, team members
3. **Services** - 12 medical departments with modal details, pricing, and hours
4. **Contact** - Contact form with validation, Google Maps, FAQ section
5. **Appointment** - Full booking form with department/doctor selection, confirmation

### Technical Features
- React Router for SPA navigation
- Form validation with real-time error handling
- Responsive design (mobile, tablet, desktop)
- Custom CSS with CSS variables and animations
- Interactive service modals
- Appointment confirmation system
- Smooth scrolling and scroll-to-top
- Professional color scheme and typography

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| React 18 | Frontend framework |
| React Router DOM | Client-side routing |
| React Bootstrap | UI component library |
| Bootstrap 5 | CSS framework |
| React Icons | Icon library |
| CSS3 | Custom styling, animations, variables |
| Git | Version control |
| GitHub Pages | Deployment |

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/clinic-website.git
cd clinic-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```
The app will open at [http://localhost:3000](http://localhost:3000)

4. Build for production:
```bash
npm run build
```

5. Deploy to GitHub Pages:
```bash
npm run deploy
```

---

 Project Structure

```
clinic-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── NavigationBar.js    # Responsive navbar with scroll effect
│   │   ├── Footer.js           # Site footer with links and contact info
│   │   └── ScrollToTop.js      # Scroll restoration on route change
│   ├── pages/
│   │   ├── Home.js             # Landing page with hero, stats, services
│   │   ├── About.js            # About page with team and timeline
│   │   ├── Services.js         # Services grid with modal details
│   │   ├── Contact.js          # Contact form with validation + FAQ
│   │   └── Appointment.js      # Appointment booking with confirmation
│   ├── styles/
│   │   └── custom.css          # Complete custom styling
│   ├── App.js                  # Main app with routing
│   └── index.js                # Entry point
├── package.json
├── .gitignore
└── README.md
```

---

 Screenshots

 Home Page
[Home Page](screenshots/home.png)
*Hero section with call-to-action buttons and feature highlights*

 About Page
[About Page](screenshots/about.png)
*Clinic story, mission/vision, and team members*

 Services Page
[Services Page](screenshots/services.png)
*Medical departments with detailed modal views*

 Contact Page
[Contact Page](screenshots/contact.png)
*Contact form with validation and Google Maps*

 Appointment Page
[Appointment Page](screenshots/appointment.png)
*Online booking system with confirmation*

 Mobile Responsive
[Mobile View](screenshots/mobile.png)
*Fully responsive design on mobile devices*

---

 Git Commit History

```
Initial commit - Project setup with React
Add routing and navigation components
Create Home page with hero and stats
Build About page with timeline
Implement Services page with modals
Add Contact form with validation
Create Appointment booking system
Add custom CSS styling and animations
Implement responsive design
Final polish and README update
```

---

 Deployment

The project is deployed on GitHub Pages:
**Live URL:** [https://mhmdali37.github.io/clinic-website](https://yourusername.github.io/clinic-website)

---

Evaluation Criteria Met

| Criteria | Implementation |
|----------|---------------|
| ReactJS Frontend | React 18 with functional components and hooks |
| Bootstrap/Tailwind | React Bootstrap + custom CSS |
| 4+ Pages | Home, About, Services, Contact, Appointment |
| Responsive Design | Mobile-first, breakpoints at 576px, 768px, 992px |
| Git Version Control | Full commit history with meaningful messages |
| GitHub Deployment | Configured for GitHub Pages |
| README.md | Complete documentation with setup instructions |
| UI/UX Design | Modern design, animations, intuitive navigation |

---

 Authors

- [muhammad ali youb karim trabolsi] - CSCI390 Web Programming
- Spring 2025-2026

---

 License

This project is created for educational purposes as part of CSCI390 coursework.
