import Head from 'next/head';
import Image from 'next/image';
import HeaderMobile from '../components/headerMobile';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const name = 'Malik Piara';
export const siteTitle = 'Moonwith';

export default function Layout({ children, home, wide }) {
	const router = useRouter();
	return (
		<div className={styles.containerWide}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta
					name="description"
					content="Malik's blog on programming, design and product development."
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<HeaderMobile/>

			<header className={wide ? styles.headerBeige : styles.headerMw}>
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

			{!wide && (
				<div className={styles.container}>
					<main>{children}</main>
					{!home && (
						<div className={styles.backToHome}>
							<Link href="/">← Back to home</Link>
						</div>
					)}
					<br />
				</div>
			)}

			{wide && (
				<div className={styles.containerWide}>
					<main>{children}</main>
				</div>
			)}

			<footer>
				<span>Only you know who you can be</span>
			</footer>
		</div>
	);
}
