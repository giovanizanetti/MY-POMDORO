import './App.css'
import Navigation from './components/Navivation'
import Timer from './components/Timer'
import StoreProvider from './StoreProvider/index'
import Log from './components/Log'
import Particles from 'react-particles-js'
import { config, particlesStyle } from './particles-config'

function App() {
  return (
    <div
      className='App'
      // style={{
      //   position: 'absolute',
      //   top: 0,
      //   left: 0,
      //   width: '100%',
      //   height: '100%',
      // }}
    >
      <StoreProvider>
        <Navigation />
        <Particles params={config} style={particlesStyle} />
        <div className='App-header'>
          <Timer />
        </div>
        <Log />
      </StoreProvider>
    </div>
  )
}

export default App
