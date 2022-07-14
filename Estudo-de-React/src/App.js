import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import { Pessoa2 } from './components/Pessoa'

function App() {
  const name = 'Ericklis'

  const newName = name.toUpperCase()
  return (
    <div className="App">
      {/*<h1>Estudo de React</h1>
      <h3>{name}</h3>
      <h3>{newName}</h3>*/}
      <HelloWorld />
      <SayMyName nome="Ericklis" />
      <SayMyName nome="Maria" />
      <Pessoa
        nome="Ericklis"
        idade="22 anos"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App
