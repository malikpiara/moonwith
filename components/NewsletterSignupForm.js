import { useState } from 'react';
import utilStyles from '../styles/utils.module.css';
import { supabase } from '../lib/supabaseClient';

export default function NewsletterForm() {
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
        <section className="sub">
            <h5>✨ Grow with me. Get my personal letters on emotional intelligence delivered to your inbox every week.</h5>
            <form onSubmit={handleSubmit}>
                <input className={utilStyles.input} type="email" required placeholder="Type your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className={`${utilStyles.button} ${utilStyles.wide} ${utilStyles.primary}`} type="submit">Sign me up</button>
            </form>
            {/* <small>Moonwith is handcrafted. Your data is not shared with third parties.</small> */}
        </section>
    )
}