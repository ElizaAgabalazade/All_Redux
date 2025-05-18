import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import UserProvider from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <UserProvider>
  {/* <Provider store={store}> */}
    <App />
  {/* </Provider>, */}
  </UserProvider>
  </BrowserRouter>,
</>)
