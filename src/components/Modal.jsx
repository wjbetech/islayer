import React from 'react'
import "./Modal.css"
import { RiCloseLine } from "react-icons/ri"

export const Modal = ({ setModalOn, props }) => {

    const handleClick = () => {
        setModalOn(false)
    }

    return (
        <div 
            className="modal-container darkBG"
            onClick={handleClick}
        >
            <div className="centered">
                <h1>{props.name}</h1>
            </div>
            <button 
                className="closeBtn" 
                onClick={() => setModalOn(false)}
            >
                <RiCloseLine className='mb-2' />
            </button>
        </div>
  )
}
