import '../styles/global.css';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  // Changing the class that gives the page its background color.
  // depending on the isGreen truth value.
    useEffect(() => {
        document.body.className = pageProps.isGreen ? 'green' : 'purple';
      });
    return <Component {... pageProps} />;
}