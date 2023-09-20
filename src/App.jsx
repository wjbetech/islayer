import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { MonstersContainer } from './components/MonstersContainer';
import { Modal } from "./components/Modal";

function App() {

  const [modalOn, setModalOn] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Header />
      <MonstersContainer setModalOn={setModalOn} />
      {modalOn ? <Modal /> : ""}
    </div>
  );
}

export default App;

