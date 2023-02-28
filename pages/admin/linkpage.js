import { useState,useEffect } from 'react';
import styles from '../../styles/utils.module.css';
import admin from './admin.module.css';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Nav from '../../components/adminNav';
import { supabase } from '../../lib/supabaseClient';

  export const getServerSideProps = withPageAuthRequired( {
	async getServerSideProps() {
		
    const { data, error } = await supabase.from('linkPage').upsert({ id: 1 }).select().single()

    return {
      props: {
		linkPage: data
      },
    }
}
  })

export default function AdminDashboard(data) {

	const [bio, setBio] = useState(data.linkPage.bio)

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

	const handleSubmit = async (event) => {
		event.preventDefault()
	
		// Insert the email into our Supabase table
		const { error } = await supabase.from('linkPage').update({ bio: bio }).eq('id', 1)
		if (error) {
		  console.error(error)
		}
	}

	return (
		<div className={styles.adminDashboardWrapper}>

		{useEffect(() => {
				document.addEventListener('keydown', handleKeyPress)
				}
		)}
			
		<Nav onClick={handleClick} />
	  
			<div>
			<h3>LinkPage</h3>

			<section className="subAdmin">

			<form onSubmit={handleSubmit}>
				<label>Bio</label>
				<input className={styles.input} type="text" placeholder={data.linkPage.bio} required value={bio} onChange={(e) => setBio(e.target.value)} />
				
				<button type="submit" className={`${styles.button} ${styles.primary}`}>Change</button>
    		</form>
			</section>
			<br/>

			<div className={admin.container}>
			
	  </div>
			</div>

		</div>
	);
}