import { ChangeEvent, FormEvent, useState } from "react";
import { useSignIn } from "./hooks/useSignIn";
import { SignInForm } from "./models/sign-on-form.model";

export function SignInPage() {
  const [formData, setFormData] = useState<SignInForm>({ email: "", password: "" });

  const signIn = useSignIn();

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    await signIn({ email, password });
  };

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSignIn}>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleOnInputChange} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleOnInputChange}
      />
      <button type="submit">Sign In</button>
    </form>
  );
}
