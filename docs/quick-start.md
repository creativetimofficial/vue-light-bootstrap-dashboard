## Quick Start

To start using this design system you will need to to install some dependencies or copy some files to your
project.

<hr>

#### Steps to install

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Navigate to the main directory (from terminal) where `package.json` is located.
3. Run `npm install` or `yarn install`
4. Run `npm run serve` or `yarn serve` to start the local development server and start prototyping.


#### Vue Black Dashboard

Vue Black Dashboard is built as Vue plugin so you can simply import it and use it.

```js
import Vue from 'vue';
import LightBootstrap from './light-bootstrap-main'
Vue.use(LightBootstrap);
```

#### Global Components

Argon comes with an extensive set of custom Vue components. Some of them are globally instantiated so
it's easier to use them across the app without importing them each time.

Here's the list of global components:

- **BaseButton**
- **BaseInput**
- **BaseCheckbox**
- **BaseRadio**
- **BaseDropdown**
- **Card**

#### Local components

Besides the components mentioned above, we have some extra components/plugins that are usually less used
and bigger. In order to not affect the overall bundle size of the Argon Kit, they should be imported locally.

Here's the list of local components:

- **Table**
- **Checkbox**
- **BaseTable**
- **CloseButton**
- **LineChart**
- **Modal**
- **NavbarToogleButton**
- **Notifications**
- **StatsCard**
- **Sidebar**
- **SidebarLink**
