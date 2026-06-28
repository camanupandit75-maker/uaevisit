'use client';

import styles from './ContactForm.module.css';

const CONTACT_EMAIL = 'camanupandit75@gmail.com';

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = encodeURIComponent(
      `Discover the Emirates — message from ${name || 'visitor'}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.formNote}>
        Submitting opens your email app with this message pre-filled — nothing
        is sent from our servers.
      </p>

      <fieldset className={styles.fieldset}>
        <div className={styles.formRowGroup}>
          <div className={styles.formRow}>
            <label className={styles.formLabel} htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              className={styles.formInput}
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.formRow}>
            <label className={styles.formLabel} htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              className={styles.formInput}
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <label className={styles.formLabel} htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            className={styles.formTextarea}
            name="message"
            rows={5}
            required
          />
        </div>
      </fieldset>

      <button type="submit" className={styles.submitBtn}>
        Send via Email
      </button>
    </form>
  );
}
