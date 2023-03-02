import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

/* export async function getStaticProps() {
	return { props: { isGreen: true } };
} */

export default function About() {
	return (
		<Layout wide>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={utilStyles.fullWidth}>
            <h1 className={utilStyles.headingSpecial}>
            👀 Friends who also write
            </h1>
                

                <div className={utilStyles.friendItem} onClick={() => window.open('https://hacdias.com/')}>
                    <h5>Henrique Dias</h5>
                    <small>hacdias.com</small>
                    <p>Web infrastructure, decentralized systems, identity and making tools for developers and users. Based in Eindhoven.</p>
                    # software engineering
                </div>
                <div className={utilStyles.friendItem} onClick={() => window.open('https://krabbe.dev/posts')}>
                    <h5>Johannes Krabbe</h5>
                    <small>krabbe.dev</small>
                    <p>Fellow friend from CODE. Exploring cyber security and computer science. Based in Berlin.</p>
                    # software engineering
                </div>
                <div className={utilStyles.friendItem} onClick={() => window.open('https://marianakobayashi.substack.com/')}>
                    <h5>Mariana Kobayashi</h5>
                    <small>marianakobayashi.substack.com</small>
                    <p>Personal development, reflections, emotional intelligence and productivity. Based in Dublin.</p>
                    # personal development
                </div>
                <div className={utilStyles.friendItem} onClick={() => window.open('https://www.svee.me/writing')}>
                    <h5>Svitlana Midianko</h5>
                    <small>svee.me</small>
                    <p>Product case studies, data, human behaviour, spirituality, psychadelics. Based in San Francisco.</p>
                    # product management
                </div>
                <div className={utilStyles.friendItem} onClick={() => window.open('https://sofiasimoesdealmeida.substack.com/')}>
                    <h5>Sofia Simões de Almeida</h5>
                    <small>sofiasimoesdealmeida.substack.com</small>
                    <p>Leadership, personal reflection, coaching, product management. Based in Dubai.</p>
                    # leadership
                </div>
                <div className={utilStyles.friendItem} onClick={() => window.open('https://gustavopimenta.com/articles')}>
                    <h5>Gustavo Pimenta</h5>
                    <small>gustavopimenta.com</small>
                    <p>Learning, productivity, personal reinvention, product management. Based in Lisbon.</p>
                    # learning
                </div>
                
				
			</section>
		</Layout>
	);
}
