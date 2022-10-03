import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const name = 'Malik Piara';
export const siteTitle = 'Moonwith'

export default function Layout({ children, home, wide }) {
  const router = useRouter()
    return (
      <div className={styles.containerWide}>
        <Head>
        
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Source+Serif+Pro:wght@400;600;700;900&display=swap" rel="stylesheet"/>
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

        <header id={utilStyles.navbarMobile}>
              <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
                <Link href="/">
                        <a>
                          <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={55}
                            width={55}
                            alt={name}
                          />
                        </a>
                </Link>

                <h1 className={"siteTitle"}>
                  <a href="/" title="Malik's Blog">{siteTitle}</a>
                </h1>
                </div>

              
                <ul style={{display: "flex", flexWrap: "nowrap", margin: "0px", padding: "0px", justifyContent:"space-between"}}>
                  <Link href="/"><li className={`${styles.navigationItem} ${router.pathname == "/" ? styles.navigationItemActive : ""}`}>Essays</li></Link>
                  <Link href="/about"><li className={`${styles.navigationItem} ${router.pathname == "/about" ? styles.navigationItemActive : ""}`}>About</li></Link>
                  <Link href="/projects"><li className={`${styles.navigationItem} ${router.pathname == "/projects" ? styles.navigationItemActive : ""}`}>Projects</li></Link>
                  <Link href="/contact"><li className={`${styles.navigationItem} ${router.pathname == "/contact" ? styles.navigationItemActive : ""}`}>Get in touch</li></Link>
                </ul>
              
        </header>
            
        <header className={wide? styles.headerBeige: styles.headerMw }>
            <>

            <Link href={'/'}>
            <h1 className={"siteTitle"}>{siteTitle}</h1>
            </Link>

            <ul className={utilStyles.list}>
                <Link href="/"><li className={`${styles.navigationItem} ${router.pathname == "/" ? styles.navigationItemActive : ""}`}>Essays</li></Link>
                <Link href="/about"><li className={`${styles.navigationItem} ${router.pathname == "/about" ? styles.navigationItemActive : ""}`}>About</li></Link>
                <Link href="/projects"><li className={`${styles.navigationItem} ${router.pathname == "/projects" ? styles.navigationItemActive : ""}`}>Projects</li></Link>
                <Link href="/contact"><li className={`${styles.navigationItem} ${router.pathname == "/contact" ? styles.navigationItemActive : ""}`}>Get in touch</li></Link>
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

        {!wide && (
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
         )}

         {wide && (
             <div className={styles.containerWide}>
              <main>{children}</main>
            </div>
         )}

        <footer>
          <span>Only you know who you can be</span>
        </footer>
      </div>
    );
  }