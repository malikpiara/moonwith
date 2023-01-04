import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const name = 'Malik Piara';
export const siteTitle = 'Moonwith';

export default function HeaderMobile() {
	const router = useRouter();
    return (
        <>
        <header id={utilStyles.navbarMobile}>
				<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
					<Link href="/">
						<Image
							priority
							src="/images/profile.jpg"
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
					<Link href="/">
						<li
							className={`${styles.navigationItem} ${
								router.pathname == '/' ? styles.navigationItemActive : ''
							}`}
						>
              Essays
						</li>
					</Link>
					<Link href="/about">
						<li
							className={`${styles.navigationItem} ${
								router.pathname == '/about' ? styles.navigationItemActive : ''
							}`}
						>
              About
						</li>
					</Link>
					<Link href="/projects">
						<li
							className={`${styles.navigationItem} ${
								router.pathname == '/projects'
									? styles.navigationItemActive
									: ''
							}`}
						>
              Projects
						</li>
					</Link>
					<Link href="/contact">
						<li
							className={`${styles.navigationItem} ${
								router.pathname == '/contact' ? styles.navigationItemActive : ''
							}`}
						>
              Get in touch
						</li>
					</Link>
				</ul>
			</header>
        </>
    )
}