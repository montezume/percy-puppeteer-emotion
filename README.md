## @percy/puppeteer bug

I made this repository to show a bug I have found using the @percy/puppeteer SDK along with [emotion](https://github.com/emotion-js/emotion) and webpack. When I build this app using webpack in mode "production", and then take a percy snapshot of that, the styles are missing in the percy snapshot. However, the styles are _not_ missing in the browser, and can even be seen in a regular screenshot taking by Puppeteer, and they are viewable in the browser.

![Screenshot of webpack production build taken by puppeteer](https://github.com/montezume/percy-puppeteer-emotion/blob/master/screenshot.jpg)

### The app

- Very basic React app.
- Built by webpack with basic config
- One component (App.js)
- One test (App.spec.js) that takes one percy snapshot
- Uses jest-puppeteer and puppeteer

### To recreate the bug

Clone this repository

```bash
# set your percy token (export PERCY_TOKEN=abc)
# install deps
yarn
# build app in production mode
yarn build
yarn percy
```

Will result in percy snapshot looking like:

![Screenshot of webpack production build taken by puppeteer](https://github.com/montezume/percy-puppeteer-emotion/blob/master/percy-with-webpack-production.jpg)

### Bug fix (by using mode "development" in webpack)

```bash
yarn build:development
yarn percy
```

Results in percy output like this

Will result in percy snapshot looking like:

![Screenshot of webpack production build taken by puppeteer](https://github.com/montezume/percy-puppeteer-emotion/blob/master/percy-with-webpack-development.jpg)
