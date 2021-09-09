import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducers/root.reducers";
import {Provider} from "react-redux";
import React from "react";

const composeEnhancers =
  typeof window === 'object' &&
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);

const store = createStore(rootReducers, enhancer);

const ReduxProvider: React.FC<any> = ({children}: { children: any }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider;