import Head from 'next/head';
import Image from 'next/image';
import image1 from '../public/images/o1.jpg'
import image2 from '../public/images/o2.jpg'
import Layout, { siteTitle } from '../components/layout/Layout';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
	return { props: { isGreen: true } };
}

export default function About() {
	return (
		<Layout wide>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section
				className={`${utilStyles.flex} ${utilStyles.columnReverse} ${utilStyles.fullWidthGrid}`}
			>
				<section className={`${utilStyles.flex} ${utilStyles.columnReverse}`}>
					<div>
						<h1 className={utilStyles.heading4Xl}>
              Only you know who you can be.
						</h1>
						<p>
              Moonwith is a place for people who believe they can become better than they were yesterday. A place for people who cultivate emotional intelligence and who aim to make life a little bit better for everyone around them, through the work they do.
						</p>
						<p>
              In this page you can find initiatives, apps, projects, events, communities started by me or by my friends, that foster connection, enable education and create more access to opportunities.
						</p>
						
					</div>

					<div className={utilStyles.shiftedImage}>
                        <div className={utilStyles.imageBase}>
						<Image
							priority
							placeholder='blur'
							src={image1}
							srcSet="2x"
							width={600}
							height={420}
							alt="Portrait of myself"
						/>
                        </div>
                        <div className={utilStyles.imageLeftShift}>
                        <Image
							priority
							placeholder='blur'
							src={image2}
							srcSet="2x"
							width={600}
							height={420}
							alt="Portrait of myself"
						/>
                        </div>
					</div>
                    
				</section>
			</section>

			
		</Layout>
	);
}
