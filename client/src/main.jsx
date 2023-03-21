import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {HelmetProvider} from "react-helmet-async"
import "swiper/swiper.min.css";
import "swiper/css/bundle";
import "./index.css"
import { Provider } from "react-redux";
import { store } from './app/Store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
