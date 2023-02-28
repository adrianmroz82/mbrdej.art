import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm("service_25ss3ln", "template_u3x0bur", form.current!, "JnY10kn0LB3terrkm").then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  //handle  error icon and warning info ->
  // Please enter a valid email address.
  // Please enter a name

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="name" name="name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
export default ContactPage;

// service_25ss3ln
// template_u3x0bur
