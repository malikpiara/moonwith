import profilePic from '../public/images/profile.jpg'
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import linkPageStyles from '../styles/linkPage.module.css';
import Link from 'next/link';

export default function LinkPage() {
    return (
        <>
        <div className={linkPageStyles.wrapper}>
        <Image
							priority
							placeholder='blur'
							src={profilePic}
							className={utilStyles.borderCircle}
							height={85}
							width={85}
							alt='Malik'
						/>
        <h1 className={linkPageStyles.name}>Malik Piara</h1>
        <p className={linkPageStyles.bio}>Here to listen, learn and help people grow.</p>
        <ul className={linkPageStyles.ul}>
            <li className={linkPageStyles.li}>
                <Link href="/" target="_blank">
                    <dt className={linkPageStyles.linkWrapper}>
                        <div className={linkPageStyles.icon}>
                            #
                        </div>
                        <div className={linkPageStyles.linkText}>
                            <p>My Personal Blog</p>
                        </div>
                    </dt>
                </Link>
            </li>
            <li className={linkPageStyles.li}>
                <Link href="https://instagram.com/earnestcards/" target="_blank">
                    <dt className={linkPageStyles.linkWrapper}>
                        <div className={linkPageStyles.icon}>
                            #
                        </div>
                        <div className={linkPageStyles.linkText}>
                            <p>Cards for Deeper Conversations</p>
                        </div>
                    </dt>
                </Link>
            </li>
        </ul>
        </div>
        </>
    )
}