import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscriber;
    }, []);

    const signUp = async (email, password, username) => {
        await createUserWithEmailAndPassword(auth, email, password);
        const curUser = auth.currentUser;
        await updateProfile(curUser, {
            displayName: username,
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        });
    };

    const logIn = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const value = {
        currentUser,
        signUp,
        logIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
