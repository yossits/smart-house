import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function AddRoom(props) {

    const [roomSelectInput, setroomSelectInput] = useState('')
    const [roomNameInput, setRoomNameInput] = useState('')
    const [roomColorInput, setRoomColorInput] = useState('white')

    const roomName = (e) => {
        if (e.target.value.length > 0) {
            setRoomNameInput(e.target.value)
        } else {
            setRoomNameInput('')
        }
    }

    const roomColor = (e) => {
        if (e.target.value.length > 0) {
            setRoomColorInput(e.target.value)
        } else {
            setRoomColorInput('white')
        }
    }

    const sendDateToApp = () => {
        if (roomSelectInput.length < 1 || roomNameInput.length < 1) {
            alert('ERROR!');
        } else {
            props.RoomData(roomSelectInput, roomNameInput, roomColorInput)
        }
    }


    return (
        <div>
            <select onChange={(e) => { setroomSelectInput(e.target.value) }} name="room">
                <option value="">--Please choose an option--</option>
                <option value="Bedroom">Bedroom</option>
                <option value="kitchen">kitchen</option>
                <optgroup label="Bathroom/toilet">
                    <option value="toilet">toilet</option>
                    <option value="Bathroom">Bathroom</option>
                </optgroup>
            </select>
            <br />
            <input
                onChange={roomName}
                maxLength="5"
                placeholder=" room name..."
                type="text"
            />
            <br />
            <input
                onChange={roomColor}
                placeholder=" room color..."
                type="text"
            />
            <br />
            <Link to='/'><button onClick={sendDateToApp}>create</button></Link>
        </div>
    )
}