import FormIllustration from "../FormIllustration/FormIllustration";
import Image from "../../assets/images/signup.svg";
import Form from "./../Form/Form";
import TextInput from "../Form/TextInput";
import CheckBox from "./../Form/CheckBox";
import Button from "../Form/Button";
import classes from "../../assets/styles/SignUp.module.css";

const SignUp = () => {
    return (
        <>
            <h1>Create An Account</h1>
            <div className="column">
                <FormIllustration image={Image} altName="Sign Up" />

                <Form className={`${classes.signup} `}>
                    <TextInput
                        type="text"
                        placeholder="Enter name"
                        icon="person"
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon="lock"
                    />
                    <TextInput
                        type="password"
                        placeholder="Confirm password"
                        icon="lock_clock"
                    />
                    <CheckBox type="checkbox">
                        I agree to the Terms & Conditions
                    </CheckBox>

                    <Button>
                        <span>Submit Now</span>
                    </Button>

                    <div className="info">
                        Already have an account? <a href="login.html">Login</a>{" "}
                        instead.
                    </div>
                </Form>
            </div>
        </>
    );
};

export default SignUp;
