import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import PrivateRoute from "./routes/PrivateRoute";
import "./App.css";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Login = lazy(() => import("./components/Login"));
const SignUp = lazy(() => import("./components/SignUp"));
const Layout = lazy(() => import("./components/Layout"));
const Budget = lazy(() => import("./components/Budget"));

const App = () => {
  return (
    <div className="App">
      <KindeProvider
        clientId="174cbf9a7db148b69c877741b221e2ba"
        domain="https://breannabudgets.kinde.com"
        redirectUri="http://localhost:5173"
        logoutUri="http://localhost:5173"
      >
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Layout />
                  </PrivateRoute>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="budget" element={<Budget />} />
                {/* <Route path="debt-accounts" element={<DebtAccounts />} />
                <Route path="payoff-plan" element={<PayoffPlan />} /> */}
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </KindeProvider>
    </div>
  );
};

export default App;
