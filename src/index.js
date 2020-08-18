import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import {store, persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from "styled-components"
import theme from "./theme"

import "./index.css"
import App from "./App"

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)
