import BudgetEstimator from '@/components/uae/BudgetEstimator';

export const metadata = {
  title: 'Trip Budget — Discover the Emirates',
  description:
    'Estimate your UAE trip budget in AED with indicative conversions to USD, EUR, GBP, and INR.',
};

export default function BudgetPage() {
  return <BudgetEstimator />;
}
