import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Layouts
import AdminLayout from "./components/layout/AdminLayout";
import TrainerLayout from "./components/layout/TrainerLayout";
import MemberLayout from "./components/layout/MemberLayout";

// Dashboards
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import TrainerDashboard from "./pages/dashboard/TrainerDashboard";
import MemberDashboard from "./pages/dashboard/MemberDashboard";

// Admin pages
// import ClassList from "./pages/classes/ClassList";
import TrainerProfile from "./pages/trainers/TrainerProfile";
import Subscription from "./pages/payments/Subscription";

// Trainer pages
import TrainerSchedule from "./pages/trainers/TrainerSchedule";

// Member pages
import ClassSchedule from "./pages/member/ClassSchedule";
import MyPlans from "./pages/member/MyPlans";
import MemberSubscription from "./pages/member/MemberSubscription";

// Payments
import Payment from "./pages/payments/Payment";
import PaymentSuccess from "./pages/payments/PaymentSuccess";


import TrainerPlans from "./pages/trainers/TrainerPlans";
import AdminClasses from "./pages/admin/AdminClasses";
import TrainersProfile from "./pages/admin/TrainersProfile";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* Admin layout */}
        <Route path="/dashboard/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="classes" element={<AdminClasses />} />
          <Route path="trainers" element={<TrainersProfile />} />
          <Route path="payments" element={<Subscription />} />
        </Route>

        {/* Trainer layout */}
        <Route path="/dashboard/trainer" element={<TrainerLayout />}>
          <Route index element={<TrainerDashboard />} />
          <Route path="profile" element={<TrainerProfile />} />
          <Route path="classes" element={<TrainerSchedule />} />
          <Route path="plans" element={<TrainerPlans />} />
        </Route>

        {/* Member layout */}
        <Route path="/dashboard/member" element={<MemberLayout />}>
          <Route index element={<MemberDashboard />} />
          <Route path="classes" element={<ClassSchedule />} />
          <Route path="plans" element={<MyPlans />} />
          <Route path="subscription" element={<MemberSubscription />} />
        </Route>

      </Routes>
    </Router>
  );
}
