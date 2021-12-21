import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleSetEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value);
    }
    const handleSetPassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value);
    }
    const handleSetName = (e) => {
        setName(e.target.value)
    }
    const handleGoogleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    const handleCreateNewUser = () => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => { setName(result.displayName) })
            .catch(err => setError(err.message))
    }
    const logIn = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) })
    }
    return { user, handleGoogleSignIn, setEmail, setPassword, error, email, password, handleSetEmail, handleSetPassword, handleCreateNewUser, logOut, handleSetName, logIn, setUser, setError, setUserName, setIsLoading, isLoading }
}
export default useFirebase;