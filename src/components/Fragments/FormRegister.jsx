import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/indexbutton";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm
            label="Fullname" 
            type="text" 
            placeholder="insert your name here.." 
            name="fullname"/>

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

            <InputForm
            label="Confirm Password" 
            type="pasworrd" 
            placeholder="******" 
            name="comfirmpassword"/>
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    );
};

export default FormRegister;