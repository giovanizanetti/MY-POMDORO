import './App.css'
import Navigation from './components/Navivation'
import Timer from './components/Timer'
import Settings from './components/Settings'
import StoreProvider from './StoreProvider/index'

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <Navigation />
        <header className='App-header'>
          <Timer />
        </header>
        <Settings />
      </StoreProvider>

      {/* <header className='App-header'>
        <Timer />
      </header> */}
    </div>
  )
}

export default App
