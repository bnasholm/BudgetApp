import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Outlet, Link } from "react-router-dom";
import { DefaultAvatar } from "../svg";
import SignOutDropdown from "./SignOutDropdown";

const Layout = () => {
  const { user } = useKindeAuth();
  const { givenName, familyName } = user || {};
  console.log(user);
  return (
    <div className="h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold mb-6">Breanna Budgets</h1>
        <div className="relative flex justify-between items-center">
          <div className="flex items-center">
            <DefaultAvatar className="inline-block size-8 mr-2" />
            Hi, {givenName}!
          </div>
          <SignOutDropdown />
        </div>

        <nav className="space-y-4 mt-6">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link
            to="/budget"
            className="block text-gray-700 hover:text-blue-600"
          >
            Budget
          </Link>
          <Link
            to="/debt-accounts"
            className="block text-gray-700 hover:text-blue-600"
          >
            Debt Accounts
          </Link>
          <Link
            to="/payoff-plan"
            className="block text-gray-700 hover:text-blue-600"
          >
            Payoff Plan
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
