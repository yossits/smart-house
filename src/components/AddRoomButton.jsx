import React from 'react'
import { Link } from 'react-router-dom'
import '../css/AddRoomButton.css'

export default function AddRoomButton() {
    return (
        <div className="AddRoomButton-main">
            <Link to='/addroom'><button>+</button></Link>
        </div>
    )
}
