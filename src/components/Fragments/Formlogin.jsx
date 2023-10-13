import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/indexbutton";

const FormLogin = () => {
    return (
        <form action="">
            <InputForm
            label="Email" 
            type="email" 
            placeholder="example@mail.com" 
            name="email"/>
            <InputForm
            label="Password" 
            type="pasworrd" 
            placeholder="******" 
            name="password"/>
            <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    );  
};

export default FormLogin;