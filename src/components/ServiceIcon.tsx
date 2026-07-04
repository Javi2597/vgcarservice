import styles from './ServiceIcon.module.css';

export type ServiceIconName = 'gears' | 'spray' | 'shine' | 'checklist';

const SVG_PROPS = {
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: '#22D3EE',
  strokeWidth: 2.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  className: 'overflow-visible',
};

/** Íconos SVG animados de los servicios (animaciones en ServiceIcon.module.css). */
export default function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const wrap = (children: React.ReactNode) => (
    <span className={`inline-flex ${className ?? ''}`}>
      <svg {...SVG_PROPS} width="100%" height="100%">
        {children}
      </svg>
    </span>
  );

  if (name === 'gears') {
    return wrap(
      <>
        <g className={styles.gearBig}>
          <circle cx="26" cy="36" r="10" />
          <circle cx="26" cy="36" r="3.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect
              key={deg}
              x="24.5"
              y="21"
              width="3"
              height="5"
              rx="1"
              transform={deg ? `rotate(${deg} 26 36)` : undefined}
            />
          ))}
        </g>
        <g className={styles.gearSmall}>
          <circle cx="42" cy="22" r="6" />
          <circle cx="42" cy="22" r="2.2" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <rect
              key={deg}
              x="40.75"
              y="12"
              width="2.5"
              height="4"
              rx="1"
              transform={deg ? `rotate(${deg} 42 22)` : undefined}
            />
          ))}
        </g>
      </>
    );
  }

  if (name === 'spray') {
    return wrap(
      <>
        {/* pistola de pintura */}
        <rect x="10" y="10" width="10" height="20" rx="2" />
        <rect x="13" y="4" width="4" height="7" rx="1" />
        <rect x="6" y="22" width="4" height="8" rx="1.5" />
        {/* niebla de spray */}
        <circle className={styles.mist} cx="16" cy="7" r="1" fill="#22D3EE" stroke="none" />
        <circle
          className={`${styles.mist} ${styles.mist2}`}
          cx="16"
          cy="7"
          r="1.2"
          fill="#22D3EE"
          stroke="none"
        />
        <circle
          className={`${styles.mist} ${styles.mist3}`}
          cx="16"
          cy="7"
          r="1"
          fill="#22D3EE"
          stroke="none"
        />
        <circle
          className={`${styles.mist} ${styles.mist4}`}
          cx="16"
          cy="7"
          r="1.3"
          fill="#22D3EE"
          stroke="none"
        />
        <circle
          className={`${styles.mist} ${styles.mist5}`}
          cx="16"
          cy="7"
          r="1"
          fill="#22D3EE"
          stroke="none"
        />
        {/* panel siendo pintado */}
        <clipPath id="svcPanelClip">
          <rect x="30" y="36" width="26" height="16" rx="3" />
        </clipPath>
        <rect x="30" y="36" width="26" height="16" rx="3" />
        <g clipPath="url(#svcPanelClip)">
          <rect className={styles.panelFill} x="30" y="36" width="0" height="16" fill="#22D3EE" stroke="none" />
        </g>
      </>
    );
  }

  if (name === 'shine') {
    return wrap(
      <>
        <clipPath id="svcCarClip">
          <path d="M10,40 L10,36 C10,32 14,28 20,28 L26,28 C29,28 31,29 33,31 L38,36 L54,36 C56,36 57,38 57,40 L57,42 L10,42 Z" />
        </clipPath>
        <path d="M10,40 L10,36 C10,32 14,28 20,28 L26,28 C29,28 31,29 33,31 L38,36 L54,36 C56,36 57,38 57,40 L57,42 L10,42 Z" />
        <circle cx="20" cy="44" r="4" />
        <circle cx="46" cy="44" r="4" />
        <g clipPath="url(#svcCarClip)">
          <rect className={styles.shine} x="0" y="24" width="8" height="24" fill="#67E8F9" stroke="none" />
        </g>
        <path
          className={styles.sparkle}
          d="M16,20 L17,23 L20,24 L17,25 L16,28 L15,25 L12,24 L15,23 Z"
          fill="#67E8F9"
          stroke="none"
        />
        <path
          className={`${styles.sparkle} ${styles.sparkle2}`}
          d="M46,16 L47,19 L50,20 L47,21 L46,24 L45,21 L42,20 L45,19 Z"
          fill="#67E8F9"
          stroke="none"
        />
        <path
          className={`${styles.sparkle} ${styles.sparkle3}`}
          d="M34,44 L34.7,46 L36.5,46.7 L34.7,47.5 L34,49.5 L33.3,47.5 L31.5,46.7 L33.3,46 Z"
          fill="#67E8F9"
          stroke="none"
        />
      </>
    );
  }

  // checklist
  return wrap(
    <>
      <rect x="16" y="10" width="32" height="44" rx="4" />
      <rect x="25" y="6" width="14" height="6" rx="2" />
      <path className={styles.check} d="M21,24 L27,30 L41,16" strokeWidth="3" />
      <rect x="22" y="38" width="20" height="2" rx="1" fill="#9CA3AF" stroke="none" />
      <rect x="22" y="44" width="14" height="2" rx="1" fill="#9CA3AF" stroke="none" />
    </>
  );
}
