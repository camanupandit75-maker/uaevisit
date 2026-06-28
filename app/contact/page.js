import ContactForm from '@/components/uae/ContactForm';
import StaticPageShell from '@/components/uae/StaticPageShell';
import styles from '@/components/uae/StaticPageShell.module.css';

const CONTACT_EMAIL = 'camanupandit75@gmail.com';

export const metadata = {
  title: 'Contact — Discover the Emirates',
  description:
    'Get in touch with Discover the Emirates — questions, partnership inquiries, or feedback.',
};

export default function ContactPage() {
  return (
    <StaticPageShell
      eyebrow="Reach Out"
      title="Get in Touch"
      intro="Questions, partnership inquiries, or feedback — we'd like to hear from you."
    >
      <section className={styles.contentSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tickRule} aria-hidden="true" />
          <h2 className={styles.sectionTitle}>Email</h2>
        </div>
        <a className={styles.contactEmail} href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tickRule} aria-hidden="true" />
          <h2 className={styles.sectionTitle}>Send a message</h2>
        </div>
        <ContactForm />
      </section>
    </StaticPageShell>
  );
}
