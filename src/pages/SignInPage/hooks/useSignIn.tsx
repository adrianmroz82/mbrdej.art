import { useNavigate } from "react-router-dom";

import { FirebaseError } from "firebase/app";
import { SignInForm } from "../models/sign-on-form.model";
import { useAuth } from "../../../components/context/AuthProvider";

export function useSignIn() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const signIn = async ({ email, password }: SignInForm) => {
    try {
      await loginUser(email, password);
      navigate("/admin");
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // TODO: add snack bar to display error message
      }
    }
  };

  return signIn;
}
