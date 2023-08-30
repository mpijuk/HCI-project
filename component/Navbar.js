import { navigationItems } from '../constants/navItems';
import { useRouter } from 'next/router';
import styles from "../styles/Navbar.module.css";
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();
    const currentPage = router.pathname;

    return (
        <nav className={styles.navTabs}>
            {navigationItems.map(({ label, path }) => (
                <Link href={path} key={label} passHref className={styles.link}>
                    <li
                        key={label}
                        className={
                            currentPage === path
                                ? styles.active
                                : ''
                        }
                    >
                        {label}
                    </li>
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;