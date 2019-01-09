# Visit-X payment SDK

[![Build Status](https://travis-ci.org/VISIT-X/vxpay-js.svg?branch=master)](https://travis-ci.org/VISIT-X/vxpay-js)
[![Coverage Status](https://coveralls.io/repos/github/VISIT-X/vxpay-js/badge.svg?branch=master)](https://coveralls.io/github/VISIT-X/vxpay-js?branch=master)

[![NPM](https://nodei.co/npm/vxpay-js.png)](https://nodei.co/npm/vxpay-js/)

VXPay-js is an SDK for integrating the Visit-X payment/funnel for 3rd party code.

[Demo](https://visit-x.github.io/vxpay-js/demo.html)

More information on the vxpay-js:
1. [Public API description](https://github.com/VISIT-X/vxpay-js/wiki/01-Public-API)
1. [Hooks definitions & explanation](https://github.com/VISIT-X/vxpay-js/wiki/02---Hooks)
1. [Frame messages reference](https://github.com/VISIT-X/vxpay-js/wiki/04-Messages-reference)
1. [Samples](https://github.com/VISIT-X/vxpay-js/wiki/05-Samples)
1. [Post message reference](https://github.com/VISIT-X/vxpay-js/wiki/04-Messages-reference)

Please see [vxpay-js-react-example](https://github.com/VISIT-X/vxpay-js-react-example) for [React](https://github.com/facebook/react) integration example.

### Communication flows

__Things to note:__

- All communication between the VXPayJS (lib) and VXPay happens via `window.postMessage`. Nevertheless, this should not be influencing the consumer application anyhow, as it is completely hidden from the end-developer.
- Normal communication between the SPA (e.g. your code), library and VXPay should looks approximately like described on the chart below (`IsLoggedInAction` is just an example):

![IsLoggedInAction](https://raw.githubusercontent.com/VISIT-X/vxpay-js/master/docs/charts/IsLoggedInAction.svg?sanitize=true)

__Possible deviations:__

- When configured to be opening in a tab, all the actions (e.g. `VXPay.isLoggedIn()`, `VXPay.getActiveAbos()`, etc.) will be routed to an iFrame to avoid opening tabs when no user interaction is happening. 

### Development

You can use the following scripts to help you on daily run:

| Command | Explanation |
| ------- | ----------- |
| `npm run vxpay-prepare` | Prepare the npm package valid for local installs (normal npm tgz) | 
| `npm run vxpayclear` | Remove the files used in package preparation |
| `npm run vxpay-charts` | Build svg charts based on text described flows (mermaid-js) |
| `npm run build` | Prepare the production version of the lib |
| `npm run lint` | Check `eslint` results |
| `npm run cover` | Run tests and write coverage files. Can be observed in `build/coverage/index.html` |
 
