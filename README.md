<p align="center"><a href="https://overhide.io"><img src="https://overhide.github.io/pay2my.app/assets/logo.png" width="200px"/></a></p>

<p align="center"><a href="https://overhide.io">pay2my.app by overhide.io</a></p><p style="width: 500px; margin: auto">A free and open-sourced ecosystem of widgets, a front-end library, and back-end services &mdash; to make addition of "logins" and "in-app-purchases" (IAP) to your app as banal as possible.</p>

<hr/>



# pay2my.app React.js demo



This is [a demo](https://overhide.github.io/pay2myapp-widgets-react-demo-app/build/index.html) of using [pay2myapp-widgets](https://github.com/overhide/pay2myapp-widgets) with  [React.js](https://reactjs.org/).

The [live demo](https://overhide.github.io/pay2myapp-widgets-react-demo-app/build/index.html) &mdash; which uses a demo back-end hosted as an Azure function (as per  [pay2myapp-widgets](https://github.com/overhide/pay2myapp-widgets) demo code) &mdash; is described in the [About](#about) section below.



# About

This demo was created using the following steps: 



Created the React application and go into the new subfolder.

````
npx create-react-app pay2myapp-widgets-react-demo-app -–template typescript
cd pay2myapp-widgets-react-demo-app
````



NPM install all the dependencies, types.

Note the `pay2myapp-widgets`&mdash; they're being braught in as a dependancy.

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest pay2myapp-widgets
```



Modify `eslintConfig` in [package.json](./package.json) as per https://www.fast.design/docs/integrations/react/.

Note the `no-unused-expressions` is added.

```
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ],
    "rules": {
      "no-unused-expressions": "off"
    }
  }
```



Bring in [pay2myapp-widgets](https://github.com/overhide/pay2myapp-widgets) Web components into the application.  Modify [src/index.js](src/index.js).

```
import { OverhideHub, OverhideStatus, OverhideLogin, OverhideAppsell } from "pay2myapp-widgets";

OverhideHub;
OverhideStatus;
OverhideLogin
OverhideAppsell;
```



Added React components to wrap [pay2myapp-widgets](https://github.com/overhide/pay2myapp-widgets) Web components:

- [src/components/OverhideHubComponent.tsx](src/components/OverhideHubComponent.tsx)

  - wraps `pay2myapp-hub`

- [src/components/OverhideAppsellButtonComponent.tsx](src/components/OverhideAppsellButtonComponent.tsx)

  - wraps `pay2myapp-appsell`

- [src/components/OverhideLoginButtonComponent.tsx](src/components/OverhideLoginButtonComponent.tsx)

  - wraps `pay2myapp-appsell` as a login-only button
  - also added custom styles fro demo purposes [src/components/OverhideHubComponent.css](src/components/OverhideHubComponent.css)

- [src/components/OverhideLoginComponent.tsx](src/components/OverhideLoginComponent.tsx)

  - wraps `pay2myapp-login`

- [src/components/OverhideStatusComponent.tsx](src/components/OverhideStatusComponent.tsx)

  - wraps `pay2myapp-status`

  

Rename `/src/App.js` to [/src/App.tsx](/src/App.tsx) and modify it for  [pay2myapp-widgets](https://github.com/overhide/pay2myapp-widgets) demo code specifics:

- hub
- nav
- login button
- three feature buttons
- some other demo specific elements:
  - [src/components/Messages.tsx](src/components/Messages.tsx) messages widget and corresponding [styles](src/components/Messages.css)
  - some [assets](src/assets) and [public](./public) files



The components use a demo back-end hosted as an Azure function as per  [pay2myapp-widgets](https://github.com/overhide/pay2myapp-widgets) demo code, read about it there.



Run using `npm run start`

View at http://localhost:3000/



# Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
