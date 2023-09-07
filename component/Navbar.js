import { navigationItems } from '../constants/navItems';
import { useRouter } from 'next/router';
import styles from "../styles/Navbar.module.css";
import Link from 'next/link';
import { RiHome2Fill, RiInformationFill, RiRestaurant2Fill, RiNewspaperFill } from "react-icons/Ri";

const Navbar = () => {
    const router = useRouter();
    const currentPage = router.pathname;

    return (
        <>
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
            <nav className={styles.navIcons}>
                <Link href="/home" passHref className={styles.linkIcon}>
                    <RiHome2Fill />
                </Link>
                <Link href="/order" passHref className={styles.linkIcon}>
                    <RiRestaurant2Fill />
                </Link>
                <Link href="/blog" passHref className={styles.linkIcon}>
                    <RiNewspaperFill />
                </Link>
                <Link href="/about" passHref className={styles.linkIcon}>
                    <RiInformationFill />
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
