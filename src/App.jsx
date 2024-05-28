import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound";
import UserLayout from "./components/UserLayout";
import HospitalLayout from "./components/HospitalLayout";
import Signup from "./pages/SingupLayout";
import Activities from "./pages/User/Activities";
import History from "./pages/User/History";
import UserHome from "./pages/User/UserHome";
import HospitalHome from "./pages/Hospital/HospitalHome";
import DonateActivities from "./pages/Hospital/DonateActivities";
import RequiredDonation from "./pages/Hospital/RequiredDonation";
import HospitalActivities from "./pages/Hospital/HospitalActivities";
import HomePage from "./pages/HomePage";
import LoginLayout from "./pages/LoginLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import RequestBlood from "./pages/Hospital/RequestBlood";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/user"
            element={
              <ProtectedRoute role="user">
                <UserLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="home" />} />
            <Route path="activities" element={<Activities />} />
            <Route path="history" element={<History />} />
            <Route path="home" element={<UserHome />} />
          </Route>

          <Route
            path="/hospital"
            element={
              <ProtectedRoute role="hospital">
                <HospitalLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="home" />} />
            <Route path="activities" element={<DonateActivities />} />
            <Route path="hospitalactivities" element={<HospitalActivities />} />
            <Route path="requireDonation" element={<RequiredDonation />} />
            <Route path="requestsBlood" element={<RequestBlood />} />
            <Route path="home" element={<HospitalHome />} />
          </Route>

          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginLayout />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#f9fafb",
            color: "#dc2626",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
