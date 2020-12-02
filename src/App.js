import './App.css'
import Navigation from './components/Navivation'
import Timer from './components/Timer'
import StoreProvider from './StoreProvider/index'
import Log from './components/Log'
import { useEffect, useContext } from 'react'

function App() {
  // useEffect(() => console.log(JSON.parse(localStorage.userSettings)), [])
  return (
    <div className='App'>
      <StoreProvider>
        <Navigation />
        <header className='App-header'>
          <Timer />
        </header>
        <Log />
      </StoreProvider>

      {/* <header className='App-header'>
        <Timer />
      </header> */}
    </div>
  )
}

export default App
