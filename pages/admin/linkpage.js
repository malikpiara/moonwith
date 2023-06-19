import { useState,useEffect } from 'react';
import styles from '../../styles/utils.module.css';
import { supabase } from '../../lib/supabaseClient';
import Layout from '../../components/admin/LayoutAdmin';

  export async function getServerSideProps() {
		
    const { data, error } = await supabase.from('linkPage').upsert({ id: 1 }).select().single()

    return {
      props: {
		linkPage: data
      },
    }
}

export default function AdminDashboard({ linkPage }) {

	const [bio, setBio] = useState(linkPage.bio)

	const handleSubmit = async (event) => {
		event.preventDefault()
	
		// Insert the email into our Supabase table
		const { error } = await supabase.from('linkPage').update({ bio: bio }).eq('id', 1)
		if (error) {
		  console.error(error)
		}
	}

	return (
		<Layout>
			<h3>LinkPage</h3>

			<section className="subAdmin">
				<form onSubmit={handleSubmit}>
					<label>Bio</label>
					<input className={styles.input} type="text" placeholder={linkPage.bio} required value={bio} onChange={(e) => setBio(e.target.value)} />
					
					<button type="submit" className={`${styles.button} ${styles.primary}`}>Change</button>
				</form>
			</section>

		</Layout>
	);
}