import Head from 'next/head';
import Header from '../components/header';
import HeaderMobile from '../components/headerMobile';
import Footer from '../components/footer';
import styles from './layout.module.css';
import Link from 'next/link';
import React from 'react';

const name = 'Malik Piara';
export const siteTitle = 'Moonwith';

export default function Layout({ children, home, wide }) {
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

			<Header/>

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

			{/* This is no longer a real footer. TODO */}
			<Footer/>
		</div>
	);
}
