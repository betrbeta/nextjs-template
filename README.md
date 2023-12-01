This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

create a .env file from the .env_template file (OPTIONAL: modify as desired for your local situation)

First, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## WebView

The WebView feature is in active development. Workarounds:

- Use ResizeObserver to detect changes in the height of the object element, but please note that it currently only works in Firefox due to a known bug [https://bugzilla.mozilla.org/show_bug.cgi?id=1689099](https://bugzilla.mozilla.org/show_bug.cgi?id=1689099).

- Use fetch to check the availability of the site, but be aware that it may not work on sites with the 'X-Frame-Options' header.

Here are some sites that work and some that do not work.

| work                                                          | not work             |
| ------------------------------------------------------------- | -------------------- |
| https://github.io                                             | https://google.com   |
| https://estradax.github.io                                    | https://mixpanel.com |
| https://www.youtube.com/embed/lJIrF4YjHfQ?si=Wth2R4pS2NHzIjDO |                      |
| https://twitter.com (display error message)                   |                      |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Setting Up WebKit with Playwright

This guide will help you set up WebKit with Playwright for testing and automating web applications using the WebKit browser engine.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)

## Installation

1. Create a new Node.js project or navigate to your existing project directory.

2. Install Playwright and WebKit dependencies by running the following command:

   ```bash
   npm install playwright
   ```

3. Install WebKit by running the following command
   npx playwright install webkit
4. For more reference
   https://www.youtube.com/watch?v=W3IH7zDR_HQ

### Firestore Setup

Follow these steps to set up Firestore in your project:

1. Create a Firebase project and obtain your Firebase configuration.

2. Update the Firebase configuration in `firebaseConfig.js`.
3. Install Firebase by running the following command:

```bash
npm install firebase
```

4. Install Firebase Tools by running the following command:

```bash
npm install -g firebase-tools
```

### K6 load testing implementing

1. Install K6 on your machine https://k6.io/docs/get-started/installation/.

2. Add to project test script https://k6.io/docs/get-started/running-k6/.

3. Update the configuration in script file (number of virtual users & duration).

4. Run project:

```bash
npm run dev
# or
pnpm dev
```

5. Run k6 with the following command:

```bash
k6 run "your script name".js.
```

6. To display test data in visual charts:

   6.1. Install on your machine Grafana https://grafana.com/grafana/download.

   6.2. Install on your machine InfluxDB https://www.influxdata.com/downloads.

   6.3. Run Grafana firstly and go on localhost:3000 (by default).

   6.4. Connect InfluxDB in Datasourse menu on localhost:8086

   6.5. Add needed dashboards, for example https://grafana.com/grafana/dashboards/2587-k6-load-testing-results/.

   6.6. Change in InfluxDB installed directory file influxdb.conf "bind-address" on "localhost:8086".

   6.7. Run project:

```bash
npm run dev
# or
pnpm dev
```

6.8. Change port in test script on running project port (maybe 3001).

6.9. Run script test:

```bash
k6 run --out influxdb=http://localhost:8086/resultsdb "your script name".js
```

6.10. You will see result on Grafana dashboard.

7. Helpfull resourse: https://medium.com/codeinsights/how-to-load-test-your-node-js-app-using-k6-74d7339bc787

### Usefull Resources

https://blog.sentry.io/common-errors-in-next-js-and-how-to-resolve-them/
