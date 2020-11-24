import './App.css'
import Navigation from './components/Navivation'
import Timer from './components/Timer'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <header className='App-header'>
        <Timer />
      </header>
    </div>
  )
}

export default App
