import React from "react";
import "../assets/styles/App.css";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import SignIn from "./Pages/SignIn";
import Result from "./Pages/Result";
import SignUp from "./Pages/SignUp";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

function App() {
    return (
        <AuthProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<PublicRouter />}>
                        <Route path="signup" element={<SignUp />} />
                        <Route path="login" element={<SignIn />} />
                    </Route>

                    <Route path="/*" element={<PrivateRouter />}>
                        <Route path="result/:id" element={<Result />} />
                        <Route path="quiz/:id" element={<Quiz />} />
                    </Route>
                </Routes>
            </Layout>
        </AuthProvider>
    );
}

export default App;
