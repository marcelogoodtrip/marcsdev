import './styles/app.sass'
import Slogan from './assets/marcsdev-logo.png'

function App() {

  return (
    <div className="App">
      <div className="image container">
        <img src={Slogan} alt="Logo e Slogan" />
      </div>
    </div>
  )
}

export default App