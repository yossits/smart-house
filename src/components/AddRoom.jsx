import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../css/AddRoom.css'
import { CirclePicker } from 'react-color'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { DropdownButton, Dropdown,ButtonToolbar ,Button, InputGroup, FormControl } from 'react-bootstrap'


const AddRoom = ({ setDataRoom, history }) => {

    const [roomSelectInput, setroomSelectInput] = useState('-- choose --')
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
        if (roomSelectInput === '-- choose --' || roomNameInput.length < 1) {
            setShow(true)
        } else {
            setDataRoom(roomSelectInput, roomNameInput, background)
            history.push('/');
        }
    }

    const AlertDismissible = () => {

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

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">room name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={roomName}
                    maxLength="5"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>

            <div>
                <CirclePicker onChangeComplete={roomColor} />
            </div>

            <ButtonToolbar>
                <Button onClick={sendDateToApp} variant="outline-success">Create</Button>
            </ButtonToolbar>

        </div>
    )
}
export default withRouter(AddRoom);