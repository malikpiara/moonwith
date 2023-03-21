import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import profilePic from '../../public/images/profile.jpg'
import Link from 'next/link';
import { useRouter } from 'next/router';

const name = 'Malik Piara';
export const siteTitle = 'Moonwith';

/* ChatGPT suggested I used a map function and an array of objects in order to:
1. Improve code readibility.
2. Make adding and removing links easier.
*/
const navItems = [  { href: '/', label: 'Essays' },  { href: '/about', label: 'About' },  { href: '/projects', label: 'Projects' },  { href: '/contact', label: 'Get in touch' } ];

function getNavItemClassName(router, href) {
	return `${styles.navigationItem} ${
		router.pathname === href ? styles.navigationItemActive : ''
	}`
}

export default function Header() {
    const router = useRouter();
    return (
    <header className={styles.header}>
				<>
					<Link href={'/'}>
						<h1 className={'siteTitle'}>{siteTitle}</h1>
					</Link>

					<ul className={utilStyles.list}>
                    {navItems.map((navItem) => (
						<Link key={navItem.href} href={navItem.href}>
							<li className={getNavItemClassName(router, navItem.href)}>
								{navItem.label}
							</li>
						</Link>
					))}
					</ul>

					<Link href="/links">
						<Image
							priority
							placeholder='blur'
							src={profilePic}
							className={utilStyles.borderCircle}
							height={65}
							width={65}
							alt={name}
						/>
					</Link>
				</>
			</header>
)}