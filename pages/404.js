import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout/Layout';
import utilStyles from '../styles/utils.module.css';

export default function NotFound() {
    return (
        <Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
        <h1 className={utilStyles.headingLg}>Uh-oh! The page you're looking for moved or doesn't exist anymore.</h1>
        <p>Please check if there's any mispelling or find my most popular blog posts and projects below.</p>

        <h2 className={utilStyles.headingMd}>Popular Posts</h2>

        <ul className={utilStyles.list}>
					
						<li className={utilStyles.recommendedEntry}>
							<Link href={`/posts/30day-ui`}>30 Days of UI</Link>

							<br />
							{/* <small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small> */}
						</li>

                        <li className={utilStyles.recommendedEntry}>
							<Link href={`/posts/luck`}>Create your own luck</Link>

							<br />
							{/* <small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small> */}
						</li>

                        <li className={utilStyles.recommendedEntry}>
							<Link href={`/posts/copy`}>Copy the work of others</Link>

							<br />
							{/* <small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small> */}
						</li>

                        <li className={utilStyles.recommendedEntry}>
							<Link href={`/posts/26`}>Advice from me at 26 years-old</Link>

							<br />
							{/* <small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small> */}
						</li>

                        <li className={utilStyles.recommendedEntry}>
							<Link href={`/posts/minority`}>The minority rule</Link>

							<br />
							{/* <small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small> */}
						</li>

                        <li className={utilStyles.recommendedEntry}>
							<Link href={`/posts/train`}>A train that can't be stopped</Link>

							<br />
							{/* <small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small> */}
						</li>

                        <li className={utilStyles.recommendedEntry}>
							<Link href={`/posts/mastery`}>Programming every day won't make you a better programmer</Link>

							<br />
							{/* <small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small> */}
						</li>

                        <li className={utilStyles.recommendedEntry}>
							<Link href={`/posts/rsms`}>Advice from Rasmus Andersson, the creator of the Inter</Link>

							<br />
							{/* <small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small> */}
						</li>
					
				</ul>
        </Layout>
    )
}