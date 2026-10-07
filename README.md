# Natthaphong Cafe

A responsive, one-page cafe website built with plain HTML and CSS for **Challenge 2: cafe website**. All cafe details are illustrative. The contact address uses the reserved `example.com` domain; no real personal contact information is included.

## Run on localhost

Install Node.js LTS, open a terminal in this project folder, and run:

```sh
npm run dev
```

Open **http://localhost:3000/** in your browser. On Windows, you can also double-click `start-local.bat`. No package installation is needed. Press Ctrl+C to stop the server.

## Required website sections

- Menu and prices in Thai baht.
- Weekday and weekend opening hours.
- An illustrative Bangkok location and a working city-map link.
- A contact section with a clearly labelled demonstration email.

The site includes mobile layout rules, keyboard focus indicators, a skip link, descriptive image text, and reduced-motion support. The coffee illustration is an original SVG included with the project.

## The two requested changes

1. **Add a chocolate brownie — ฿95.** Review [the menu diff](changes/01-add-brownie.diff). Local revision: `a28bed0`.
2. **Change the palette to terracotta and cream.** Review [the colour diff](changes/02-terracotta-palette.diff). The favicon and browser colour were updated to match. Local revision: `a522213`.

The diff files record each change separately. The revision identifiers refer to the original local Git history.

## Build for Vercel

```sh
npm run build
```

This copies the four public website files into `dist/`. It does not change or compile the HTML or CSS. `vercel.json` sets Framework to Other, Build Command to `npm run build`, and Output Directory to `dist`. No environment variables or API keys are required.

## Publish the public GitHub repository

With Git and [GitHub CLI](https://cli.github.com/) installed, sign in through the normal browser login:

```sh
gh auth login --hostname github.com --git-protocol https --web
```

The prepared project already has local commits. From this folder, create and push the public repository:

```sh
gh repo create Natthaphong-Cafe --public --source=. --remote=origin --push
gh repo view --json url,isPrivate
```

If you already have a repository with this name, use that existing repository or choose a unique new name; do not overwrite unrelated work. The verification output must show `isPrivate: false`. [Official GitHub CLI reference](https://cli.github.com/manual/gh_repo_create).

## Deploy the repository on Vercel

1. Sign in to [Vercel](https://vercel.com/new) with GitHub.
2. Import this public repository.
3. Keep Root Directory as the project root, where `index.html`, `package.json` and `vercel.json` are located.
4. Confirm Framework **Other**, Build Command **npm run build**, and Output Directory **dist**. The configuration file supplies these values.
5. Deploy and wait for the deployment to become Ready.
6. Copy the project's production `.vercel.app` website URL. Do not submit the Vercel dashboard URL.
7. Open that production URL in a signed-out browser and on your phone. If it asks viewers to sign in, adjust the project's production deployment protection to allow public visitors, then check again.

References: [Vercel configuration](https://vercel.com/docs/project-configuration/vercel-json), [deployment protection](https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/vercel-authentication).

## Submission

Submit these two real links after publishing:

- The **public GitHub repository URL**.
- The **public Vercel production URL**.

Public repository: https://github.com/treetest94-svg/Natthaphong-Cafe

The Vercel production URL will be added after deployment is verified.
