/**
 * Static indicative exchange rates — no live API.
 * Values express how many units of each currency equal 1 AED.
 */
export const exchangeRates = {
  lastUpdated: '2026-07-01',
  fromAED: {
    USD: 0.272,
    EUR: 0.251,
    GBP: 0.215,
    INR: 22.89,
  },
};

/** @type {readonly ['USD', 'EUR', 'GBP', 'INR']} */
export const convertibleCurrencies = ['USD', 'EUR', 'GBP', 'INR'];
