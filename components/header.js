import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const name = 'Malik Piara';
export const siteTitle = 'Moonwith';

export default function Header() {
    const router = useRouter();
    return (
    <header className={styles.header}>
				<>
					<Link href={'/'}>
						<h1 className={'siteTitle'}>{siteTitle}</h1>
					</Link>

					<ul className={utilStyles.list}>
						<Link
							className={`${styles.navigationItem} ${
								router.pathname == '/' ? styles.navigationItemActive : ''
							}`}
							href="/"
						>
              Essays
						</Link>
						<Link
							className={`${styles.navigationItem} ${
								router.pathname == '/about' ? styles.navigationItemActive : ''
							}`}
							href="/about"
						>
              About
						</Link>
						<Link
							className={`${styles.navigationItem} ${
								router.pathname == '/projects'
									? styles.navigationItemActive
									: ''
							}`}
							href="/projects"
						>
              Projects
						</Link>
						<Link
							className={`${styles.navigationItem} ${
								router.pathname == '/contact' ? styles.navigationItemActive : ''
							}`}
							href="/contact"
						>
              Get in touch
						</Link>
					</ul>

					<Link href="/">
						<Image
							priority
							src="/images/profile.jpg"
							className={utilStyles.borderCircle}
							height={65}
							width={65}
							alt={name}
						/>
					</Link>
				</>
			</header>
)}