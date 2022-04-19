import FormIllustration from "../FormIllustration/FormIllustration";
import Image from "../../assets/images/login.svg";
import Form from "./../Form/Form";
import TextInput from "./../Form/TextInput";
import Button from "./../Form/Button";
import classes from "../../assets/styles/SignIn.module.css";

const SignIn = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div class="column">
                <FormIllustration image={Image} altName="Login" />
                <Form className={`${classes.login}`}>
                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon="lock"
                    />

                    <Button>Submit Now</Button>

                    <div className="info">
                        Don't have an account?
                        <a href="signup.html">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
};

export default SignIn;
