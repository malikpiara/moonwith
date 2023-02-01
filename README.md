# About The Project

A Next.js blog with markdown files + a like and comment system enabled by [Cobra](https://github.com/malikpiara/cobra). Authentication is powered by Auth0 and Next.js API routes. Most pages are pre-rendered statically. I'm using client-side data fetching at the component level to retrieve comments.

At [moonwith.com/piarali](https://moonwith.com/piarali) you can access my URL shortner. Using Incremental Static Regeneration (ISR) to re-generate this page every time there is a new request.

## Get Started

1. Clone the repository into your own computer. Make sure you have a recent version of Node.js (version 10.13 or later) installed.
2. Get the project dependencies with `npm install`.
3. Run the development server with `npm run dev`.

## Deploying

Vercel is the fastest way to deploy a Next.js application. When deploying to Vercel, the platform automatically detects Next.js, runs `next build`, and optimizes the build output for you.

At `.env.example` you can find the environmental variables that make authentication with [Auth0](https://auth0.com/docs/quickstart/webapp/nextjs/interactive) possible.

## Current Status

Started working on a Like system in December. It's still not fully implemented and the next steps will be replacing the emoji placeholder with an SVG icon and refactoring the components so there's only one.

## Next Steps

1. Adopting CSS variables more broadly and refactor CSS modules to make the frontend less repetitive and more organised.
2. Improving the comment dashboard so it's more intuitive, safer and less time consuming.
3. Creating an RSS feed. Multiple people have requested it.
4. Replacing the Next.js 404 page with something more personal and that gives the users context.
5. Reintroducing the newsletter subscription module. 

## Project History

This is the fifth time I build Moonwith from scratch. I learned a great deal in the process about different technologies and approaches. Here's an overview:

1. Built everything statically with HTML and CSS.
2. Created a Flask application (combining both frontend and backend, deployed to Heroku).
3. Created a Django application (combining both frontend and backend, deployed to Heroku).
4. Created a [static site generator with Flask + HTMX](https://github.com/malikpiara/moon) to access important capabilities like AJAX and CSS transitions without adding complexity to the frontend.
5. Next.js frontend supported by the piara.li API in Express.

## Thank You

Thank you Ben Bachem, Jonathan Freiberger, Hanno Grimm, Moritz Eich, Dennis Willmann, Johann Hemmann, Lukas Müller, Henrique Dias and Berk Özzambak for supporting me so promptly. Without you, I wouldn't have been able to learn so much in so little time.
