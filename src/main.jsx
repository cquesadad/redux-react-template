import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
// import App from './App.jsx'
// give access to store provider globally
import { store } from './store'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <PokemonApp />
    </Provider>
  </React.StrictMode>,
)
