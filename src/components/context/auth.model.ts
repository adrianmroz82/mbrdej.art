import { User, UserCredential } from "firebase/auth";

export interface AuthContextType {
  user: User | null;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  loading: boolean;
}
