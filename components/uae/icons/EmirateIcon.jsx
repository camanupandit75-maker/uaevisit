/** @typedef {import('@/data/uae/emirates').Emirate['key']} EmirateKey */

const ICON_PROPS = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

/** Line icons in a shared 24×24 viewBox — outline-only, uniform stroke. */
const ICONS = {
  abuDhabi: (
  <>
    <path
      {...ICON_PROPS}
      d="M12 3.5 C7 6.5 5.5 12 6.5 16.5 C7.5 19.5 9.5 20.5 12 20.5 C14.5 20.5 16.5 19.5 17.5 16.5 C18.5 12 17 6.5 12 3.5 Z"
    />
    <circle {...ICON_PROPS} cx="12" cy="13" r="2.2" />
  </>
  ),
  dubai: (
  <>
    <path {...ICON_PROPS} d="M4.5 20 V14 H7.5 V20" />
    <path {...ICON_PROPS} d="M6 14 V11 L7.5 8 L9 11 V14" />
    <path {...ICON_PROPS} d="M10 20 V7.5 H13.5 V20" />
    <path {...ICON_PROPS} d="M11.75 7.5 V5 L13.5 7.5" />
    <path {...ICON_PROPS} d="M15 20 V12 H18 V20" />
    <path {...ICON_PROPS} d="M16.5 12 V9.5 L18 12" />
  </>
  ),
  sharjah: (
  <>
    <path {...ICON_PROPS} d="M5 7 C5 5.5 6.5 4.5 8 5.5 L12 8 L16 5.5 C17.5 4.5 19 5.5 19 7 V17 C19 18 18 18.5 17 18 L12 15.5 L7 18 C6 18.5 5 18 5 17 Z" />
    <path {...ICON_PROPS} d="M12 8 V15.5" />
  </>
  ),
  ajman: (
  <>
    <path
      {...ICON_PROPS}
      d="M5 17 C5 14 8 12.5 12 12.5 C16 12.5 19 14 19 17 C19 18.5 17.5 19.5 12 19.5 C6.5 19.5 5 18.5 5 17 Z"
    />
    <path {...ICON_PROPS} d="M12 12.5 V6" />
    <path {...ICON_PROPS} d="M12 6 L15.5 13" />
    <path {...ICON_PROPS} d="M9 17 L12 15 L15 17" />
  </>
  ),
  ummAlQuwain: (
  <>
    <path
      {...ICON_PROPS}
      d="M12 4.5 C9 6 7.5 9 7.5 12.5 C7.5 16.5 9.5 19 12 19.5 C14.5 19 16.5 16.5 16.5 12.5 C16.5 9 15 6 12 4.5 Z"
    />
    <path {...ICON_PROPS} d="M12 5 V18.5" />
    <path {...ICON_PROPS} d="M9 10 C11 9.5 13 9.5 15 10" />
  </>
  ),
  rasAlKhaimah: (
  <path
    {...ICON_PROPS}
    d="M2.5 19.5 L8 8.5 L11.5 13.5 L15.5 6 L21.5 19.5"
  />
  ),
  fujairah: (
  <>
    <path {...ICON_PROPS} d="M2.5 13.5 C6 10 9 12 12 10.5 C15 9 18 10.5 21.5 13.5" />
    <path {...ICON_PROPS} d="M2.5 17 C6.5 14 9.5 15.5 12 14 C14.5 12.5 17.5 14 21.5 17" />
    <path {...ICON_PROPS} d="M12 17 V20.5" />
  </>
  ),
};

/**
 * @param {{ variant: EmirateKey, className?: string }} props
 */
export default function EmirateIcon({ variant, className }) {
  return (
    <g className={className} transform="translate(88, 28)">
      {ICONS[variant] ?? null}
    </g>
  );
}
