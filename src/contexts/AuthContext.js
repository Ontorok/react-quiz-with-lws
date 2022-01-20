import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import '../firebase';

export const AuthContext = React.createContext();


const AuthProvider = (props) => {
    const { children } = props;

    const [loading, setLoading] = useState(true);
    const [authUser, setAuthUser] = useState();

    useEffect(() => {
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthUser(user);
            setLoading(false)
        })

        return unsubscribe
    }, [])

    // signup function
    async function signup(email, password, username) {

        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: username
        })

        const user = auth.currentUser;
        setAuthUser({ ...user })

    }

    // login function
    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)

    }
    // logout function
    function logout(email, password) {
        const auth = getAuth();
        return signOut(auth)

    }

    const value = {
        authUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}

export default AuthProvider