import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Gauge } from "@mui/x-charts/Gauge";

const Dashboard = () => {
  const { login, register, isAuthenticated } = useKindeAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h2 className="text-3xl font-semibold mb-4">Welcome Back!</h2>
          <div className="grid grid-cols-1">
            <div className="bg-white p-4 rounded-lg shadow">
              <Gauge width={100} height={100} value={60} />
            </div>
          </div>
        </>
      ) : (
        <div>
          <button onClick={() => register()} type="button">
            Register
          </button>
          <button onClick={() => login()} type="button">
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
