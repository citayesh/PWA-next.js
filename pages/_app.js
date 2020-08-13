import '../styles/globals.css';
import { Provider } from 'react-redux'
import { useStore } from "../redux/store"
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store)
  return(
    <Provider store={store}>
    <PersistGate loading={<Component {...pageProps} />} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
    </Provider>
    )
}

export default MyApp
