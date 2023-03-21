import styles from '../../styles/utils.module.css';
import React from 'react';

export default function Button({value, onClick}) {
	return (
		<input type="button" className={styles.postButton} value={value} onClick={onClick} />
	);
}
