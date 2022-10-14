import '../styles/global.css';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        document.body.className = pageProps.isGreen ? 'green' : 'purple';
      });
    return <Component {... pageProps} />;
}