# Geting started

The Light Bootstrap Dashboard with Vue.js is built on top of Bootstrap 3, 
so you can safely use it on your existing or new Bootstrap project.

No line of code from Bootstrap 3 was changed, so you don't have to worry about undesired effects in your work.

- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Open your terminal
- Navigate to the project
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run dev` to start a local development server
- A new tab will be opened in your browser on `http://localhost:8000`

You can also run additional npm tasks such as
- `npm run build` to build your app for production
- `npm run unit` to run unit tests
- `npm run lint` to run linting. (We used [eslint-standard](https://github.com/standard/eslint-config-standard))

## A note on eslint

Eslint aims to improve code quality and unify code style. In this repo, eslint is enabled by default.
Many developers might not understand why they need eslint or why it might be helpful. We provided an easy
option to switch on or off eslint depending on your own preferences.

!> To disable eslint, go to `package.json` and change `ENABLE_ESLINT=true` to `ENABLE_ESLINT=false` for both
`dev` and `build` tasks.

## Vue-cli

We used [vue-cli webpack template](https://github.com/vuejs-templates/webpack) for this repository.
We tried keeping the configuration as clean as possible so you can easily update the configuration easily.

In this repo, you will find a `webpack.custom.js` configuration file were we placed custom webpack rules such as
the eslint enable/disable option from above or some `aliases`.

We encourage you to modify only this file, so you could simply copy paste the other files from a newer vue-cli webpack template any time
without too much effort.
