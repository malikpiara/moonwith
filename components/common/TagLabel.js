import React from 'react';
import Link from 'next/link';

export default function Tag(props) {
    return (
        <Link key={props.tag} href={`/tags/${props.tag}`}>
			<span className="tag">
				{props.tag.slice(0, 1).toUpperCase()}{props.tag.slice(1)}
			</span>
        </Link>
            )
}