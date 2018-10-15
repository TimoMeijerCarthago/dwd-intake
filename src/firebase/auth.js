import { auth } from './firebase'

// Sign Up
export const doCreateUserWithEmailAndPassword = async(email, password) => {
    const response = await auth.createUserWithEmailAndPassword(email, password)
    await response.user.sendEmailVerification()
    return response
}

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password)

// Sign out
export const doSignOut = () =>
    auth.signOut()
