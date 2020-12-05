import './App.css'
import Navigation from './components/Navivation'
import Timer from './components/Timer'
import StoreProvider from './StoreProvider/index'
import Log from './components/Log'
import Particles from 'react-particles-js'
import { config } from './particles-config'

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <Navigation />
        {console.log(config)}
        <Particles params={config} />
        <div className='App-header'>
          <Timer />
        </div>
        <Log />
      </StoreProvider>
    </div>
  )
}

export default App
