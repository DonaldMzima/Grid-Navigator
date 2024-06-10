# One Digital Media Programming Challenge

## Overview

This project solves a programming challenge from One Digital Media. The task involves navigating a grid of city blocks based on a set of instructions and calculating the total distance from the starting point to the destination. This solution uses React with Next.js, TypeScript, and Tailwind CSS to create a functional UI that includes an input form and a submit button.

![Preview Image](public/path-to-your-image.png)

## Explanation of the Logic

Imagine you are a robot starting at the center of a grid, facing north. You are given a list of instructions to follow. Each instruction tells you to turn either left (L) or right (R) and then move forward a certain number of blocks. Our job is to find out how far you are from the starting point after following all the instructions.

Here is a simple way to understand how it works:

1. **Starting Point**: You begin at the center (0, 0) of the grid, facing north.
2. **Instructions**: Each instruction tells you to turn left or right and then move forward. For example, "L2" means turn left and move forward 2 blocks.
3. **Turning**: When you turn left or right, your direction changes. If you are facing north and turn left, you will face west. If you turn right, you will face east.
4. **Moving**: After turning, you move forward the specified number of blocks in the new direction.
5. **Distance Calculation**: The total distance is the number of blocks you are away from the starting point, measured by how far you moved horizontally (east-west) and vertically (north-south).

## Project Structure

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
