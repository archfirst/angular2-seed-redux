import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {AppComponent} from './app/components/app.component';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as redux from  'ng2-redux';
import {rootReducer} from './reducers';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  redux.provider(store),
  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' })
]);

// In order to start the Service Worker located at "./sw.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./sw.js').then(function(registration) {
//     console.log('ServiceWorker registration successful with scope: ',    registration.scope);
//   }).catch(function(err) {
//     console.log('ServiceWorker registration failed: ', err);
//   });
// }
