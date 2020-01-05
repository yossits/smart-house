import React from 'react'
import { withRouter } from 'react-router-dom'
import '../css/RoomButton.css'
import { Badge, Button } from 'reactstrap';

const RoomButton = ({ quantity, setroomIndex, name, color, index, history }) => {

    const stateAndRoute = () => {
        history.push('/room');
        return setroomIndex(index)
    }

    return (
        <Button
            onClick={stateAndRoute}
            className="RoomButton-button"
            style={{ backgroundColor: color }}
            color="primary" outline
        > {name}  <Badge color="secondary">{quantity}</Badge>
        </Button>
    )
}
export default withRouter(RoomButton);