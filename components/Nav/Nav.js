import styles from "./nav.module.css";
import { useRouter } from 'next/router'

export default function Nav() {
const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <div onClick={() => router.push('/')}>Home</div>
      <div target ="_blank" onClick={() => window.location.href = 'https://julianehiem.dev/'}>Portfolio</div>
      <div onClick={() => window.location.href = 'https://github.com/JulianEhiem'}>Github</div>
    </div>
  );
}
