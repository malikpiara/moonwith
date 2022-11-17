# Moonwith

🌙 Frontend for my personal platform. A blog with posts written in markdown + a couple of static pages and little experiments enabled by my API, [piara.li](https://github.com/malikpiara/piara.li). Every page in the app is pre-rendered statically. Built with Next.js.

## Get Started

1. Clone the repository into your own computer. Make sure you have a recent version of Node.js (version 10.13 or later) installed.
2. Get the project dependencies with `npm install`.
3. Run the development server with `npm run dev`.

## Deploying

Vercel is the fastest way to deploy your Next.js application with zero configuration.
When deploying to Vercel, the platform automatically detects Next.js, runs `next build`, and optimizes the build output for you.

## Current Status. Next Steps

Started building a comment system in November for my module assessment at CODE University. Right now, we're retrieving comments from a dummy data structure in the [piara.li](https://github.com/malikpiara/piara.li) API. New comments only show up after the app is redeployed and they don't persist since there's no database yet. The next step is sending data from the comment forms to the API. Already built an endpoint but having trouble figuring out how to issue the POST request from the frontend.
