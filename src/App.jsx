import reactLogo from './assets/react.svg'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { increment, decrement } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p className="logo">⚛️</p>
      </div>
      <h1>Redux React</h1>
      <h2>Valor: <code>{ counter }</code></h2>
      <div className="card">
        <button onClick={ () => dispatch( increment() )}>
          Add +1
        </button>
        <button onClick={ () => dispatch( decrement() )}>
          Rest -1
        </button>
      </div>
    </>
  )
}

export default App
