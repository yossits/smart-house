import React from 'react'
import { withRouter } from 'react-router-dom'
import '../css/AddRoomButton.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const AddRoomButton = ({history}) => {
    return (
        <div className="AddRoomButton">
            <Fab onClick={()=>{history.push('/addroom')}} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    )
}
export default withRouter(AddRoomButton)