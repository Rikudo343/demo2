
import Cabeza from './components/header'
import Login from './components/login'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <Cabeza />
      </div>
      <div className="card">
        <Login />
      </div>
      
    </div>
  )
}

export default App
