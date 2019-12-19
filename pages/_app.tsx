import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { AnimatePresence } from 'framer-motion';

import createStore from '../store'

class MyApp extends App<any, any> {
  static async getInitialProps({ Component, ctx }) {
    console.log('getInitialProps')
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store, router } = this.props
    const { query } = router
    const { pid } = query
    console.log('pid', pid)
    return (
      <Provider store={store}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={pid} />
        </AnimatePresence>
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
