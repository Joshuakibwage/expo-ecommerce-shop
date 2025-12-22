# 📱 Full-Stack eCommerce Mobile Application

A production-ready, full-stack **eCommerce mobile application** built with **Expo & React Native**, supported by a **Node.js + Express backend** and **MongoDB**. The platform includes a **mobile app for customers**, a **web-based admin dashboard**, and a **scalable backend API**. It integrates modern tools for authentication, payments, background jobs, performance monitoring, and deployment.

---

## 🚀 Project Overview

This project demonstrates a real-world eCommerce system with:

* Secure authentication
* Product & order management
* Online payments
* Background job processing
* Robust state management
* Error monitoring and observability

The architecture follows a **clean separation of concerns** across three applications:

| Layer           | Technology          |
| --------------- | ------------------- |
| Mobile App      | Expo + React Native |
| Admin Dashboard | React (Web)         |
| Backend API     | Node.js + Express   |
| Database        | MongoDB             |

---

## 🧩 Core Features

### 👤 Authentication & User Management

* Authentication powered by **Clerk**
* Secure login and session handling
* Role-based access (Admin vs Customer)
* Protected routes on both frontend and backend

### 🛒 eCommerce Functionality

* Browse products
* Product categories & details
* Add to cart
* Checkout flow
* Order creation & tracking

### 💳 Payments

* Integrated **Stripe** for secure online payments
* Server-side payment intent handling
* Webhook support for payment status updates

### ⚙️ Background Jobs (Inngest)

* Background task execution using **Inngest**
* Used for:

  * Order confirmation workflows
  * Payment status processing
  * Email or notification triggers
  * Async cleanup & data syncing
* Improves performance by offloading long-running tasks

### 📦 State Management & Data Fetching

* **TanStack Query** for:

  * Server state management
  * Caching & revalidation
  * Automatic retries & error handling
* Optimized API communication between frontend and backend

### 🎨 UI & Styling

* **Tailwind CSS** for styling
* Consistent design system across mobile & admin apps
* Responsive admin dashboard UI

### 🐞 Error Monitoring & Observability

* Integrated **Sentry** for:

  * Error tracking
  * Performance monitoring
  * Crash reporting across frontend & backend

---

## 🧱 Tech Stack

### 📱 Mobile Application (Customer)

* Expo
* React Native
* TanStack Query
* Tailwind (NativeWind)
* Clerk Authentication
* Stripe Payments
* Sentry

### 🖥️ Admin Dashboard

* React (Web)
* TanStack Query
* Tailwind CSS
* Clerk (Admin authentication)
* Role-based access control
* Sentry

### 🛠️ Backend API

* Node.js
* Express.js
* MongoDB (Mongoose)
* Clerk (Auth verification)
* Stripe SDK
* Inngest (Background jobs)
* Sentry

### ☁️ Deployment & Infrastructure

* **Vercel** – Frontend & backend deployment
* MongoDB Atlas – Cloud database
* Stripe Webhooks
* Environment-based configuration

---

## 🗂️ Project Structure

```
root/
├── admin/            # React Admin Dashboard
├── mobile/           # Expo React Native App
├── backend/          # Node.js + Express API
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── inngest/
│   └── middlewares/
├── README.md
```

---

## 🔐 Authentication Flow

1. Users authenticate via **Clerk** on mobile or admin app
2. Clerk issues a secure session token
3. Token is sent with API requests
4. Backend verifies the token using Clerk middleware
5. Role-based permissions are enforced

---

## 💳 Payment Flow (Stripe)

1. User initiates checkout
2. Backend creates a Stripe Payment Intent
3. Client confirms payment via Stripe SDK
4. Stripe sends webhook events to backend
5. Inngest processes order confirmation asynchronously
6. Order status is updated in MongoDB

---

## ⚙️ Background Processing with Inngest

Inngest is used to:

* Handle post-payment workflows
* Run async order processing
* Improve reliability & scalability

This ensures:

* Faster API responses
* Better fault tolerance
* Clean separation of sync vs async logic

---

## 🧪 Error Handling & Monitoring

* Centralized error handling middleware
* Sentry captures:

  * Frontend crashes
  * Backend exceptions
  * Performance bottlenecks

---

## 🌍 Environment Variables

Each app uses environment-specific variables:

```
CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=
MONGODB_URI=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
SENTRY_DSN=
INNGEST_EVENT_KEY=
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/Joshuakibwage/expo-ecommerce-shop.git
cd project-root
```

### 2️⃣ Install Dependencies

**Backend**

```
cd backend
npm install
```

**Admin Dashboard**

```
cd admin
npm install
```

**Mobile App**

```
cd mobile
npm install
```

### 3️⃣ Run Locally

**Backend**

```
npm run dev
```

**Admin**

```
npm run dev
```

**Mobile**

```
npx expo start
```

---

## ✅ Production-Ready Highlights

* Modular & scalable architecture
* Secure authentication & payments
* Background job processing
* Robust error monitoring
* Clean separation of frontend, admin & backend
* Cloud deployment with Vercel

---

## 📌 Future Improvements

* Inventory management
* Push notifications
* Advanced analytics dashboard
* Multi-vendor support
* Automated testing (Jest / Playwright)

---

## 👨‍💻 Author

Built as a real-world full-stack project showcasing modern **mobile, web, and backend engineering** best practices.

---

## ⭐️ Acknowledgements

* Expo & React Native
* Clerk
* Stripe
* Inngest
* TanStack Query
* Sentry
* Vercel

---

If you found this project useful, feel free to ⭐️ the repository!
