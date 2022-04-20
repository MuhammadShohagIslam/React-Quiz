import "../assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import SignIn from "./Pages/SignIn";
import Result from "./Pages/Result";
import SignUp from "./Pages/SignUp";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </Layout>
    );
}

export default App;
