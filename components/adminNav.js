import styles from '../styles/utils.module.css';
import SpeechBubble from './icons/speechIcon.js';
import Heart from './icons/heartIcon.js';
import PostsIcon from './icons/postsIcon.js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GateIcon from './icons/worldIcon';
import WorldIcon from './icons/worldIcon';

export default function AdminNav({onClick}) {
    function getNavItemClassName(router, href) {
        return `${styles.adminNavItem} ${
            router.pathname === href ? styles.adminNavItemActive : ''
        }`
    }

    const router = useRouter();

    return (
        <div className={styles.adminNav}>
				
				<div>
				    {/* <Button onClick={onClick} value="+ New Post"/> */}
				    <div className={getNavItemClassName(router, "/admin")} >
                        <SpeechBubble/>
                        <Link href="/admin/">Comments</Link>
                    </div>
				    <div className={getNavItemClassName(router,"/admin/subscribers")}>
                        <Heart/>
                        <Link href="/admin/subscribers">Subscribers</Link>
                    </div>
                    <div onClick={onClick} className={getNavItemClassName(router, "/admin/post")} >
                        <PostsIcon/>
                        <Link href="#">See Posts</Link>
                    </div>
                    <div className={getNavItemClassName(router, "/admin/linkpage")} >
                        <WorldIcon/>
                        <Link href="/admin/linkpage">LinkPage</Link>
                    </div>
				</div>
			</div>
    )
}