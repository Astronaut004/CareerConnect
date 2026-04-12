# CareerConnect SaaS Platform - Documentation

## 🚀 Project Overview

CareerConnect is a professional, enterprise-grade SaaS platform designed to connect companies with talented job seekers. The platform offers three subscription tiers and comprehensive features for modern hiring.

## 🎯 Platform Features

### For Companies
- **Professional Dashboard** - Monitor hiring pipeline with analytics
- **Job Management** - Post, edit, pause, and manage job listings
- **Applicant Tracking** - Review, filter, and communicate with candidates
- **Advanced Analytics** - Track performance metrics and hiring trends
- **Subscription Plans** - Choose from Startup, Professional, or Enterprise
- **Team Collaboration** - Manage team members and hiring workflows

### For Job Seekers
- **Job Discovery** - Search and filter jobs by location, salary, level
- **Application Management** - Track applications and interview progress
- **Profile Management** - Build professional profiles
- **Notifications** - Get alerts for matching opportunities
- **Saved Jobs** - Bookmark interesting opportunities

## 💳 Subscription Plans

### Startup ($29/month)
- Up to 5 active job postings
- Basic candidate management
- Email support (24-48 hours)
- Standard analytics
- Applicant tracking system

### Professional ($79/month) ⭐ Most Popular
- Unlimited job postings
- Advanced candidate management
- Priority support (24/7)
- Advanced analytics & reports
- Custom career page
- Team collaboration tools
- API access

### Enterprise (Custom)
- Everything in Professional
- Dedicated account manager
- Custom integrations
- Advanced security features
- White-label options
- SLA guarantee
- Priority feature requests

## 🏗️ Architecture

### Frontend
- **React 19** with modern hooks
- **Tailwind CSS 4** for professional styling
- **Zustand** for state management
- **Lucide Icons** for UI elements
- **Vite** for fast development

### Backend
- **Node.js/Express** for RESTful API
- **PostgreSQL** for user and job data
- **MongoDB** for subscription and analytics
- **JWT** for authentication
- **Bcrypt** for password security

### Database Schema

#### PostgreSQL Tables
- **users** - Job seekers and companies
  - user_type: 'jobseeker' or 'company'
  - company_name, industry, website (for companies)
  - full_name, phone (for job seekers)

- **jobs** - Job postings
  - title, description, salary_range
  - location, job_type (full-time, part-time, etc.)
  - company_id, status

- **applications** - Job applications
  - job_id, user_id, status
  - cover_letter, applied_at

#### MongoDB Collections
- **subscriptions** - Company subscription plans
- **analytics** - Hiring metrics and usage data

## 📋 User Flows

### Company Registration
1. Click "Start Free Trial"
2. Select "Company" tab
3. Enter company details (name, industry, size, website)
4. Create account
5. Receive 14-day free trial (Startup plan)
6. Access dashboard immediately

### Job Seeker Registration
1. Click "Start Free Trial"
2. Select "Job Seeker" tab
3. Enter profile details (name, email, phone)
4. Create account
5. Browse and apply to jobs

## 🔐 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - Bcrypt with salt rounds
- **CORS Protection** - Domain-specific API access
- **Rate Limiting** - Protection against abuse
- **Data Encryption** - Secure data storage
- **GDPR Compliant** - Privacy and data protection

## 📊 Analytics & Metrics

- **Company Dashboard**
  - Active job postings
  - Total applications received
  - Hiring trends (monthly)
  - Department-wise job breakdown
  - Cost per hire

- **Hiring Insights**
  - Application response time
  - Time to hire
  - Candidate quality metrics
  - Applicant source tracking

## 🎨 Professional Color Scheme

- **Primary**: Professional Blue (#3b82f6, #5563ff)
- **Secondary**: Teal/Cyan (#14b8a6, #2dd4bf)
- **Neutral**: Professional Gray (#374151, #e5e7eb)
- **Success**: Emerald Green (#22c55e)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)

## 🚀 Getting Started

### Installation

#### Backend Setup
```bash
cd server_backend
npm install
npm run dev
```

#### Frontend Setup
```bash
cd client
npm install
npm run dev
```

### Environment Variables (.env)

```
# Backend
MONGODB_URI=mongodb://localhost:27017/careerconnect
DATABASE_URL=postgresql://user:password@localhost:5432/careerconnect
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development

# Frontend
VITE_API_URL=http://localhost:5000
```

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Company Management
- `GET /api/company/:id` - Get company profile
- `PUT /api/company/:id` - Update company profile

### Subscriptions
- `GET /api/subscription/:companyId` - Get subscription
- `PUT /api/subscription/:companyId/plan` - Upgrade/downgrade plan
- `DELETE /api/subscription/:companyId/cancel` - Cancel subscription

### Jobs
- `POST /api/jobs` - Create job posting
- `GET /api/jobs` - List all jobs
- `GET /api/jobs/:id` - Get job details
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job

### Applications
- `POST /api/applications` - Apply for job
- `GET /api/applications/:jobId` - Get applications
- `GET /api/applications/user/:userId` - Get user applications

## 🔄 Development Workflow

1. **Feature Development**
   - Create a new branch
   - Make changes to frontend/backend
   - Test thoroughly
   - Push to main

2. **Deployment**
   - Build frontend: `npm run build`
   - Test production build locally
   - Deploy to hosting platform

## 📈 Future Enhancements

- [ ] Video interview integration
- [ ] AI-powered candidate matching
- [ ] Salary benchmarking
- [ ] Resume parsing
- [ ] Bulk job posting
- [ ] Custom workflows
- [ ] Mobile applications
- [ ] Advanced reporting

## 📞 Support

For issues and feature requests, contact support@careerconnect.com

## 📄 License

This project is proprietary and confidential.

---

**Version**: 1.0.0  
**Last Updated**: April 2024  
**Status**: Production Ready
