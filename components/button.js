import styles from '../styles/utils.module.css';
import React from 'react';

export default function Button(props) {
	return (
		<input type="button" className={styles.postButton} value={props.value} onClick={props.onClick} />
	);
}
