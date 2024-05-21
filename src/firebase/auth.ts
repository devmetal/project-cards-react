import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "./app";

const auth = getAuth(app);

export default auth;

export async function loginWithCreds(email: string, password: string) {
  try {
    const creds = await signInWithEmailAndPassword(auth, email, password);
    return creds;
  } catch (err) {
    return null;
  }
}

export async function registerWithCreds(email: string, password: string) {
  try {
    const creds = await createUserWithEmailAndPassword(auth, email, password);
    return creds;
  } catch (err) {
    return null;
  }
}
