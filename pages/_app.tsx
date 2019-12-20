import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { AnimatePresence } from 'framer-motion'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { makeStore } from '../store'

class MyApp extends App<any> {
  persistor: any

  constructor(props) {
    super(props)
    this.persistor = persistStore(props.store)
  }

  public static async getInitialProps({Component, ctx}) {
      return {
          pageProps: {
              ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
              pathname: ctx.pathname,
          },
      };
  }

  public render() {
      const {Component, pageProps, store, router} = this.props;
      const { query } = router
      const { pid } = query

      return (
        <AnimatePresence exitBeforeEnter>
          <Provider store={store}>
            <PersistGate
              loading={<Component {...pageProps} key={pid} />}
              persistor={this.persistor}
            >
            >
              <Component {...pageProps} key={pid} />
            </PersistGate>
          </Provider>
        </AnimatePresence>
      );
  }
}

export default withRedux(makeStore, {debug: false})(withReduxSaga(MyApp));
