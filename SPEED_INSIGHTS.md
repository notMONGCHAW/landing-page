# Getting started with Speed Insights

This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.

To view instructions on using the Vercel Speed Insights in your project for your framework, use the **Choose a framework** dropdown on the right (at the bottom in mobile view).

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. If you don't have it, you can install it using the following command:

```bash
# Using npm
npm i vercel

# Using yarn
yarn i vercel

# Using pnpm
pnpm i vercel

# Using bun
bun i vercel
```

## Enable Speed Insights in Vercel

On the [Vercel dashboard](/dashboard), select your Project followed by the **Speed Insights** tab. You can also select the button below to be taken there. Then, select **Enable** from the dialog.

> **💡 Note:** Enabling Speed Insights will add new routes (scoped at `/_vercel/speed-insights/*`) after your next deployment.

## Add `@vercel/speed-insights` to your project

For this project (HTML/JavaScript), using the package manager of your choice, add the `@vercel/speed-insights` package to your project:

```bash
# Using pnpm
pnpm i @vercel/speed-insights

# Using yarn
yarn i @vercel/speed-insights

# Using npm
npm i @vercel/speed-insights

# Using bun
bun i @vercel/speed-insights
```

> **Note:** When using the HTML implementation, there is no need to install the `@vercel/speed-insights` package if you prefer to use the script directly.

## Add the script tag to your site

For HTML applications, add the following scripts before the closing tag of the `<body>`:

```html
<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>
```

This has already been added to the `index.html` file in this project at the bottom of the file.

### Example Implementation

The Speed Insights integration has been added to this project's `index.html`. The implementation includes:

1. A helper function that queues Speed Insights calls
2. A deferred script load that loads the Speed Insights tracking script from Vercel

The script is included before the closing `</body>` tag to ensure it doesn't impact page load performance.

## Deploy your app to Vercel

You can deploy your app to Vercel's global [CDN](/docs/cdn) by running the following command from your terminal:

```bash
vercel deploy
```

Alternatively, you can [connect your project's git repository](/docs/git#deploying-a-git-repository), which will enable Vercel to deploy your latest pushes and merges to main.

Once your app is deployed, it's ready to begin tracking performance metrics.

> **💡 Note:** If everything is set up correctly, you should be able to find the `/_vercel/speed-insights/script.js` script inside the body tag of your page.

## View your data in the dashboard

Once your app is deployed, and users have visited your site, you can view the data in the dashboard.

To do so, go to your [dashboard](/dashboard), select your project, and click the **Speed Insights** tab.

After a few days of visitors, you'll be able to start exploring your metrics. For more information on how to use Speed Insights, see [Using Speed Insights](/docs/speed-insights/using-speed-insights).

Learn more about how Vercel supports [privacy and data compliance standards](/docs/speed-insights/privacy-policy) with Vercel Speed Insights.

## Next steps

Now that you have Vercel Speed Insights set up, you can explore the following topics to learn more:

- [Learn how to use the `@vercel/speed-insights` package](/docs/speed-insights/package)
- [Learn about metrics](/docs/speed-insights/metrics)
- [Read about privacy and compliance](/docs/speed-insights/privacy-policy)
- [Explore pricing](/docs/speed-insights/limits-and-pricing)
- [Troubleshooting](/docs/speed-insights/troubleshooting)

## Changes Made to This Project

- Added `@vercel/speed-insights` package to `package.json`
- Integrated Speed Insights script into `index.html`
- Created this documentation file (`SPEED_INSIGHTS.md`)

To complete the setup:
1. Install dependencies: `npm install` or `pnpm install`
2. Deploy to Vercel: `vercel deploy`
3. Enable Speed Insights on your Vercel project dashboard
4. Once deployed, monitor your performance metrics in the dashboard
