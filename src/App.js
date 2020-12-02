import './App.css'
import Navigation from './components/Navivation'
import Timer from './components/Timer'
import StoreProvider from './StoreProvider/index'
import Log from './components/Log'

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <Navigation />
        <header className='App-header'>
          <Timer />
        </header>
        <Log />
      </StoreProvider>
    </div>
  )
}

export default App
