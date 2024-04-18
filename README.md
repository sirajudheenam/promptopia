# Promptopia

- [MongoDB Database from Atlas](https://cloud.mongodb.com)
- [Google Auth API - Credentials and OAuth Consent Screen needs to be created](https://console.cloud.google.com/apis/credentials)
Create them with http://localhost:3000


```bash
pnpm install bcrypt mongodb mongoose next-auth
```
## .env file with following contents

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
# https://www.cryptool.org/en/cto/openssl/ # or on your terminal run
# openssl rand -base64 32
NEXTAUTH_SECRET=<result of - openssl rand -base64 32>

MONGODB_URI=mongodb+srv://<username>:<password>@atlas-uri
GOOGLE_ID=ABCDEF123459.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=<google-oauth-client-secret>
```



----------------------------------------------------------------
- Based on [this Video](https://www.youtube.com/watch?v=wm5gMKuwSYk&t=763s&ab_channel=JavaScriptMastery)

- [GitRepo](https://github.com/adrianhajdin/project_next_14_ai_prompt_sharing/tree/main)

- [Gist](https://gist.github.com/adrianhajdin/6df61c6cd5ed052dce814a765bff9032)

----------------------------------------------------------------

## Original Stuff
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
