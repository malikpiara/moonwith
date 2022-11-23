import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  return { props: {isGreen: true} };
}


export default function About() {
  return (
    <Layout wide>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.flex} ${utilStyles.columnReverse} ${utilStyles.fullWidthGrid}`}>

        <section className={`${utilStyles.flex} ${utilStyles.columnReverse}`}>

            <div>
            <h1 className={utilStyles.headingSpecial}>Talent is distributed globally but opportunities aren't. — I want to help change that.</h1>
            <p>
              My name is Malik and I work on initiatives that promote more access to opportunities for people who don't have them. My mission is to help build a world where more people can have the freedom to decide who they want to be.
            </p>
            <p>
              Moonwith is my digital home. The place where I share my thoughts on personal growth, emotional intelligence and product development.
            </p>
            <p>
              At the moment, I'm studying and working as teaching assistant for product management at CODE University in Berlin. Going through a 16-week design thinking program at D-School in Hasso Plattner Institute to gain more tools to tackle complex problems.
            </p>
            <p>
              In the first half of 2023, I'll start looking for a place where I can create impact as a Product Manager or start a new company.
            </p>
            </div>

            <div className={utilStyles.shiftedImage}>
            <Image
                    priority
                    src="/images/malik.webp"
                    width={3234}
                    height={2260}
                    srcSet="2x"
                    alt="Portrait of myself"
                  />
            </div>
        </section>

        </section>

      <section className={utilStyles.fullWidthGrid}>
        <h1 className={utilStyles.headingSpecial}>Here's what some people say about me</h1>
        <div>
          <div>
          <p>"I can't think of another word to describe Malik better than 'leader'. He knows how to manage, motivate and encourage a team to an extreme extent. he really cares for what he does which is to change the world for the better. I know you'll achieve great things. Keep pushing forward!"</p>
          <a href="https://nucabe.com/">— MANUEL (PRODUCT DESIGNER, YLD)</a>
          </div>

          <div>
          <p>"Malik's irreverence and continuous search for disrupting the old and creating new value for the world on the way has made him one of the most inspiring persons I've ever worked with."</p>
          
          <a href="https://www.linkedin.com/in/pedrohunter/">— PEDRO (CEO AT HUNTER. FORBES 30 UNDER 30)</a>
        </div>

        <div>
            <p>"Malik is a very passionate person about what he does and he always tries to find the best solution for the problems he faces. Also, he's always looking for new knowledge which helps him improve himself and his work. Curious, hard worker and unstoppable are three characteristics that make Malik one of the best people I've worked with."</p>
            <a href="https://hacdias.com/">— HENRIQUE (SOFTWARE ENGINEER, PROTOCOL LABS)</a>
        </div>

        <div>
              <p>"I was impressed by the focus and dedication that he had for all things related to what he was doing. He would read all the books, talk to the best professionals and surround himself with knowledge that allowed him to grow and learn. I am not exaggerating, he will improve exponentially using all the information he can find."</p>
              <a href="https://www.linkedin.com/in/ulisses-miguel-ferreira/">— ULISSES (SOFTWARE ENGINEER, CONSENSYS)</a>
            
        </div>
        </div>
        <div>
          <p>
            "Malik is reliable, dedicated and always upbeat. His ability to attack complex problem spaces and to dive deep without losing sight of goal makes him a great contributor in product discovery phases. Based on his strong inner drive, Malik is able to handle a high-volume workload. He consistently met or surpassed all weekly milestones while working on his Summer School project.
          <p/>

          <p>
            A key factor of Malik’s success is his ability to connect to co-workers and stakeholders easily. He quickly builds up reliable relationships and is able to use these to drive his topics forward.
          </p>

          <p>
            Curious and open-minded, Malik quickly learns to navigate in complex environments and challenging topics which allows him to provide valuable contributions for the company early on. He is always eager to learn, embraces change and is able to grow fast."
          </p>

          </p>
          <a href="https://www.linkedin.com/in/freudenreich/">— TOBIAS FREUDENREICH (DIRECTOR OF PRODUCT MANAGEMENT, XING)</a>

          <div>
              <p>"There is not a day I'm not impressed by how far Malik has come and everything he has accomplished in his yet short life. His drive and passion are not something you see everyday. He takes every advice in consideration, thinks about it, works on it, does his research, and comes back with his own approach on the subject. If you ask me, that's the best kind of learning. It's truly an honour to be a part of his journey, and I can't wait to see where it leads him. Somewhere amazing, I'm sure."</p>
              <a href="https://www.linkedin.com/in/joanavieirajoana/">— JO VIEIRA (CO-FOUNDER, LINEHEALTH)</a>
            </div>
        </div>
      </section>
    </Layout>
  );
}