import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer, { exampleInitialState, rootSaga } from '../modules'

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        
        return composeWithDevTools(applyMiddleware(...middleware))
    }

    return applyMiddleware(...middleware)
}

const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = (initialState = exampleInitialState) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        persistedReducer, 
        initialState,
        bindMiddleware([sagaMiddleware])
    )

    if (module.hot) {
        module.hot.accept('../modules', () => {
            console.log('Replacing rootReducer')
            store.replaceReducer(require('../modules').default)
        })
    }

    store['sagaTask'] = sagaMiddleware.run(function* () {
        yield rootSaga()
    })
        
    return store
}
