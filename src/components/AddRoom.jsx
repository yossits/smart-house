import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../css/AddRoom.css'
import { CirclePicker } from 'react-color'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';



const AddRoom =({ setDataRoom, history })=>{

    const [roomSelectInput, setroomSelectInput] = useState('')
    const [roomNameInput, setRoomNameInput] = useState('')
    const [background, setbackground] = useState('#fff')
    const [show, setShow] = useState(false);

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
            setShow(true)
        } else {
            setDataRoom(roomSelectInput, roomNameInput, background) 
            history.push('/');
        }
    }

    const AlertDismissibleExample = () =>{
       
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>You got an error!</Alert.Heading>
              <p>
                you have to choose room name and type
              </p>
            </Alert>
          );
        }
    }
      

    return (
        <div className="AddRoom">

            {AlertDismissibleExample()}
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
            <button onClick={sendDateToApp}>create</button>

        </div>
    )
}
export default withRouter(AddRoom);