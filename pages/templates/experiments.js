import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout/Layout';
import image from '../../public/images/templates/experiments.png'
import utilStyles from '../../styles/utils.module.css';
import Button from '../../components/common/Button';
import Image from 'next/image';

export default function Experiments() {
    function handleClick() {
        window.location = `https://upframed.notion.site/upframed/5889286aeb324779bc36e904af77f469?v=ef791f3c2df04d98b4bf176bf5a5e0bb`
    }
    return (
        <Layout wide>
			<Head>
				<title>{siteTitle}</title>
			</Head>
            <section className={`${utilStyles.flex} ${utilStyles.columnReverse} ${utilStyles.fullWidthTemplates}`}>
                <div className={utilStyles.templateImage}>
                <Image
							priority
							placeholder='blur'
							src={image}
							srcSet="2x"
							width={600}
							height={420}
							alt="Screenshot of Notion template."
                            onClick={handleClick}
						/>
                </div>
                <div>
                    <h1 className={utilStyles.headingXl}>👩‍🔬 Board of Experiments</h1>
                    <p><s>8€</s> Free</p>
                    <Button value="Duplicate Template" onClick={handleClick}/>
                    <p>I use this Notion template to map assumptions and turn product ideas into measurable experiments to make my teams move with confidence.</p>
                    <p>It can be used alongside the Lean Canvas to test assumptions at a macro level or for product discovery.</p>
                    <p>The mindset should be focused on reducing uncertainty and making the build-measure-learn feedback loop as short as possible.</p>
                    <p>How might we design an experiment to test our assumptions this week? How might do so in a way that takes less or no development time?</p>
                </div>
            </section>
        </Layout>
    )
}
