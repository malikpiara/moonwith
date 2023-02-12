import profilePic from '../public/images/profile.jpg'
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import linkPageStyles from '../styles/linkPage.module.css';
import LinkItem from '../components/linkItem';

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
                <LinkItem url="/" label="My Personal Blog"/>
                <LinkItem url="https://instagram.com/earnestcards/" label="Cards for Deeper Conversations"/>
                <LinkItem url="https://instagram.com/likpiara/" label="Instagram"/>
                <LinkItem url="https://linkedin.com/in/malikpiara/" label="LinkedIn"/>
                <LinkItem url="https://twitter.com/malikpiara" label="Twitter"/>
                <LinkItem url="https://t.me/malikpiara" label="Telegram"/>
                <LinkItem url="https://wa.me/+351962119084" label="WhatsApp"/>
            </ul>
        </div>
        </>
    )
}