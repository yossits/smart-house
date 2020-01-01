import React from 'react'
import { Link } from 'react-router-dom'

export default function AddRoomButton() {
    return (
        <div>
            <Link to='/addroom'><button>+</button></Link>
        </div>
    )
}
