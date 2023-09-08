# Edubanking
A banking platform designed for educating kids on how banks, and accounts work in a fun and interactive way.

## Vercel CLI
1. Make sure you've got Vercel CLI installed
2. Run `vercel login`
3. Run `vercel env pull .env.local` - This would pull only the local development `.env.local` file for development purpose

## How to run
1. Clone the repository
2. Install PlanetScale CLI, and MYSQL CLI
3. Run `pscale auth login`
4. Run `pscale org switch hawra-studies`
5. Run `pscale connect transactions transaction2 --port 3306` - This would create a local proxy to planetscale database for development
6. In another Terminal window/tab run `npm run dev`