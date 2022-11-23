# 🌙 Moonwith

Frontend for my personal platform built with Next.js. A blog with posts written in markdown + a couple of pages about my projects and a URL shortener enabled by my API, [piara.li](https://github.com/malikpiara/piara.li). Every page in the app is pre-rendered statically. Using client-side data fetching at the component level to retrieve comments.

## Get Started

1. Clone the repository into your own computer. Make sure you have a recent version of Node.js (version 10.13 or later) installed.
2. Get the project dependencies with `npm install`.
3. Run the development server with `npm run dev`.

## Deploying

Vercel is the fastest way to deploy your Next.js application with zero configuration.
When deploying to Vercel, the platform automatically detects Next.js, runs `next build`, and optimizes the build output for you.

## Current Status

Started building a comment system in November for my frontend module assessment at university. Right now, comments are retrieved from a data structure in the [cobra](https://github.com/malikpiara/cobra) API. I'm using client-side data fetching with `useEffect` to load comments without rebuilding my static pages. Doing so, we reduce the number of requests to the server.

You can see all of the comments in real time at [cobra.moonwith.com/comments](https://cobra.moonwith.com/comments).

At [moonwith.com/piarali](https://moonwith.com/piarali) you can access my URL shortner. Using Incremental Static Regeneration (ISR) to re-generate this page every time there is a new request.

## Next Steps

- Start using CSS variables more broadly.
- Start working on a way of managing comments and piara.li from an admin page within Moonwith.
- Potentially introduce On-Demand Revalidation on the URL shortner page.

## Project History

This is the fifth time I build Moonwith from scratch. I learned a great deal in the process about different technologies and approaches. Here's an overview:

1. Built everything statically with HTML and CSS.
2. Created a Flask application (combining both frontend and backend, deployed to Heroku).
3. Created a Django application (combining both frontend and backend, deployed to Heroku).
4. Created a [static site generator with Flask + HTMX](https://github.com/malikpiara/moon) to access important capabilities like AJAX and CSS transitions without adding complexity to the frontend.
5. Next.js frontend supported by the piara.li API in Express.

## Thank You

Thank you Ben Bachem, Jonathan Freiberger, Hanno Grimm, Moritz Eich, Dennis Willmann, Johann Hemmann, Lukas Müller, Henrique Dias and Berk Özzambak for supporting me so promptly. Without you, I wouldn't have been able to learn so much in so little time.
