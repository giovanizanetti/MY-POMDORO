import './App.css'
import Navigation from './components/Navivation'
import Timer from './components/Timer'
import Settings from './components/Settings'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Settings />
      {/* <header className='App-header'>
        <Timer />
      </header> */}
    </div>
  )
}

export default App
