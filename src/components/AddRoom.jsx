import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../css/AddRoom.css'
import { CirclePicker } from 'react-color'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import DropdownButton  from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


const AddRoom =({ setDataRoom, history })=>{

    const [roomSelectInput, setroomSelectInput] = useState('--Please choose an option--')
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

    const AlertDismissible = () =>{
       
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
            {AlertDismissible()}
                <DropdownButton id="dropdown-basic-button" title={roomSelectInput}>
                    <Dropdown.Item onClick={() => setroomSelectInput("Bedroom")} >Bedroom</Dropdown.Item>
                    <Dropdown.Item onClick={() => setroomSelectInput("kitchen")} >kitchen</Dropdown.Item>
                    <Dropdown.Item onClick={() => setroomSelectInput("toilet")} >toilet</Dropdown.Item>
                    <Dropdown.Item onClick={() => setroomSelectInput("Bathroom")} >Bathroom</Dropdown.Item>
                </DropdownButton>
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