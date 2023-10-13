import AuthLayout from "../components/layouts/AuthLayout";
import FormLogin from "../components/Fragments/Formlogin";
import { Links } from "../components/Elements/Links";
// import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <Links />
      {/* <div className="mt-5 text-center text-sm">Don't have an account?{" "} 
            <a href="/register" className="text-blue-600 font-bold">sign up</a></div> */}
    </AuthLayout>
  );
};
export default LoginPage;
