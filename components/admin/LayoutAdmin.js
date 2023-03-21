import Nav from './AdminNav';
import { useState, useEffect } from 'react';
import styles from '../../styles/utils.module.css';

export default function Layout({ children }) {
    const [element, setElement] = useState(false);

    function handleClick() {
		window.open('https://github.com/malikpiara/moonwith/new/main/posts')
	}

    function handleKeyPress(event) {
		if (event.keyCode == 49) {
			window.location.href = '/admin'
		} else if (event.keyCode == 50) {
			window.location.href = '/admin/subscribers'
		} else if (event.keyCode == 51) {
			window.location.href = '/'
		} else if (event.keyCode == 52) {
			if (!element) {setElement(true)}
			else if (element) {setElement(false)}
		}
	}


    return (
        <>
        <div className={styles.adminDashboardWrapper}>

{useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        }
)}

{element && (
    <div className={styles.magic}>
        <p>Press <strong>4</strong> to load this menu from anywhere.</p>
        <div className={styles.magicOptions}>
            <div>
                <div onClick={handleClick}>0</div>
                <div>New Post</div>
            </div>
            <div>
            <div>1</div>
            <div>Comments</div>
            </div>
            <div>
            <div>2</div>
            <div>Subscribers</div>
            </div>
            </div>
    </div>
)}
    
<Nav onClick={handleClick} />

    <div>

        {children}

    </div>

</div>
        </>
    )
}