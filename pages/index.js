import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import LoadMore from '../components/LoadMoreButton';
import PostPreview from '../components/post/PostPreview';
import { useState } from 'react';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
			isGreen: false,
		},
	};
}

export default function Home({ allPostsData }) {
	const [showMore, setShowMore] = useState(8);

	function handleClick() {
		setShowMore(showMore + 8);
	}

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<div>
					{allPostsData
						.map(({ id, title, contentPreview }) => (
							<PostPreview
								key={id}
								id={id}
								title={title}
								contentPreview={contentPreview}
							></PostPreview>
						))
						.slice(0, showMore)}
						<div className='gradient-overlay'></div>
				</div>

				<br />
				{showMore <= allPostsData.length && (
					<LoadMore label={'Load More Posts'} onClick={handleClick} />
				)}
			</section>
		</Layout>
	);
}
