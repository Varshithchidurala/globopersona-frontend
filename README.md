# GloboPersona Frontend Dashboard

A modern and responsive Email Marketing Dashboard built using Next.js and Tailwind CSS as part of the GloboPersona Frontend Assessment.

The application provides a professional dashboard interface for managing email campaigns, viewing campaign analytics, monitoring engagement performance, and creating new campaigns.

---

# Live Deployment

Frontend Application LIVE

https://globopersona-final-dashboard.vercel.app/dashboard

---

# GitHub Repository

Repository Link:

https://github.com/Varshithchidurala/globopersona-frontend

---

# Project Overview

The goal of this project was to build a scalable and responsive frontend dashboard for email marketing campaign management.

The application demonstrates:

- Modern frontend development using Next.js
- Component-based architecture using React
- Responsive UI development using Tailwind CSS
- Client-side routing using Next.js App Router
- Reusable UI components
- Professional dashboard layout and design
- Deployment using Vercel

The project focuses on clean UI structure, maintainable code organization, and reusable frontend components.

---

# Key Features

## Dashboard Analytics

The dashboard provides campaign-related analytics including:

- Total Campaigns
- Emails Sent
- Engagement Rate
- Campaign Performance Overview

---

## Campaign Management Interface

Users can:

- View campaign performance
- Navigate between dashboard pages
- Access campaign listings
- Create new campaigns

---

## Responsive Design

The entire application is responsive and optimized for:

- Desktop devices
- Tablets
- Mobile screens

Tailwind CSS utility classes were used to ensure responsive layouts and modern styling.

---

## Reusable Components

The project follows reusable component architecture.

Reusable components include:

- Sidebar
- Topbar
- StatCard
- CampaignTable
- CampaignForm

This improves:

- code maintainability
- scalability
- readability
- UI consistency

---

# Pages Included

## 1. Dashboard Page

Route:

/dashboard

Features:

- Analytics cards
- Campaign performance table
- Dashboard overview
- Responsive layout
- Sidebar navigation

The dashboard acts as the primary analytics page of the application.

---

## 2. Campaigns Page

Route:

/campaigns

Features:

- Campaign listing table
- Campaign status information
- Reusable table component
- Structured data presentation

---

## 3. Create Campaign Page

Route:

/create-campaign

Features:

- Campaign creation form
- Input fields
- Button actions
- Responsive form layout
- Reusable form component

---

# Technologies Used

## Frontend Framework

- Next.js 16

Next.js was used for:

- frontend development
- page routing
- application structure
- optimized rendering

---

## UI Library

- React

React was used to build reusable and modular UI components.

---

## Styling

- Tailwind CSS

Tailwind CSS was used for:

- responsive design
- utility-first styling
- layout management
- spacing and typography
- modern UI development

---

## Icons

- Lucide React Icons

Lucide icons were used throughout the dashboard interface for:

- sidebar navigation
- dashboard icons
- visual enhancements

---

## Deployment Platform

- Vercel

The frontend application was deployed using Vercel with GitHub integration.

---

## Version Control

- GitHub

GitHub was used for:

- source code management
- deployment integration
- version tracking

---

# Folder Structure

```bash
app/
├── dashboard/
│   └── page.js
│
├── campaigns/
│   └── page.js
│
├── create-campaign/
│   └── page.js
│
└── page.js

components/
├── Sidebar.jsx
├── Topbar.jsx
├── StatCard.jsx
├── CampaignTable.jsx
└── CampaignForm.jsx
```

---

# Component Explanation

## Sidebar Component

The Sidebar component provides navigation between:

- Dashboard
- Campaigns
- Create Campaign

It uses Next.js Link routing for navigation.

---

## Topbar Component

The Topbar component displays:

- dashboard title
- welcome message
- top navigation styling

---

## StatCard Component

The StatCard component is reusable for displaying:

- analytics data
- campaign statistics
- dashboard metrics

---

## CampaignTable Component

The CampaignTable component displays:

- campaign performance data
- engagement statistics
- campaign status
- structured table layout

---

## CampaignForm Component

The CampaignForm component contains:

- form inputs
- campaign creation UI
- responsive form layout
- reusable input structure

---

# Routing System

The application uses Next.js App Router.

Routes used:

- /dashboard
- /campaigns
- /create-campaign

The sidebar navigation uses Next.js Link component for seamless routing between pages.

---

# UI Design Approach

The application was designed with focus on:

- clean layout structure
- readability
- spacing consistency
- responsive design
- professional dashboard experience
- component reusability

Tailwind CSS utility classes were used extensively for efficient UI development.

---

# Challenges Faced

During development, several routing and deployment issues were encountered related to:

- Next.js App Router
- folder structure
- Vercel deployment caching
- route configuration

These issues were resolved by:

- correcting application routes
- restructuring folders properly
- fixing sidebar navigation links
- redeploying the application with clean configuration

This improved understanding of:

- frontend debugging
- deployment workflows
- routing systems
- Vercel deployment management

---

# Installation & Local Setup

## Clone Repository

```bash
git clone https://github.com/Varshithchidurala/globopersona-frontend.git
```

---

## Navigate to Project Directory

```bash
cd globopersona-frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

## Open Browser

```bash
http://localhost:3000
```

---

# Deployment Process

The application was deployed using Vercel.

Deployment steps:

1. Push project to GitHub
2. Import repository into Vercel
3. Configure project settings
4. Deploy application
5. Access live production URL

---

# Future Improvements

Possible future enhancements include:

- Backend API integration
- Authentication system
- Real-time analytics
- Charts and data visualization
- Campaign filtering
- Search functionality
- Dark mode support
- User management system
- Database integration

---

# Learning Outcomes

Through this project, the following skills were strengthened:

- Next.js application development
- React component architecture
- Responsive frontend development
- Tailwind CSS styling
- GitHub version control
- Vercel deployment
- Frontend debugging
- Routing configuration
- Reusable UI component development

---

# Author

Varshith Chidurala

Frontend Assessment Submission for GloboPersona

---

# Thank You

Thank you for reviewing this project submission.
