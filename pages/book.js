import Head from 'next/head';
import Cal from "@calcom/embed-react";
import Layout, { siteTitle } from '../components/layout';

export default function Book() {
    return (
        <Layout children>
            <Head>
                <title>{siteTitle}</title>
            </Head>
      <div>
        <h3>Book an office hour with me below. We can talk about:</h3>
        <li>How to conduct user research.</li>
        <li>Identifying a suitable business model and taking steps to reduce risk.</li>
        <li>How to go about building the first working version of a product.</li>
        <li>What kind of mistakes to avoid when building a company.</li>
        <li>How to think about and shape new features.</li>
        <li>How to work in a team with multicultural backgrounds.</li>
        <br/>
            
        <Cal
            calLink="malikpiara"
            config={{
                notes: "CODE Office Hour",
                guests: ["malik.piara@code.berlin"],
              }}>
        </Cal>
      </div>
      </Layout>
    );
  }