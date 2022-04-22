import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { signUp } = useAuth();
    const navigator = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Password Does Not Match!");
            return false;
        }
        try {
            setLoading(true);
            setError("");
            await signUp(email, password, username);
            navigator('/')
            setError("");
            setUsername("");
            setAgree("");
            setEmail("");
            setConfirmPassword("");
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Sign Up Failed, Try Again!");
        }
    };

    return (
        <Form method="POST" style={{ height: "500px" }} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter name"
                icon="person"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
                type="text"
                placeholder="Enter Email"
                icon="alternate_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Enter password"
                icon="lock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Confirm password"
                icon="lock_clock"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <CheckBox
                type="checkbox"
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
            >
                I agree to the Terms & Conditions
            </CheckBox>

            <Button disabled={loading} type="submit">
                <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
};

export default SignUpForm;
