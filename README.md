# Quiz Now

Quiz Now is a VueJs version of www.speedquizzing.com - which allows hosting and running quiz's via a web browser.

## Project setup

### Configure client

```
npm install
```

Setup the `.env` variables.
* copy `.env.default` & rename it as `.env`
* fill in the variable values
* Note: _you can also create `.env.production` if there are certain variables that only apply to production_.
* `npm run serve` - to start the server up locally


### Configure server

The backend server users firebase functions to control logging into channels with extra information.

#### Local development

To configure for local development you will need to have firebase tools installed locally:
* `npm install -g firebase-tools` - if you don't already have it installed
* inside the `/functions` folder run `npm install`
* inside the `/functions` folder copy the `example.runtimeconfig.json` and rename it to `.runtimeconfig.json`
* inside the newly created `.runtimeconfig.json` fill in the pusher information.

#### Production setup

To set up the environment for production you will need to save all the config into your firebase account.
The below method should be called replacing the example strings with real data. 

```
firebase functions:config:set pusher.appid="THE APP ID" pusher.key="THE KEY" pusher.secret="THE SECRET" pusher.cluster="THE CLUSTER"
```

Note: once you have real data on your firebase account you can run `firebase functions:config:get > .runtimeconfig.json` to pull this data down to use locally.

You can then run `npm run deploy` to push the data up to firebase.

### Other information

The client end is build using vuejs and can use the following npm commands

* `npm run serve` - Compiles and hot-reloads for development
* `npm run build` - Compiles and minifies for production
* `npm run test:unit` - Run your unit tests
* `npm run test:e2e` - Run your end-to-end tests
* `npm run lint` - Lints and fixes files
