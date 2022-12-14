import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export async function loadShortenerLinks() {
	// Call piara.li endpoint to get links that were shortened.
	const res = await fetch('https://piara.li/api');
	const data = await res.json();
	return data;
}

export async function getStaticProps() {
	const links = await loadShortenerLinks();
	return {
		props: {
			links,
		},
		revalidate: 10,
	};
}

export default function Projects({ links }) {
	return (
		<Layout children>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section>
				<h1 className={utilStyles.heading2Xl}>Piara.li: A url shortener</h1>

				<p>
          My first Node.js project. The key-value pairs displayed below are
          being fetched directly from the API 🎉
				</p>

				<p>
          Keys displayed in the left refer to the path entered after{' '}
					<a href="https://piara.li/api">piara.li/</a> and return the link in
          the right.
				</p>

				<div className={utilStyles.table2Colors}>
					{Object.entries(links).map(([key, value]) => (
						<div className={utilStyles.flex} key={key}>
							<div>{key}</div>
							<div>{value}</div>
						</div>
					))}
				</div>
			</section>
		</Layout>
	);
}
