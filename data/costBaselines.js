/**
 * TODO-verify: All per-night AED figures below are indicative estimates only.
 * Verify hotel, food, transport, and activity costs against current local pricing
 * before relying on these numbers for trip planning.
 */

/** @typedef {'budget' | 'midRange' | 'luxury'} TravelStyle */

/** @typedef {{
 *   hotel: number,
 *   food: number,
 *   transport: number,
 *   activities: number,
 * }} CostCategoryBaselines */

/** @typedef {Record<TravelStyle, CostCategoryBaselines>} EmirateCostBaselines */

/** @type {Record<string, EmirateCostBaselines>} */
export const costBaselines = {
  abuDhabi: {
    budget: { hotel: 280, food: 90, transport: 45, activities: 60 },
    midRange: { hotel: 520, food: 160, transport: 75, activities: 130 },
    luxury: { hotel: 1350, food: 380, transport: 160, activities: 320 },
  },
  dubai: {
    budget: { hotel: 320, food: 100, transport: 55, activities: 80 },
    midRange: { hotel: 580, food: 175, transport: 85, activities: 150 },
    luxury: { hotel: 1500, food: 420, transport: 180, activities: 380 },
  },
  sharjah: {
    budget: { hotel: 200, food: 70, transport: 35, activities: 40 },
    midRange: { hotel: 380, food: 130, transport: 60, activities: 90 },
    luxury: { hotel: 900, food: 280, transport: 120, activities: 200 },
  },
  ajman: {
    budget: { hotel: 180, food: 65, transport: 30, activities: 35 },
    midRange: { hotel: 340, food: 120, transport: 55, activities: 75 },
    luxury: { hotel: 750, food: 240, transport: 100, activities: 160 },
  },
  ummAlQuwain: {
    budget: { hotel: 160, food: 60, transport: 28, activities: 30 },
    midRange: { hotel: 300, food: 110, transport: 50, activities: 65 },
    luxury: { hotel: 650, food: 220, transport: 90, activities: 140 },
  },
  rasAlKhaimah: {
    budget: { hotel: 220, food: 75, transport: 40, activities: 55 },
    midRange: { hotel: 420, food: 140, transport: 65, activities: 110 },
    luxury: { hotel: 950, food: 300, transport: 130, activities: 240 },
  },
  fujairah: {
    budget: { hotel: 190, food: 68, transport: 32, activities: 45 },
    midRange: { hotel: 360, food: 125, transport: 58, activities: 85 },
    luxury: { hotel: 800, food: 260, transport: 110, activities: 180 },
  },
};

/** @type {readonly { value: TravelStyle, label: string }[]} */
export const travelStyleOptions = [
  { value: 'budget', label: 'Budget' },
  { value: 'midRange', label: 'Mid-range' },
  { value: 'luxury', label: 'Luxury' },
];

/**
 * @param {CostCategoryBaselines} categories
 * @returns {number}
 */
export function sumCategoryBaselines(categories) {
  return (
    categories.hotel +
    categories.food +
    categories.transport +
    categories.activities
  );
}
