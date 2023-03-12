import styles from "./ContactPage.module.scss";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xjvdorvl");

  //   if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      {state.errors.length
        ? state.errors.map((e) => (
            <p key={e.message}>{e.code === "EMPTY" && "Uzupełnij pola przed wysłaniem wiadomości"}</p>
          ))
        : null}
      {state.succeeded ? <p>Dziękujemy za wiadomość!</p> : null}
      <button type="submit" disabled={state.submitting}>
        Wyślij
      </button>
    </form>
  );
};

export default ContactPage;
