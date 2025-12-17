# Gym / Fitness Center Management System

## Project Overview
This project is a comprehensive Gym/Fitness Center Management System designed to streamline operations such as:
- Member management
- Class scheduling
- Trainer management
- Workout and diet plan uploads
- Attendance tracking
- Payment processing
- Notifications

It features **role-based access control** for Admins, Trainers, and Members, and provides responsive dashboards for various devices.

---

## Core Features
- Member signup/login with role-based access (Admin / Trainer / Member)
- Class scheduling system
- Trainer management
- Workout & diet plan upload
- Attendance tracking (manual/QR code)
- Payment & subscription management (Stripe/PayPal integration)
- Email & SMS notifications
- Responsive dashboard for mobile and tablet

---

## Technical Stack
- **Frontend:** React.js  
- **Backend:** Node.js with Express  
- **Database:** MongoDB  
- **Authentication:** JWT or Firebase Auth  

---

## Project Structure
```
gym-fitness-management/ 
├── server/
│    ├── config/ 
│    │    └── db.js
│    ├── controllers/ 
│    │    ├── classController.js 
│    │    ├── paymentController.js 
│    │    ├── trainerController.js 
│    │    └── userController.js
│    ├── routes/  
│    │    ├── AuthRoutes.js
│    │    ├── classRoutes.js 
│    │    ├── paymentRoutes.js 
│    │    ├── paymentRoutes.js
│    │    └── trainerRoutes.js           
│    ├── middleware/ 
│    │    ├── authMiddleware.js 
│    │    └── upload.js 
│    ├── models/  
│    │    ├── class.js 
│    │    └── user.js  
│    ├── Uploads/  
│    │    └── trainers
│    │         ├── T_img-1.jpg
│    │         ├── T_img-2.jpg
│    │         ├── T_img-3.jpg
│    │         ├── T_img-4.jpg
│    │         ├── T_img-5.jpg
│    │         ├── T_img-6.jpg
│    │         └── T_img-7.jpg
│    ├── seed/   
│    │    ├── seedAdmin.js    
│    │    └── seedTrainers.js         
│    ├── server.js
│    ├──.env
│    ├──node_modules 
│    ├──node_modules 
│    └──node_modules               
│
├── Client/                
│   ├── node_modules/
│   ├── public/
│   ├── src/     
│   │   ├── api/
│   │   │   ├── attendanceApi.js
│   │   │   ├── authApi.js 
│   │   │   ├── axiosInstance.js
│   │   │   ├── classApi.js
│   │   │   ├── paymentApi.js
│   │   │   └── trainerApi.js 
│   │   ├── assets/ 
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── ClassCard.jsx
│   │   │   │   ├── ContactInfoCard.jsx
│   │   │   │   ├── MobileSidebar.jsx
│   │   │   │   ├── ContactInfoCard.jsx
│   │   │   │   ├── FacilitiesCard.jsx
│   │   │   │   ├── FAQCard.jsx
│   │   │   │   ├── FooterCard.jsx
│   │   │   │   ├── PlanCard.jsx
│   │   │   │   ├── PlanCardDes.jsx
│   │   │   │   ├── ServiceCard.jsx
│   │   │   │   ├── TestimonialCard.jsx
│   │   │   │   └── TrainerCard.jsx
│   │   │   ├── layout/
│   │   │   │   ├── AdminLayout.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── MemberLayout.jsx
│   │   │   │   ├── MobileSidebar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── TrainerLayout.jsx
│   │   │   ├── plans
│   │   │   │   ├── DietPlan.jsx
│   │   │   │   └── WorkoutPlan.jsx
│   │   │   └── home/
│   │   │   │   ├── ContactSection.jsx
│   │   │   │   ├── FacilitiesSection.jsx
│   │   │   │   ├── FAQSectionjsx
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── PlansSection.jsx
│   │   │   │   ├── ScheduleSection.jsx
│   │   │   │   ├── ServicesSection.jsx
│   │   │   │   ├── TestimonialSection.jsx
│   │   │   │   └── TrainersSection.jsx
│   │   │   └── ui/ 
│   │   │   │   ├── Actionbutton.jsx
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── FeatureList.jsx
│   │   │   │   ├── Heading.jsx
│   │   │   │   ├── ScrollTopButton.jsx
│   │   │   │   └── Table.jsx
│   │   ├── context/ 
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js 
│   │   ├── pages/
│   │   │   ├── auth
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── admin
│   │   │   │   ├── AdminClasses.jsx
│   │   │   │   └── TrainersProfile.jsx 
│   │   │   ├── dashboard
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── MemberDashboard.jsx
│   │   │   │   └── TrainerDashboard.jsx
│   │   │   ├── payments
│   │   │   │   ├── Payment.jsx
│   │   │   │   ├── PaymentSuccess.jsx
│   │   │   │   └── Subscription.jsx
│   │   │   ├── member
│   │   │   │   ├── AttendancePage.jsx
│   │   │   │   ├── Profile.jsx
│   │   │   │   ├── MemberSubscription.jsx
│   │   │   │   ├── MyPlans.jsx
│   │   │   │   └── ClassSchedule.jsx 
│   │   │   ├── trainers
│   │   │   │   ├── TrainerAttendance.jsx
│   │   │   │   ├── TrainerPlans.jsx
│   │   │   │   ├── TrainerProfile.jsx
│   │   │   │   └── TrainerSchedule.jsx
│   │   │   └── Home.jsx
│   │   ├── routes/
│   │   │   │   ├── ProtectedRoute.jsx
│   │   │   │   └── RoleRoute.jsx
│   │   ├── services/
│   │   │   │   ├── api.js
│   │   │   │   └── authService.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx 
│   ├──.gitignore     
│   ├── eslint.config.js     
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tailwind.config.js 
│   ├── vite.config.js                       
├── README.md                
└── .gitignore
```


---

## Development Phases
1. Environment setup, base server, and authentication  
2. Roles, trainers, members, and profiles  
3. Classes and scheduling  
4. Workout and diet plans  
5. Attendance tracking (manual and QR code)  
6. Payments and subscriptions integration (Stripe/PayPal)  
7. Email and SMS notifications  
8. Responsive dashboards and protected routing  
9. Quality assurance, seed data, logging, and deployment  

