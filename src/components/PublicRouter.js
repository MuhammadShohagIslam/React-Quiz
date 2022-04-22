import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./../context/AuthContext";

const PublicRouter = () => {
    const { currentUser } = useAuth();
    return !currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRouter;
