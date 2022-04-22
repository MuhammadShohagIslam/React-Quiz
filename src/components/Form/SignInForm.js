import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";
import { useAuth } from "./../../context/AuthContext";

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { logIn } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setLoading(true);
            setError("");
            await logIn(email, password);
            setLoading(false);
            navigate("/");
            setError("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Login Failed, Please Try Again");
        }
    };

    return (
        <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter email"
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

            <Button disabled={loading} type="submit">
                <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Don't have an account?
                <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
};

export default SignInForm;
