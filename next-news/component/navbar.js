import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/feed/1')}>HeadLine</div>
      <div onClick={() => router.push('/sports/1')}>Sports</div>
      <div onClick={() => router.push('/business/1')}>Business</div>
      <div onClick={() => router.push('/technology/1')}>Technology</div>
      <div onClick={() => router.push('/science/1')}>Science</div>
      <div onClick={() => router.push('/health/1')}>Health</div>
      <div onClick={() => router.push('/entertainment/1')}>Entertainment</div>
 
    </div>
  );
};