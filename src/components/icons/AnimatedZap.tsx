import { Zap } from 'lucide-react';
import styles from './icons.module.css';

/** Rayo de electricidad con chispas que saltan y leve parpadeo. */
export default function AnimatedZap({ className }: { className?: string }) {
  return (
    <span className={`${styles.zapWrap} ${className ?? ''}`}>
      <Zap className={`${styles.bolt} h-full w-full`} />
      <span className={`${styles.spark} ${styles.sparkA}`} />
      <span className={`${styles.spark} ${styles.sparkB}`} />
      <span className={`${styles.spark} ${styles.sparkC}`} />
    </span>
  );
}
