import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import profilePic from '../../public/images/profile.jpg'
import Link from 'next/link';
import { useRouter } from 'next/router';
import ArrowLeftIcon from '../icons/arrowLeftIcon';

const name = 'Malik Piara';
export const siteTitle = 'Moonwith';

/* ChatGPT suggested I used a map function and an array of objects in order to:
1. Improve code readibility.
2. Make adding and removing links easier.
*/
const navItems = [  { href: '/', label: 'Essays' },  { href: '/about', label: 'About' },  { href: '/projects', label: 'Projects' },  { href: '/contact', label: 'Contact' } ];

function getNavItemClassName(router, href) {
	return `${styles.navigationItem} ${
		router.pathname === href ? styles.navigationItemActive : ''
	}`
}

export default function HeaderMobile({ home, children }) {
	const router = useRouter();
    return (
		<>
		{home && (
        <header className={utilStyles.navbarMobile}>
				<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
					<Link href="/">
						<Image
							priority
							placeholder='blur'
							src={profilePic}
							className={utilStyles.borderCircle}
							height={50}
							width={50}
							alt={name}
						/>
					</Link>

					<h1 className={'siteTitle'}>
						<Link href="/" title="Malik's Blog">
							{siteTitle}
						</Link>
					</h1>
				</div>

				<ul
					style={{
						display: 'flex',
						flexWrap: 'nowrap',
						margin: '0px',
						padding: '0px',
						justifyContent: 'space-between',
					}}
				>
					{navItems.map((navItem) => (
						<Link key={navItem.href} href={navItem.href}>
							<li className={getNavItemClassName(router, navItem.href)}>
								{navItem.label}
							</li>
						</Link>
					))}
				</ul>
			</header>)}

	{!home && (
	<div className={styles.backToHome}>
		<Link href="/">
			<ArrowLeftIcon/>
			<span>Back to home</span>
		</Link>
	</div>
	)}
</>
    )
}