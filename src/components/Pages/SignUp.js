import React from 'react';
import FormIllustration from "../FormIllustration/FormIllustration";
import Image from "../../assets/images/signup.svg";
import SignUpForm from '../Form/SignUpForm';

const SignUp = () => {
    return (
        <>
            <h1>Create An Account</h1>
            <div className="column">
                <FormIllustration image={Image} altName="Sign Up" />
                <SignUpForm/>
            </div>
        </>
    );
};

export default SignUp;
