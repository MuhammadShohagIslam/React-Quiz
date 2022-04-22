import React from 'react';
import FormIllustration from "../FormIllustration/FormIllustration";
import Image from "../../assets/images/login.svg";
import SignInForm from '../Form/SignInForm';


const SignIn = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <FormIllustration image={Image} altName="Login" />
                <SignInForm/>
            </div>
        </>
    );
};

export default SignIn;
