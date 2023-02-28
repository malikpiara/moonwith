import { useState } from 'react';
import styles from '../../styles/utils.module.css';
import admin from './admin.module.css';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Nav from '../../components/adminNav';
import { supabase } from '../../lib/supabaseClient';

  export const getServerSideProps = withPageAuthRequired( {
	async getServerSideProps() {
		
    const { data } = await supabase.from('subscribers').select()

    return {
      props: {
		subscribers: data
      },
    }
}
  })

export default function AdminDashboard({ subscribers }) {

	const [email, setEmail] = useState('')

	function handleClick() {
		window.open('https://github.com/malikpiara/moonwith/new/main/posts')
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
	
		// Insert the email into our Supabase table
		const { error } = await supabase.from('subscribers').insert({ email })
		if (error) {
		  console.error(error)
		}
		
		// Clear the email input
		setEmail('')
	}

	return (
		<div className={styles.adminDashboardWrapper}>
			
		<Nav onClick={handleClick} />
	  
			<div>
			<h2>Subscribers ({subscribers.length})</h2>

			<section className="subAdmin">

			<form onSubmit={handleSubmit}>
				
				<input className={styles.input} type="email" placeholder='Type email' required value={email} onChange={(e) => setEmail(e.target.value)} />
				
				<button type="submit" className={`${styles.button} ${styles.primary}`}>Add Subscriber</button>
    		</form>
			</section>
			<br/>

			<div className={admin.container}>
			<table className={admin.subscriber_page}>
			<tbody>
				<th>Subscriber</th>
				<th>Subscription Date</th>
        {subscribers.map((subscriber) => (
			<tr key={subscriber.id}>
          <td className={admin.subscriber} key={subscriber.id}>{subscriber.email}</td>
		  <td className={admin.subscriber} key={subscriber.id}>{subscriber.created_at}</td>
		  </tr>
        ))}
		</tbody>
      </table>
	  </div>
			</div>

		</div>
	);
}