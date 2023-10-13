import {Link} from "react-router-dom"

const AuthLayout = (props) => {
    const {children, title,} = props;
    return (
        <div className="flex justify-center min-h-screen items-center bg-slate-300">
            <div className="w-full max-w-xs border rounded p-4 bg-white">
                <h1 className="text-3xl font-bold mb-2 text-blue-700">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
                {children}
                {/* <Link to="/register">Daftar</Link> */}
            </div>
        </div>
    );
};

export default AuthLayout;