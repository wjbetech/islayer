import { NavBar } from './components/NavBar'
import { Header } from './components/Header'
import { MonstersContainer } from './components/MonstersContainer'
import { Modal } from './components/Modal'
import { useState } from 'react'


function App() {

  const [modalOn, setModalOn] = useState(false)

  return (
    <div className="App">
      <NavBar />
      <Header />
      <MonstersContainer />
      {modalOn ? <Modal setModalOn={setModalOn} /> : ""}
    </div>
  )
}

export default App
