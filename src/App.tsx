import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Public
import { LandingPage } from "./pages/landing/LandingPage";

// Auth
import { SignIn } from "./pages/auth/SignIn";
import { CreateAccount } from "./pages/auth/CreateAccount";
import { SetPassword } from "./pages/auth/SetPassword";
import { SellerSetPassword } from "./pages/auth/SellerSetPassword";
import { VerificationPending } from "./pages/auth/VerificationPending";

// Email mockups (open in new tab)
import { RegistrationConfirmationEmail } from "./pages/email/RegistrationConfirmationEmail";
import { AccountVerifiedEmail } from "./pages/email/AccountVerifiedEmail";
import { SellerPreApprovedEmail } from "./pages/email/SellerPreApprovedEmail";
import { SellerSelectedEmail } from "./pages/email/SellerSelectedEmail";

// Onboarding — 3-step walkthrough
import { WalkthroughStep1 } from "./pages/onboarding/WalkthroughStep1";
import { WalkthroughStep2 } from "./pages/onboarding/WalkthroughStep2";
import { WalkthroughStep3 } from "./pages/onboarding/WalkthroughStep3";
import { WaitingScreen } from "./pages/onboarding/WaitingScreen";

// Buyer Dashboard
import { DashboardHome } from "./pages/dashboard/DashboardHome";
import { ProjectsPage } from "./pages/dashboard/ProjectsPage";
import { SearchSellersPage } from "./pages/dashboard/SearchSellersPage";
import { ChatsPage } from "./pages/dashboard/ChatsPage";
import { SettingsPage, HelpPage } from "./pages/dashboard/PlaceholderPage";
import { ProfilePage } from "./pages/dashboard/ProfilePage";

// Seller Dashboard
import { SellersDashboardPage } from "./pages/dashboard/SellersDashboardPage";
import { SellersProjectsPage } from "./pages/dashboard/SellersProjectsPage";
import { ProjectViewPage } from "./pages/dashboard/ProjectViewPage";

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* ── Public ─────────────────────────────────────────────────────── */}
        <Route path="/" element={<LandingPage />} />

        {/* ── Auth ───────────────────────────────────────────────────────── */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/register/set-password" element={<SetPassword />} />
        <Route path="/register/verification" element={<VerificationPending />} />

        {/* Seller-specific set-password (arrives from pre-approved email CTA) */}
        <Route path="/seller/set-password" element={<SellerSetPassword />} />

        {/* ── Email mockups (designed to open in a new browser tab) ───────── */}
        <Route path="/email/registration-confirmation" element={<RegistrationConfirmationEmail />} />
        <Route path="/email/account-verified"          element={<AccountVerifiedEmail />} />
        <Route path="/email/seller-pre-approved"       element={<SellerPreApprovedEmail />} />
        <Route path="/email/seller-selected"           element={<SellerSelectedEmail />} />

        {/* ── Onboarding walkthrough ─────────────────────────────────────── */}
        <Route path="/onboarding/step/1" element={<WalkthroughStep1 />} />
        <Route path="/onboarding/step/2" element={<WalkthroughStep2 />} />
        <Route path="/onboarding/step/3" element={<WalkthroughStep3 />} />
        <Route path="/onboarding/loading" element={<WaitingScreen />} />

        {/* ── Legacy redirects (keep old URLs alive) ─────────────────────── */}
        <Route path="/onboarding/welcome"  element={<Navigate to="/onboarding/step/1" replace />} />
        <Route path="/onboarding/name"     element={<Navigate to="/onboarding/step/1" replace />} />
        <Route path="/onboarding/step-1"   element={<Navigate to="/onboarding/step/1" replace />} />
        <Route path="/verify/pending"      element={<Navigate to="/register/verification" replace />} />
        <Route path="/verify/success"      element={<Navigate to="/dashboard" replace />} />
        <Route path="/verify/failed"       element={<Navigate to="/register" replace />} />

        {/* ── Buyer Dashboard ────────────────────────────────────────────── */}
        <Route path="/dashboard"                  element={<DashboardHome />} />
        <Route path="/dashboard/projects"         element={<ProjectsPage />} />
        <Route path="/dashboard/projects/sellers" element={<SearchSellersPage />} />
        <Route path="/dashboard/chats"            element={<ChatsPage />} />
        <Route path="/dashboard/settings"         element={<SettingsPage />} />
        <Route path="/dashboard/help"             element={<HelpPage />} />
        <Route path="/dashboard/profile"          element={<ProfilePage />} />

        {/* ── Seller Dashboard ───────────────────────────────────────────── */}
        <Route path="/dashboard/seller"                    element={<SellersDashboardPage />} />
        <Route path="/dashboard/seller/projects"           element={<SellersProjectsPage />} />
        <Route path="/dashboard/seller/project-view"       element={<ProjectViewPage />} />

        {/* Remove quotes page — redirect to dashboard */}
        <Route path="/dashboard/quotes" element={<Navigate to="/dashboard" replace />} />

        {/* ── Fallback ───────────────────────────────────────────────────── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
