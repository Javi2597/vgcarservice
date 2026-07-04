import styles from './icons.module.css';

/** Reloj con las agujas girando (minutera rápida, horaria lenta). */
export default function AnimatedClock({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <line className={styles.handHour} x1="12" y1="12" x2="12" y2="7.5" />
      <line className={styles.handMinute} x1="12" y1="12" x2="15.5" y2="12" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
