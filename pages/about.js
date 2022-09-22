import Head from 'next/head';
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

export default function About() {
  return (
    <Layout children>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1 className={utilStyles.headingXl}>About me</h1>
      
        <section className={utilStyles.headingMd}>
            <p>Talent is distributed globally but opportunities aren't. — I want to help change that.</p>
        </section>

        <section>
            <p>My name is Malik and I work on initiatives that promote more access to opportunities for people who don't have them. My mission is to help build a world where more people can have the freedom to decide who they want to be.</p>
            <p>Moonwith is my digital home. The place where I share my thoughts on personal growth, emotional intelligence and product development.</p>
            <p>As of October, I'm starting as teaching assistant for product management at CODE University. And a design thinking 16-week program at Hasso Plattner Institute of design (D-School). </p>
        </section>

        <section>
            <h1>Here's what some people say about me</h1>
            <p>"I can't think of another word to describe Malik better than 'leader'. He knows how to manage, motivate and encourage a team to an extreme extent. he really cares for what he does which is to change the world for the better. I know you'll achieve great things. Keep pushing forward!"</p>
            <a href="https://nucabe.com/">— MANUEL (PRODUCT DESIGNER, YLD)</a>

            <p>"Malik is reliable, dedicated and always upbeat. His ability to attack complex problem spaces and to dive deep without losing sight of goal makes him a great contributor in product discovery phases. Based on his strong inner drive, Malik is able to handle a high-volume workload. He consistently met or surpassed all weekly milestones while working on his Summer School project.

            A key factor of Malik’s success is his ability to connect to co-workers and stakeholders easily. He quickly builds up reliable relationships and is able to use these to drive his topics forward.

            Curious and open-minded, Malik quickly learns to navigate in complex environments and challenging topics which allows him to provide valuable contributions for the company early on. He is always eager to learn, embraces change and is able to grow fast."</p>
            <a href="https://www.linkedin.com/in/freudenreich/">— TOBIAS FREUDENREICH (DIRECTOR OF PRODUCT MANAGEMENT, XING)</a>

            <p>"Malik's irreverence and continuous search for disrupting the old and creating new value for the world on the way has made him one of the most inspiring persons I've ever worked with."</p>
            <a href="https://www.linkedin.com/in/pedrohunter/">— PEDRO (CEO AT HUNTER. FORBES 30 UNDER 30)</a>

            <p>"Malik is a very passionate person about what he does and he always tries to find the best solution for the problems he faces. Also, he's always looking for new knowledge which helps him improve himself and his work. Curious, hard worker and unstoppable are three characteristics that make Malik one of the best people I've worked with."</p>
            <a href="https://hacdias.com/">— HENRIQUE (SOFTWARE ENGINEER, PROTOCOL LABS)</a>

            <p>"There is not a day I'm not impressed by how far Malik has come and everything he has accomplished in his yet short life. His drive and passion are not something you see everyday. He takes every advice in consideration, thinks about it, works on it, does his research, and comes back with his own approach on the subject. If you ask me, that's the best kind of learning. It's truly an honour to be a part of his journey, and I can't wait to see where it leads him. Somewhere amazing, I'm sure."</p>
            <a href="https://www.linkedin.com/in/joanavieirajoana/">— JO VIEIRA (CO-FOUNDER, LINEHEALTH)</a>

            <p>"I was impressed by the focus and dedication that he had for all things related to what he was doing. He would read all the books, talk to the best professionals and surround himself with knowledge that allowed him to grow and learn. I am not exaggerating, he will improve exponentially using all the information he can find."</p>
            <a href="https://www.linkedin.com/in/ulisses-miguel-ferreira/">— ULISSES (SOFTWARE ENGINEER, CONSENSYS)</a>
        </section>

    </Layout>
  );
}