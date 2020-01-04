import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/AddRoom.css'
import { CirclePicker } from 'react-color'


export default function AddRoom({ setDataRoom }) {

    const [roomSelectInput, setroomSelectInput] = useState('')
    const [roomNameInput, setRoomNameInput] = useState('')
    const [background, setbackground] = useState('#fff')

    const roomName = (e) => {
        if (e.target.value.length > 0) {
            setRoomNameInput(e.target.value)

        } else {
            setRoomNameInput('')
        }
    }

    const roomColor = (e) => {
        setbackground(e.hex)
    }

    const sendDateToApp = () => {
        if (roomSelectInput.length < 1 || roomNameInput.length < 1) {
            alert('ERROR!');
        } else {
            setDataRoom(roomSelectInput, roomNameInput, background)
        }
    }

    return (
        <div className="AddRoom">

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
            <div className="AddRoom-circle">
                <CirclePicker onChangeComplete={roomColor} />
            </div>
            <br />
            <Link to='/'><button onClick={sendDateToApp}>create</button></Link>

        </div>
    )
}
