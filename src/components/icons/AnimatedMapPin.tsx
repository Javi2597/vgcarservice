import { MapPin } from 'lucide-react';
import styles from './icons.module.css';

/** Pin de mapa con un anillo de "ping" tipo radar GPS. */
export default function AnimatedMapPin({ className }: { className?: string }) {
  return (
    <span className={`${styles.pinWrap} ${className ?? ''}`}>
      <span className={styles.ping} aria-hidden="true" />
      <MapPin className={`${styles.pin} h-full w-full`} />
    </span>
  );
}
