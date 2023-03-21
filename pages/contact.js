import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/Layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Contact() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section>
				<h1 className={utilStyles.heading2Xl}>Get in touch with me</h1>

				<section>
					<p>
            A thousand people made me. Wouldn&apos;t be here without them. I&apos;ll never say no to coffee or to sharing what I know with you. I might need a gentle nudge but please don't shy away.
					</p>
					<h2 className={utilStyles.headingLg}>Around the web</h2>
					<p>
            I share content related with emotional intelligence, startups, product
            enablement and my personal projects.
					</p>
					<ol>
						<li>
							<a
								className='link'
								href='https://curius.app/malik-piara'
								target="_blank" rel="noreferrer"
							>
								Curious.
							</a> Find the best content I read on the web right away.
						</li>
						<li>
							<a
								className="link"
								href="https://twitter.com/malikpiara"
								target="_blank" rel="noreferrer"
							>
                Twitter.
							</a>
						</li>
						<li>
							<a
								className="link"
								href="https://instagram.com/likpiara/"
								target="_blank" rel="noreferrer"
							>
                Instagram.
							</a>
						</li>
						<li>
							<a
								className="link"
								href="https://linkedin.com/in/malikpiara/"
								target="_blank" rel="noreferrer"
							>
                Linkedin.
							</a>
						</li>
					</ol>
				</section>

				<section>
					<h2 className={utilStyles.headingLg}>Reach me directly</h2>
					<ol>
						<li>
							<a className="link" href="mailto:malik@hey.com" target="_blank" rel="noreferrer">
                malik@hey.com.
							</a>{' '}
              I take time to reply because my priorities are often elsewhere.
              Please don&apos;t take it personally.
						</li>
						<li>
							<a
								className="link"
								href="https://t.me/malikpiara"
								target="_blank" rel="noreferrer"
							>
                @malikpiara on Telegram.
							</a> You might be greeted by my bot.
						</li>
					</ol>
				</section>

			<section>
			<h2 className={utilStyles.headingLg} id="coworking">Join my Coworking Fridays</h2>
			<p>If you&apos;re in Berlin, I&apos;m happy to invite you to a day at <Link href="https://factoryberlin.com/" target={'_blank'}>Factory Berlin</Link>. You can come as my guest and work alongside me and my teammates from <Link href="https://circlesquare.app/" target={'_blank'}>CircleSquare</Link>. Reach out to me and I&apos;ll get back to you.</p>
			</section>
			</section>
		</Layout>
	);
}
