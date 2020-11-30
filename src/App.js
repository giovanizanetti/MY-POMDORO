import './App.css'
import Navigation from './components/Navivation'
import Timer from './components/Timer'
import StoreProvider from './StoreProvider/index'

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <Navigation />
        <header className='App-header'>
          <Timer />
        </header>
      </StoreProvider>

      {/* <header className='App-header'>
        <Timer />
      </header> */}
    </div>
  )
}

export default App
