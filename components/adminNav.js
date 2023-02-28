import Button from '../components/button';
import styles from '../styles/utils.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
                        <Link href="/admin/">Comments</Link>
                    </div>
				    <div className={getNavItemClassName(router,"/admin/subscribers")}>
                        <Link href="/admin/subscribers">Subscribers</Link>
                    </div>
                    <div onClick={onClick} className={getNavItemClassName(router, "/admin/post")} >
                        <Link href="#">See Posts</Link>
                    </div>
				</div>
			</div>
    )
}