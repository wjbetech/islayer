import React from 'react'
import "./Modal.css"

export const Modal = ({ modalOn, setModalOn, name, level, slayer, img, hitpoints, itemReq, drops }) => {

  return (
    <div className="modal-container">
        <div className="modal-header">
            <h1>{name}</h1>
        </div>
        <div className="modal-img">
            <img src={img} alt={name} />
        </div>
        <div className="modal-body">
            <h3>Combat: {level}</h3>
            <h3>Slayer: {slayer}</h3>
        </div>
        <button className="modal-button" onClick={() => setModalOn(false)}>
            &times;
        </button>
    </div>
  )
}
