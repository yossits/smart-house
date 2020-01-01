import React from 'react'
import { Link } from 'react-router-dom'

export default function RoomButton({ setroomIndex, name, color, index }) {



    return (
        <div>
            <Link to="/room">
                <button
                    onClick={() => setroomIndex(index)}
                    style={{ backgroundColor: color }}
                >{name}
                </button>
            </Link>
        </div>
    )
}
