import './App.css'
import Navigation from './components/Navivation'
import Timer from './components/Timer'
import Settings from './components/Settings'
import Store from './store'

function App() {
  return (
    <div className='App'>
      <Store>
        <Navigation />
        {/* <header className='App-header'>
        <Timer />
      </header> */}
        <Settings />
      </Store>

      {/* <header className='App-header'>
        <Timer />
      </header> */}
    </div>
  )
}

export default App
