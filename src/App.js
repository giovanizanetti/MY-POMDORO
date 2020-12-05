import './App.css'
import Navigation from './components/Navivation'
import Timer from './components/Timer'
import StoreProvider from './StoreProvider/index'
import Log from './components/Log'
import Particles from 'react-particles-js'

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <Navigation />
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: '#3CA9D1',
                  blur: 5,
                },
              },
              shape: {
                polygon: {
                  nb_sides: 20,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100vh',
          }}
        />
        <div className='App-header'>
          <Timer />
        </div>
        <Log />
      </StoreProvider>
    </div>
  )
}

export default App
