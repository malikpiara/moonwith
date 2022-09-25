import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Malik Piara';
export const siteTitle = 'Moonwith'

export default function Layout({ children, home }) {
    return (
      <div className={styles.containerWide}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Malik's blog on programming, design and product development."
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
          
        <header className={styles.headerMw}>
          
            <>
            <Link href={'/'}>
            <h1 className={"siteTitle"}>{siteTitle}</h1>
            </Link>
            

            <ul className={utilStyles.list}>
                <Link href="/"><li className={styles.navigationItem}>Essays</li></Link>
                <Link href="/about"><li className={styles.navigationItem}>About</li></Link>
                <Link href="#"><li className={styles.navigationItem}>Projects</li></Link>
                <Link href="/contact"><li className={styles.navigationItem}>Get in touch</li></Link>
              </ul>

              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={65}
                    width={65}
                    alt={name}
                  />
                </a>
              </Link>
            </>

        </header>
        <div className={styles.container}>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
          <br/>
        </div>
        <footer>
          <span>Only you know who you can be</span>
        </footer>
      </div>
    );
  }