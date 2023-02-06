import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Projects() {
	const projects = [
		{
			title: 'This Site',
			tags: ['web development'],
			description:
			<>
			<p>Every aspect of this platform was crafted from scratch by me. From the design to the frontend to the API that powers the comment section.</p>
			<p>A blog written in React (Next.js) enhanced by a Typescript API connected to a PostgreSQL database. Authentication is powered by Auth0.</p>
			</>
		},

		{title: 'Upframe (2016-2020)',
		description:
		<>
		<p>
		My pride and joy. Upframe was my first attempt at building a scalable organisation and business model. Boostrapped from highschool.
		</p>
		<p>
		Our aim was to help first-time founders get unstuck and to move
		faster with a sense of accountability. And to give them get a sense
		of community. The ways in which we did so changed over time, as we
		learned about the needs and constraints of the market.
		</p>
				<p>
					<a
						className="link"
						href="https://www.linkedin.com/company/upframe/"
						target="_blank" rel="noreferrer"
					>
		  The last iteration
					</a>{' '}
		was a platform that enabled first-time founders to find mentors and
		book video calls with them right away. Akin to Calendly with a
		powerful people search.
				</p>

		<p>
		We had recurring revenue, a poweful vision, a solid business model
		and the track record of enabling 1000+ conversations and video calls
		between mentors and mentees worldwide. From Portugal, to Nigeria to
		Pakistan. — Unfortunately, I made a lot of mistakes that led us to
		be in a difficult position and ultimately killed the company.
		</p>

		<p>
		I designed the platform (UX/UI), handled the business development,
		product discovery and requirements engineering. Recruited and led a
		team of 5 people and learned a great deal about internet software,
		B2B, intercultural differences and product management.
		</p>
		<Image
						priority
						src="/images/upf.png"
						className=""
						height={448}
						width={680}
						alt="screenshot from upframe"
					/>
		</>},
	
	{
		title: '351, the Portuguese Startup Community',
		description:
		<>
			<p>
            When I organised my first conference and startup events or created
            my first company, I was a teenager. I didn't have the experience or
            network so I had to spend a lot of time and energy to make it
            happen.
					</p>
					<p>
            After moving to Berlin and seeing how the rest of Europe operated, I
            created 351 with the goal of building a local startup scene that was
            more connected, inclusive and wise. Today, newcomers with energy and
            the right mindset can have access to key people and create the kind
            of impact that took me years to achieve.
					</p>

					<p>
            Today,{' '}
						<b>
              351 is the largest and most active startup community in Portugal
						</b>
            . I'm not able to claim responsability for that achievement as I'm
            no longer a part of it. But I'm happy something I started is still
            growing and producing the kind of impact than I wouldn't be able to
            sustain with the reliable leadership of{' '}
						<a
							href="https://www.linkedin.com/in/fernando-jardim/"
							target="_blank" rel="noreferrer"
						>
              Fernando Jardim
						</a>{' '}
            and other volunteers.{' '}
					</p>

					<p>
            If you want to get to know or keep up to date with the ever growing
            startup scene or get settled in Portugal, 351 might be a good first
            door for you.{' '}
						<a className="link" href="http://351.community/" target="_blank" rel="noreferrer">
              Join the Slack Community
						</a>
            .
					</p>
		</>
	},
	{
		title: 'Fuzzboard.com (2020 - 2022)',
		description:
		<>
		<p>
            This lay-off crisis brought up by Covid-19 inspired me to build{' '}
						<a
							className="link"
							href="https://www.linkedin.com/company/fuzzboard/"
							target="_blank" rel="noreferrer"
						>
              a central place for startup jobs in Portugal
						</a>
            . Until then you’d have to go through multiple sources to hear about
            interesting roles at Portuguese startups. They also didn't have many
            resources to spread the word effectively.{' '}
					</p>

					<p>
            The project taught me distribution is often more important than the
            product itself. Although any developer can build a job board, there
            are few that would be able to do so in strong collaboration with the
            government agency for entrepreneurship and startups, key
            accelerators and the largest startup community in the country.
					</p>

					<p>
            This year I adopted the platform to aid{' '}
						<a
							href="https://sifted.eu/articles/how-to-help-ukraine-tech/"
							target="_blank" rel="noreferrer"
						>
              Casafari
						</a>{' '}
            in helping thousands of refugees escaping the war in Ukraine get a
            job in Europe or remotely. In the process, I had to make many
            product decisions in the blink of an eye, deal with hundreads of
            requests, build integrations, pull all-nighters and change the scope
            to include the whole of Europe.
					</p>

					<p>
            Built an API, multiple Telegram and Twitter bots, and a Slack
            integration. Helped 400+ people looking for a job after escaping the
            war. Wouldn't be able to do so without the incredible support of{' '}
						<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              MongoDB
						</a>{' '}
            and generous donations from people I don't know.{' '}
					</p>

					<p>
            I burned out because I didn't put myself first and that was a lesson
            too: In order to take care of others, we need to take care of
            ourselves first. Fuzzboard was eventually absorbed by{' '}
						<a
							className="link"
							href="http://employukraine.org/"
							target="_blank" rel="noreferrer"
						>
              employukraine.org
						</a>{' '}
            because that was the most impactful way of helping people in the
            long-run.{' '}
					</p>
		</>
	}
	]
	const project = projects.map(item => (
		<>
		<div className='utilStyles.projectWrapper'>
			<h2 className={utilStyles.headingLg}>{item.title}</h2>
			<p>{item.description}</p>
		</div>
		</>
		))
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section>
				<h1 className={utilStyles.heading2Xl}>Projects</h1>

				<p>
          We may not get picked today, tomorrow or the day after. In fact, the
          phone might never ring. But we don't have to wait around. We can
          decide that we will pick ourselves. Regardless of whether someone out
          there is listening. — We can choose to do the work, to write a new
          essay, paint a new canvas, build a new product.
				</p>

				<p>
          Here's is an overview of some of the most interesting things I created until this point.
				</p>

				<section>
					{project}
				</section>
			</section>
		</Layout>
	);
}
