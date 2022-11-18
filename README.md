# Moonwith

🌙 Frontend for my personal platform. A blog with posts written in markdown + a couple of static pages and little experiments enabled by my API, [piara.li](https://github.com/malikpiara/piara.li). Every page in the app is pre-rendered statically. Built with Next.js.

The comment section is enabled by my API. The content is read and sent from there.

## Get Started

1. Clone the repository into your own computer. Make sure you have a recent version of Node.js (version 10.13 or later) installed.
2. Get the project dependencies with `npm install`.
3. Run the development server with `npm run dev`.

## Deploying

Vercel is the fastest way to deploy your Next.js application with zero configuration.
When deploying to Vercel, the platform automatically detects Next.js, runs `next build`, and optimizes the build output for you.

## Current Status. Next Steps

Started building a comment system in November for my frontend module assessment at CODE University. Right now, comments are retrieved from a data structure in the [piara.li](https://github.com/malikpiara/piara.li) API. New comments only show up after the app is redeployed and they don't persist since there's no database yet. You can read the comments in real time at [piara.li/comments](https://piara.li/comments).

The next step is to make the comment section of every post dynamic, to connect the API to a database and to start using CSS variables. That will conclude version 1 of the comment system.

Afterwards, I'll start working on a way of managing comments and build a page protected with authentication.

## Project History

This is the fifth time I build Moonwith from scratch. I learned a great deal in the process about different technologies and approaches. Here's an overview:

1. Built everything statically with HTML and CSS.
2. Created a Flask application (combining both frontend and backend, deployed to Heroku).
3. Created a Django application (combining both frontend and backend, deployed to Heroku).
4. Created a [static site generator with Flask + HTMX](https://github.com/malikpiara/moon) to access important capabilities like AJAX and CSS transitions without adding complexity to the frontend.
5. Next.js frontend supported by the piara.li API in Express.

## Thank You

Thank you Ben Bachem, Jonathan Freiberger, Hanno Grimm, Moritz Eich, Dennis Willmann, Johann Hemmann, Lukas Müller, Henrique Dias and Berk Özzambak for supporting me so promptly. Without you, I wouldn't have been able to learn so much in so little time.
