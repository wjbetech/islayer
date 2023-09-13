import { NavBar } from './components/NavBar'
import { Header } from './components/Header'
import { MonstersContainer } from './components/MonstersContainer'

function App() {
  return (
    <div className="App bg-slate-500">
      <NavBar />
      <Header />
      <MonstersContainer />
    </div>
  )
}

export default App
