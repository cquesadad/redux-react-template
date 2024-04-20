import reactLogo from './assets/react.svg'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter);

  const dispatch = useDispatch();
  //Add payload number to increment, also to show in button
  const numberPayload = 4;

  return (
    <>
      <div>
        <p className="logo">⚛️</p>
      </div>
      <h1>Redux React</h1>
      <h2>Valor: <code>{ counter }</code></h2>
      <div className="card">
        <button onClick={ () => dispatch( increment() )}>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={ () => dispatch( incrementBy(numberPayload) )}>
          Increment by {numberPayload}
        </button>
      </div>
    </>
  )
}

export default App
