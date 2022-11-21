# 🌙 Moonwith

Frontend for my personal platform built with Next.js. A blog with posts written in markdown + a couple of pages about my projects and a URL shortener enabled by my API, [piara.li](https://github.com/malikpiara/piara.li). Every page in the app is pre-rendered statically. Using client-side data fetching at the component level to retrieve comments.

## Get Started

1. Clone the repository into your own computer. Make sure you have a recent version of Node.js (version 10.13 or later) installed.
2. Get the project dependencies with `npm install`.
3. Run the development server with `npm run dev`.

## Deploying

Vercel is the fastest way to deploy your Next.js application with zero configuration.
When deploying to Vercel, the platform automatically detects Next.js, runs `next build`, and optimizes the build output for you.

## Current Status. Next Steps

Started building a comment system in November for my web frontend module assessment at university. Right now, comments are retrieved from a data structure in the [piara.li](https://github.com/malikpiara/piara.li) API. I'm using ~~Incremental Static Regeneration (ISR) to re-generate the blog post pages every time there is a new request. Doing so, I manage to make new comments show up without having to rebuild the entire website.~~ Client-side data fetching with useEffect to load comments and reduce the number of requests to the server.

Comments don't persist for a long time since the API is not connected to a database (yet). You can check what's under the hood at [piara.li/comments](https://piara.li/comments).

The next step is ~~to introduce On-Demand Revalidation so that the blog post pages are only re-generated when a comment is submitted.~~ to start using CSS variables more broadly. That will conclude version 1 of the comment system. Afterwards, I'll start working on a way of managing comments and build an admin page protected with authentication.

## Project History

This is the fifth time I build Moonwith from scratch. I learned a great deal in the process about different technologies and approaches. Here's an overview:

1. Built everything statically with HTML and CSS.
2. Created a Flask application (combining both frontend and backend, deployed to Heroku).
3. Created a Django application (combining both frontend and backend, deployed to Heroku).
4. Created a [static site generator with Flask + HTMX](https://github.com/malikpiara/moon) to access important capabilities like AJAX and CSS transitions without adding complexity to the frontend.
5. Next.js frontend supported by the piara.li API in Express.

## Thank You

Thank you Ben Bachem, Jonathan Freiberger, Hanno Grimm, Moritz Eich, Dennis Willmann, Johann Hemmann, Lukas Müller, Henrique Dias and Berk Özzambak for supporting me so promptly. Without you, I wouldn't have been able to learn so much in so little time.
