import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { AnimatePresence } from 'framer-motion'

import { makeStore } from '../store'

class MyApp extends App<any> {
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
            <Component {...pageProps} key={pid} />
          </Provider>
        </AnimatePresence>
      );
  }
}

export default withRedux(makeStore, {debug: false})(withReduxSaga(MyApp));
