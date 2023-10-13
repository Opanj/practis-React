import AuthLayout from "../components/layouts/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";
import {Link} from "react-router-dom"

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
            {/* <p className="mt-5 text-center text-sm">Have an account?{" "} 
            <Link to="/login" className="text-blue-600 font-bold">sign in</Link></p> */}
        </AuthLayout>
    );
};
export default RegisterPage;