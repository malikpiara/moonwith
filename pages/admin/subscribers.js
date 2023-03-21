import { useState,useEffect } from 'react';
import styles from '../../styles/utils.module.css';
import admin from './admin.module.css';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { supabase } from '../../lib/supabaseClient';
import Date from '../../components/common/Date';
import Layout from '../../components/admin/LayoutAdmin';

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
		<Layout>
		<h3>Subscribers ({subscribers.length})</h3>
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
				<td className={admin.subscriber} key={subscriber.id}>
					<Date dateString={subscriber.created_at} />
				</td>
				</tr>
				))}
				</tbody>
				</table>
			</div>
		</Layout>
		
	);
}