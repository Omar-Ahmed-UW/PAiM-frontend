## Inspiration

Ever had an idea for an app or a complex system, but didn't know where to start? So did we, and that's why we've built PAiM (pronounced PAM). PAiM is your AI-powered technical project manager, capable of designing an entire system from a - z using a short description of your idea.

## What it does

PAiM designs systems from both a product and engineering standpoint so you don't have to worry about planning for an idea ever again. PAiM takes information about your idea, a brief description, a potential users' description, your preferred tech stack, and your timeline for completing it, then from that small context, it generates a notion page for you with sections discussing functionality and use cases, tech stack, architecture description and diagram, and milestones for your project.

## How we built it

We built it using an extremely responsive and customizable nextjs app on the frontend, a simple backend and orchestrator service relying on Google Gemini's and Notion's APIs.

## Challenges we ran into

Many of the challenges we ran into were related to prompt engineering, text and code formatting.

## What's next for PAiM

Many many more features to come.

Link to backend: https://github.com/Omar-Ahmed-UW/PAiM-backend

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
