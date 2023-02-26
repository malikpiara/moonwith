import { useState } from 'react';
import styles from '../../styles/utils.module.css';
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
		console.log("Something")
		// Clear the email input
		setEmail('')
	}

	return (
		<div className={styles.adminDashboardWrapper}>
			
		<Nav onClick={handleClick} />
	  
			<div>
			<h2>Subscribers ({subscribers.length})</h2>

			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</label>
				<button type="submit">Add Subscriber</button>
    		</form>
			<br/>

			<table>
			<tbody>
				<th>Subscriber</th>
        {subscribers.map((subscriber) => (
			<tr key={subscriber.id}>
          <td key={subscriber.id}>{subscriber.email}</td>
		  </tr>
        ))}
		</tbody>
      </table>
			</div>

		</div>
	);
}