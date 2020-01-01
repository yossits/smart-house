import React from 'react'
import { Link } from 'react-router-dom'

export default function RoomButton(props) {



    return (
        <div>
            <Link to="/room">
                <button
                    onClick={() => props.sendToRoom(props.type, props.name, props.color)}
                    style={{ backgroundColor: props.color }}
                >{props.name}
                </button>
            </Link>
        </div>
    )
}
