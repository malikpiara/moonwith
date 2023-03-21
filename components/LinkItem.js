import Link from 'next/link';
import linkPageStyles from '../styles/linkPage.module.css';

export default function LinkItem (props) {
    return (
        <li className={linkPageStyles.li}>
            <Link href={props.url} target="_blank">
                <dt className={linkPageStyles.linkWrapper}>
                    <div className={linkPageStyles.icon}>
                        #
                    </div>
                    <div className={linkPageStyles.linkText}>
                        <p>{props.label}</p>
                    </div>
                </dt>
            </Link>
        </li>
    )
}
