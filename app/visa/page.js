import JsonLd from '@/components/seo/JsonLd';
import VisaHub from '@/components/uae/VisaHub';
import { buildVisaFaqSchema } from '@/lib/schema';

export const metadata = {
  title: 'UAE Visa Information — Discover the Emirates',
  description:
    'Look up UAE visa requirements by country — visa-free, visa-on-arrival, pre-arranged, and transit rules with official source links.',
};

export default function VisaPage() {
  return (
    <>
      <JsonLd data={buildVisaFaqSchema()} />
      <VisaHub />
    </>
  );
}
