import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const SignUp = () => {
  const { register } = useKindeAuth();
  return (
    <div>
      <button onClick={() => register(/* params here */)} type="button">
        Sign up
      </button>
    </div>
  );
};

export default SignUp;
