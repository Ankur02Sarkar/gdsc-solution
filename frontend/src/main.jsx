import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

import {
  ClerkProvider,
  SignedIn,
  SignIn,
  SignUp,
  UserButton,
  UserProfile,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const clerk_pub_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
function PublicPage() {
  return (
    <>
      <Navbar />
      <App />
    </>
  );
}

function ProtectedPage() {
  return (
    <>
      <Navbar />
      <App />
    </>
  );
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerk_pub_key}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/profile/*"
          element={<UserProfile routing="path" path="/profile" />}
        />
        <Route
          path="/protected"
          element={
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router}>
      </RouterProvider>
    </ClerkProvider> */}
  </React.StrictMode>
);
