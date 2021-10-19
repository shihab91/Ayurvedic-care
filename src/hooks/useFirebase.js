import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("")
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
        })
    }, [])

    const handleCreateNewUser = () => {
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
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    return { user, handleGoogleSignIn, setEmail, setPassword, error, email, password, handleSetEmail, handleSetPassword, handleCreateNewUser, logOut, handleSetName, logIn, setUser, setError, setUserName }
}
export default useFirebase;