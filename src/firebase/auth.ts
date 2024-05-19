import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
